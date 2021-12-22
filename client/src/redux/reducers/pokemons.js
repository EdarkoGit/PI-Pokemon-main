import {
  SET_ALL_POKEMONS,
  SET_COPY_ALL_POKEMONS,
  SET_FILTER_POKEMONS,
  SET_POKEMON,
  SET_SLICE_POKEMONS,
  SET_TYPES,
} from "../constants/pokemons";

const inicialState = {
  pokemon: {},
  allPokemons: [],
  copyAllPokemons: [],
  filterPokemons: [],
  copyFilterPokemons: [],
  slicePokemons: [],
  types: [],
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
    case SET_COPY_ALL_POKEMONS:
      return {
        ...state,
        copyAllPokemons: payload,
      };
    case SET_SLICE_POKEMONS:
      return {
        ...state,
        slicePokemons: payload,
      };
    case SET_TYPES:
      return {
        ...state,
        types: payload,
      };
    case SET_FILTER_POKEMONS:
      return {
        ...state,
        filterPokemons: payload,
      };
    default:
      return state;
  }
};
