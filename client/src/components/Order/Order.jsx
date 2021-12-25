import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_FORMS_ORDER } from "../../redux/constants/forms";
import {
  SET_ALL_POKEMONS,
  SET_FILTER_POKEMONS,
} from "../../redux/constants/pokemons";
import { actionGenerator } from "../../utils/actions";
import { pokemonsSort } from "./services";
import { OrderStyle } from "./style";

const Order = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.forms.order);
  const whatRender = useSelector((state) => state.flags.whatRender);
  const copyAllPokemons = useSelector(
    (state) => state.pokemons.copyAllPokemons
  );
  const copyFilterPokemons = useSelector(
    (state) => state.pokemons.copyFilterPokemons
  );
  const onChangeDataOrder = (e) => {
    const typeOrder = e.target.value;
    dispatch(actionGenerator(SET_FORMS_ORDER, typeOrder));
  };

  useEffect(() => {
    const dispatchAction = (key, desc) => {
      if (whatRender === "allPokemons") {
        const pokeSort = pokemonsSort(
          copyAllPokemons,
          key,
          desc ? true : undefined
        );
        dispatch(actionGenerator(SET_ALL_POKEMONS, pokeSort));
      } else if (whatRender === "filterPokemons") {
        const pokeSort = pokemonsSort(
          copyFilterPokemons,
          key,
          desc ? true : undefined
        );
        dispatch(actionGenerator(SET_FILTER_POKEMONS, pokeSort));
      }
    };
    switch (order) {
      case "default":
        if (whatRender === "allPokemons") {
          dispatch(actionGenerator(SET_ALL_POKEMONS, copyAllPokemons));
        } else if (whatRender === "filterPokemons") {
          dispatch(actionGenerator(SET_FILTER_POKEMONS, copyFilterPokemons));
        }
        break;
      case "a-z":
        dispatchAction("name");
        break;
      case "z-a":
        dispatchAction("name", true);
        break;
      case "littleAttack":
        dispatchAction("attack");
        break;
      case "fullAttack":
        dispatchAction("attack", true);
        break;
      default:
        break;
    }
  }, [order, whatRender, copyAllPokemons, copyFilterPokemons, dispatch]);
  return (
    <OrderStyle className="order">
      <select className="select" onChange={onChangeDataOrder} value={order}>
        <option value="default">Default</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="fullAttack">Full attack</option>
        <option value="littleAttack">Little attack</option>
      </select>
    </OrderStyle>
  );
};

export default Order;
