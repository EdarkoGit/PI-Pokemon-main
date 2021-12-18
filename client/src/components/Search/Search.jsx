import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/actions/pokemons";
import { SearchStyle } from "./style";

const Search = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons.pokemon);
  const [pokeName, setPokeName] = useState("");
  const onClickSearch = (e) => {
    e.preventDefault();
    if (pokeName !== "") {
      dispatch(getPokemon(pokeName));
    }
  };
  const onChangeSearch = (e) => {
    setPokeName(e.target.value);
  };
  useEffect(() => {
    if (pokemon.name) {
      setPokeName("");
    }
  }, [pokemon]);
  return (
    <SearchStyle>
      <input
        className="inputSearch"
        type="text"
        placeholder="Search"
        onChange={onChangeSearch}
        value={pokeName}
      />
      <IoIosSearch className="btnSearch" onClick={onClickSearch} />
    </SearchStyle>
  );
};

export default Search;
