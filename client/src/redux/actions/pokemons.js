import { actionGenerator, axiosGet } from "../../utils/actions";
import { SET_POKEMON, URL_BASE_BACKEND } from "../constants/pokemons";

export const getPokemon = (name) => {
  return async (dispatch) => {
    const payload = await axiosGet(`${URL_BASE_BACKEND}/pokemons?name=${name}`);
    dispatch(actionGenerator(SET_POKEMON, payload));
  };
};
