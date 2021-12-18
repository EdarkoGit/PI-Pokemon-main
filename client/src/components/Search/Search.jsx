import React from "react";
import { IoIosSearch } from "react-icons/io";
import { SearchStyle } from "./style";

const Search = () => {
  return (
    <SearchStyle>
      <input className="inputSearch" type="text" placeholder="Search" />
      <IoIosSearch className="btnSearch" />
    </SearchStyle>
  );
};

export default Search;
