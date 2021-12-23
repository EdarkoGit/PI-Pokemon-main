import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailPokemon } from "../../redux/actions/pokemons";
import { renderTypes } from "../../utils/maps";
import { DetailStyle } from "./style";

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const {
    id,
    img,
    name,
    types,
    stats /* : { hp, attack, defense, speed, height, weight }, */,
  } = useSelector((state) => state.pokemons.detailPokemon);
  useEffect(() => {
    dispatch(getDetailPokemon(params.id));
  }, [params.id, dispatch]);
  return (
    <DetailStyle>
      {id ? (
        <section>
          <picture>
            <img src={img} alt={name} />
          </picture>
          <h2>{name}</h2>
          {renderTypes(types)}
          <section>
            <div>hp: {stats.hp}</div>
            <div>attack: {stats.attack}</div>
            <div>defense: {stats.defense}</div>
            <div>speed: {stats.speed}</div>
            <div>height: {stats.height}</div>
            <div>weight: {stats.weight}</div>
          </section>
        </section>
      ) : null}
    </DetailStyle>
  );
};

export default Detail;
