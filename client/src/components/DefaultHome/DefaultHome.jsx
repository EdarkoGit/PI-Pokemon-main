import React from "react";
import Filter from "../Filter/Filter";
import Paged from "../Paged/Paged";
import Pokemon from "../Pokemon/Pokemon";
import Search from "../Search/Search";

import { DefaultHomeStyle } from "./style";

const DefaultHome = () => {
  return (
    <DefaultHomeStyle>
      <Search />
      <Filter />
      <Paged />
      <Pokemon />
      <Paged />
    </DefaultHomeStyle>
  );
};

export default DefaultHome;
