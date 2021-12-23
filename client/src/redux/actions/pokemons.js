import { actionGenerator, axiosGet } from "../../utils/actions";
import { SET_WHAT_RENDER } from "../constants/flags";
import {
  SET_ALL_POKEMONS,
  SET_COPY_ALL_POKEMONS,
  SET_DETAIL_POKEMON,
  SET_POKEMON,
  SET_TYPES,
  URL_BASE_BACKEND,
} from "../constants/pokemons";

export const getPokemon = (name) => {
  return async (dispatch) => {
    try {
      const payload = await axiosGet(
        `${URL_BASE_BACKEND}/pokemons?name=${name}`
      );
      dispatch(actionGenerator(SET_POKEMON, payload));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(actionGenerator(SET_WHAT_RENDER, "pokemon"));
    }
  };
};
export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      const payload = await axiosGet(`${URL_BASE_BACKEND}/pokemons`);
      dispatch(actionGenerator(SET_ALL_POKEMONS, payload));
      dispatch(actionGenerator(SET_COPY_ALL_POKEMONS, payload));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(actionGenerator(SET_WHAT_RENDER, "allPokemons"));
    }
  };
};
export const getTypes = () => {
  return async (dispatch) => {
    try {
      const payload = await axiosGet(`${URL_BASE_BACKEND}/types`);
      dispatch(actionGenerator(SET_TYPES, payload));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getDetailPokemon = (id) => {
  return async (dispatch) => {
    try {
      const payload = await axiosGet(`${URL_BASE_BACKEND}/pokemons/${id}`);
      dispatch(actionGenerator(SET_DETAIL_POKEMON, payload));
    } catch (error) {
      console.log(error);
    }
  };
};
