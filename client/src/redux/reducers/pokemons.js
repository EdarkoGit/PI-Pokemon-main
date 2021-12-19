import { SET_ALL_POKEMONS, SET_POKEMON } from "../constants/pokemons";

const inicialState = {
  pokemon: {},
  allPokemons: [],
  copyAllPokemons: [],
};

export const pokemons = (state = inicialState, { type, payload }) => {
  switch (type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemon: payload,
      };
    case SET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: payload,
      };
    default:
      return state;
  }
};
