import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_ON_CLICK_FILTER,
  SET_WHAT_RENDER,
} from "../../redux/constants/flags";

import {
  SET_ALL_POKEMONS,
  SET_COPY_FILTER_POKEMONS,
  SET_FILTER_POKEMONS,
} from "../../redux/constants/pokemons";
import { actionGenerator } from "../../utils/actions";
import { Btn } from "../Btn/Btn";
import Order from "../Order/Order";
import Radio from "../Radio/Radio";
import Select from "../Select/Select";
import {
  convertTypes,
  filterAllOption,
  filterByExisting,
  filterByTypes,
} from "./services";
import { FilterStyle } from "./style";

const Filter = () => {
  const dispatch = useDispatch();
  const { types, existing } = useSelector((state) => state.forms.filter);
  const allTypes = useSelector((state) => state.pokemons.types);
  const allPokemons = useSelector((state) => state.pokemons.allPokemons);
  const copyAllPokemons = useSelector(
    (state) => state.pokemons.copyAllPokemons
  );
  const onClickFilter = useSelector((state) => state.flags.onClickFilter);
  const onClickAllPokemons = (e) => {
    e.preventDefault();
    dispatch(actionGenerator(SET_ALL_POKEMONS, copyAllPokemons));
    dispatch(actionGenerator(SET_WHAT_RENDER, "allPokemons"));
  };
  const onClickFilterPokemons = (e) => {
    e.preventDefault();
    if (types.length || existing) {
      let result = [];
      const nameTypes = convertTypes(types, allTypes);
      if (types.length && existing) {
        result = filterAllOption(allPokemons, existing, nameTypes);
      } else if (types.length) {
        result = filterByTypes(allPokemons, nameTypes);
      } else if (existing) {
        result = filterByExisting(allPokemons, existing);
      }
      dispatch(actionGenerator(SET_FILTER_POKEMONS, result));
      dispatch(actionGenerator(SET_COPY_FILTER_POKEMONS, result));
      dispatch(actionGenerator(SET_WHAT_RENDER, "filterPokemons"));
      dispatch(actionGenerator(SET_ON_CLICK_FILTER, !onClickFilter));
    }
  };
  return (
    <FilterStyle>
      <Select />
      <Radio />
      <Btn onClick={onClickFilterPokemons}>Filter</Btn>
      <Btn className="all" onClick={onClickAllPokemons}>
        All
      </Btn>
      <Order />
    </FilterStyle>
  );
};

export default Filter;
