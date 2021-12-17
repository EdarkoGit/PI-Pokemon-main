const { Router } = require("express");
const pokemons = Router();
const { Pokemon } = require("../db");
const { urlBasePokeapi } = require("../constants/urls");
const { getAxios, definitionPromise, extractData } = require("../utils");

pokemons.get("/", async (req, res, next) => {
  try {
    const data = await getAxios(`${urlBasePokeapi}/pokemon?limit=40`);
    const arrPromises = data.results.map((item) => definitionPromise(item.url));
    const pokeapiPokemons = await Promise.all(arrPromises);
    const dbPokemons = await Pokemon.findAll();
    const pokemons = await extractData([...pokeapiPokemons, ...dbPokemons]);
    res.json(pokemons);
  } catch (error) {
    next(error);
  }
});
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

module.exports = pokemons;
