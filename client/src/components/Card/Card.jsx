import React from "react";
import { CardStyle } from "./style";
import { renderTypes } from "../../utils/maps";

const Card = ({ id, name, img, types }) => {
  return (
    <CardStyle to={`detail/${id}`}>
      {id ? (
        <div>
          <picture>
            <img src={img} alt={name} />
          </picture>
          <h2>{name}</h2>
          {renderTypes(types)}
        </div>
      ) : (
        <div className="notFound">Not found :(</div>
      )}
    </CardStyle>
  );
};

export default Card;
