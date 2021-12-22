import React from "react";
import { useSelector } from "react-redux";
import { renderOnePokemon, renderPokemons } from "../../utils/maps";
import { PokemonStyle } from "./style";

const Pokemon = () => {
  const slicePokemons = useSelector((state) => state.pokemons.slicePokemons);
  const pokemon = useSelector((state) => state.pokemons.pokemon);
  const whatRender = useSelector((state) => state.flags.whatRender);
  return (
    <PokemonStyle>
      {whatRender === "pokemon"
        ? renderOnePokemon(pokemon)
        : whatRender === "allPokemons" || "filterPokemons"
        ? renderPokemons(slicePokemons)
        : null}
    </PokemonStyle>
  );
};

export default Pokemon;
