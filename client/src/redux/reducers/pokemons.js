import {
  SET_ALL_POKEMONS,
  SET_POKEMON,
  SET_SLICE_POKEMONS,
} from "../constants/pokemons";

const inicialState = {
  pokemon: {},
  allPokemons: [],
  copyAllPokemons: [],
  slicePokemons: [],
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
    case SET_SLICE_POKEMONS:
      return {
        ...state,
        slicePokemons: payload,
      };
    default:
      return state;
  }
};
