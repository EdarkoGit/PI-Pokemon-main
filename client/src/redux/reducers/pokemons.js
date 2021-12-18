import { SET_POKEMON } from "../constants/pokemons";

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
    default:
      return state;
  }
};
