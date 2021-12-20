import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getValueButtons } from "./services";
import { PagedStyle } from "./style";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { blue } from "../../styles/colors";
import { actionGenerator } from "../../utils/actions";
import { SET_SLICE_POKEMONS } from "../../redux/constants/pokemons";

const style = {
  color: "red",
};

const Paged = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons.allPokemons);
  const [numberPages, setNumberPages] = useState(0);
  const [arrButtons, setArrButtons] = useState([]);
  const [limit, setLimit] = useState("9");

  useEffect(() => {
    const result = Math.ceil((allPokemons.length + 3) / 12);
    setNumberPages(result);
  }, [allPokemons]);
  useEffect(() => {
    const result = getValueButtons(numberPages);
    setArrButtons(result);
  }, [numberPages]);
  useEffect(() => {
    const result =
      limit === "9"
        ? allPokemons.slice(0, limit)
        : allPokemons.slice(limit - 12, limit);
    dispatch(actionGenerator(SET_SLICE_POKEMONS, result));
  }, [allPokemons, limit, dispatch]);
  const onClickSetLimit = (e) => {
    const valueButton = e.target.id;
    setLimit(valueButton);
  };
  const onClickNextLimit = () => {
    const position = arrButtons[arrButtons.length - 1];
    if (limit !== `${position}`) {
      let result = parseInt(limit) + 12;
      result = `${result}`;
      setLimit(result);
    }
  };
  const onClickBeforetLimit = () => {
    if (limit !== "9") {
      let result = limit - 12;
      result = `${result}`;
      setLimit(result);
    }
  };
  return (
    <PagedStyle>
      <div>
        <FaAngleDoubleLeft
          className="arrows"
          color={blue}
          onClick={onClickBeforetLimit}
        />
        {
          <section>
            {arrButtons.map((item, i) => (
              <button
                className="numbers"
                key={item}
                id={item}
                onClick={onClickSetLimit}
                style={limit === `${item}` ? style : null}
              >
                {i + 1}
              </button>
            ))}
          </section>
        }
        <FaAngleDoubleRight
          className="arrows"
          color={blue}
          onClick={onClickNextLimit}
        />
      </div>
    </PagedStyle>
  );
};

export default Paged;
