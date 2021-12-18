import { combineReducers } from "redux";
import { pokemons } from "./pokemons";
import { flags } from "./flags";

export const rootReducer = combineReducers({ pokemons, flags });
