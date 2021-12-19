import { actionGenerator, axiosGet } from "../../utils/actions";
import { SET_WHAT_RENDER } from "../constants/flags";
import {
  SET_ALL_POKEMONS,
  SET_POKEMON,
  URL_BASE_BACKEND,
} from "../constants/pokemons";

export const getPokemon = (name) => {
  return async (dispatch) => {
    try {
      const payload = await axiosGet(
        `${URL_BASE_BACKEND}/pokemons?name=${name}`
      );
      dispatch(actionGenerator(SET_POKEMON, payload));
      dispatch(actionGenerator(SET_WHAT_RENDER, "pokemon"));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      const payload = await axiosGet(`${URL_BASE_BACKEND}/pokemons`);
      dispatch(actionGenerator(SET_ALL_POKEMONS, payload));
      dispatch(actionGenerator(SET_WHAT_RENDER, "allPokemons"));
    } catch (error) {
      console.log(error);
    }
  };
};
