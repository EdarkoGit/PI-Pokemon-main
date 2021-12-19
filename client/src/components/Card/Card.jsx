import React from "react";
import { CardStyle } from "./style";
import { Link } from "react-router-dom";

const Card = ({ id, name, img, types }) => {
  return (
    <CardStyle>
      <Link to="/">info pokemon</Link>
    </CardStyle>
  );
};

export default Card;
