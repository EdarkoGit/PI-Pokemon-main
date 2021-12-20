import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import Search from "../Search/Search";

import { DefaultHomeStyle } from "./style";

const DefaultHome = () => {
  return (
    <DefaultHomeStyle>
      <Search />
      <Pokemon />
    </DefaultHomeStyle>
  );
};

export default DefaultHome;
