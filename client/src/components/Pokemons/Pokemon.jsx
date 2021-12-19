import React from "react";
import { useSelector } from "react-redux";
import { renderPokemons } from "../../utils/maps";
import { PokemonStyle } from "./style";

const Pokemon = () => {
  const allPokemons = useSelector((state) => state.pokemons.allPokemons);
  const whatRender = useSelector((state) => state.flags.whatRender);
  return (
    <PokemonStyle>
      {allPokemons.length && whatRender === "allPokemons"
        ? renderPokemons(allPokemons)
        : null}
    </PokemonStyle>
  );
};

export default Pokemon;
