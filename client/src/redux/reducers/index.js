import { combineReducers } from "redux";
import { pokemons } from "./pokemons";
import { flags } from "./flags";
import { forms } from "./forms";

export const rootReducer = combineReducers({ pokemons, flags, forms });
