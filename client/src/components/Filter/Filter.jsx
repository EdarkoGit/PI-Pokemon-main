import React from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions/pokemons";
import { Btn } from "../Btn/Btn";
import Radio from "../Radio/Radio";
import Select from "../Select/Select";
import { FilterStyle } from "./style";

const Filter = () => {
  const dispatch = useDispatch();
  const onClickAllPokemons = (e) => {
    e.preventDefault();
    dispatch(getAllPokemons());
  };
  return (
    <FilterStyle>
      <Select />
      <Radio />
      <Btn>Filter</Btn>
      <Btn onClick={onClickAllPokemons}>All</Btn>
    </FilterStyle>
  );
};

export default Filter;
