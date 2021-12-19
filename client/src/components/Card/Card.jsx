import React from "react";
import { CardStyle } from "./style";
import { Link } from "react-router-dom";
import { renderTypes } from "../../utils/maps";

const Card = ({ id, name, img, types }) => {
  return (
    <CardStyle>
      {id ? (
        <Link to={`detail/${id}`}>
          <picture>
            <img src={img} alt={name} />
          </picture>
          <h2>{name}</h2>
          {renderTypes(types)}
        </Link>
      ) : null}
    </CardStyle>
  );
};

export default Card;
