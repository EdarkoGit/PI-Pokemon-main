const { Router } = require("express");
const pokemons = Router();
const { Pokemon } = require("../db");
const { urlBasePokeapi } = require("../constants/urls");
const {
  getAxios,
  definitionPromise,
  extractData,
  extractDataOnePokemon,
} = require("../utils");

pokemons.post("/", async (req, res, next) => {
  const { name, hp, attack, defense, speed, height, weight, img, types } =
    req.body;
  try {
    await getAxios(`${urlBasePokeapi}/pokemon/${name}`);
    return res.json({ msg: "Already exists" });
  } catch (error) {
    console.log("Does not exist in pokeapi");
  }
  try {
    const [pokemon, created] = await Pokemon.findOrCreate({
      where: { name },
      defaults: {
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        img,
      },
    });
    if (!created) {
      res.json({ msg: "Already exists" });
    } else {
      await pokemon.setTypes(types); // setTypes recibe un array como parametro
      res.json({ msg: "Pokemon created successfully" });
    }
  } catch (error) {
    next(error);
  }
});
pokemons.get("/", async (req, res, next) => {
  const { name } = req.query;
  try {
    if (name) {
      const dbPokemon = await Pokemon.findOne({ where: { name } });
      if (dbPokemon !== null) {
        res.json(await extractDataOnePokemon(dbPokemon));
      } else {
        try {
          const pokeapiPokemon = await getAxios(
            `${urlBasePokeapi}/pokemon/${name}`
          );
          res.json(await extractDataOnePokemon(pokeapiPokemon));
        } catch (error) {
          res.json({ msg: "Not found pokemon" });
        }
      }
    } else {
      const data = await getAxios(`${urlBasePokeapi}/pokemon?limit=40`);
      const arrPromises = data.results.map((item) =>
        definitionPromise(item.url)
      );
      const pokeapiPokemons = await Promise.all(arrPromises);
      const dbPokemons = await Pokemon.findAll();
      const pokemons = await extractData([...pokeapiPokemons, ...dbPokemons]);
      res.json(pokemons);
    }
  } catch (error) {
    next(error);
  }
});
pokemons.get("/:idPokemon", async (req, res, next) => {
  const { idPokemon } = req.params;
  try {
    if (idPokemon.length === 36) {
      const pokemon = await Pokemon.findByPk(idPokemon);
      if (pokemon !== null) {
        return res.json(await extractDataOnePokemon(pokemon));
      }
    } else {
      const pokemon = await getAxios(`${urlBasePokeapi}/pokemon/${idPokemon}`);
      res.json(await extractDataOnePokemon(pokemon));
    }
  } catch (error) {
    next(error);
  }
});

module.exports = pokemons;
