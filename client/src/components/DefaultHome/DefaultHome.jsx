import React from "react";
import Paged from "../Paged/Paged";
import Pokemon from "../Pokemon/Pokemon";
import Search from "../Search/Search";

import { DefaultHomeStyle } from "./style";

const DefaultHome = () => {
  return (
    <DefaultHomeStyle>
      <Search />
      <Paged />
      <Pokemon />
      <Paged />
    </DefaultHomeStyle>
  );
};

export default DefaultHome;
