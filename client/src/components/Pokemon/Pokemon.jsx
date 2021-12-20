import React from "react";
import { useSelector } from "react-redux";
import { renderPokemons } from "../../utils/maps";
import { PokemonStyle } from "./style";

const Pokemon = () => {
  const slicePokemons = useSelector((state) => state.pokemons.slicePokemons);
  const whatRender = useSelector((state) => state.flags.whatRender);
  return (
    <PokemonStyle>
      {slicePokemons.length && whatRender === "allPokemons"
        ? renderPokemons(slicePokemons)
        : null}
    </PokemonStyle>
  );
};

export default Pokemon;
