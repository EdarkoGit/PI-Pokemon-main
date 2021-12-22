import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getValueButtons } from "./services";
import { PagedStyle } from "./style";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { blue } from "../../styles/colors";
import { actionGenerator } from "../../utils/actions";
import { SET_SLICE_POKEMONS } from "../../redux/constants/pokemons";
import { SET_LIMIT } from "../../redux/constants/flags";

const style = {
  color: "red",
};

const Paged = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons.allPokemons);
  const filterPokemons = useSelector((state) => state.pokemons.filterPokemons);
  const whatRender = useSelector((state) => state.flags.whatRender);
  const onClickFilter = useSelector((state) => state.flags.onClickFilter);
  const limit = useSelector((state) => state.flags.limit);
  const [numberPages, setNumberPages] = useState(0);
  const [arrButtons, setArrButtons] = useState([]);

  useEffect(() => {
    if (whatRender === "allPokemons") {
      const result = Math.ceil((allPokemons.length + 3) / 12);
      setNumberPages(result);
    } else if (whatRender === "filterPokemons") {
      const result = Math.ceil((filterPokemons.length + 3) / 12);
      setNumberPages(result);
    }
  }, [allPokemons, filterPokemons, whatRender]);

  useEffect(() => {
    const result = getValueButtons(numberPages);
    setArrButtons(result);
  }, [numberPages]);

  useEffect(() => {
    let result = [];
    if (whatRender === "allPokemons") {
      result =
        limit === "9"
          ? allPokemons.slice(0, limit)
          : allPokemons.slice(limit - 12, limit);
    } else if (whatRender === "filterPokemons") {
      result =
        limit === "9"
          ? filterPokemons.slice(0, limit)
          : filterPokemons.slice(limit - 12, limit);
    }
    dispatch(actionGenerator(SET_SLICE_POKEMONS, result));
  }, [allPokemons, filterPokemons, whatRender, limit, dispatch]);

  useEffect(() => {
    dispatch(actionGenerator(SET_LIMIT, "9"));
  }, [whatRender, onClickFilter, dispatch]);
  //---------------------------------------------------------------------------------
  const onClickSetLimit = (e) => {
    const valueButton = e.target.id;
    dispatch(actionGenerator(SET_LIMIT, valueButton));
  };
  const onClickNextLimit = () => {
    const position = arrButtons[arrButtons.length - 1];
    if (limit !== `${position}`) {
      let result = parseInt(limit) + 12;
      result = `${result}`;
      dispatch(actionGenerator(SET_LIMIT, result));
    }
  };
  const onClickBeforetLimit = () => {
    if (limit !== "9") {
      let result = limit - 12;
      result = `${result}`;
      dispatch(actionGenerator(SET_LIMIT, result));
    }
  };
  if (numberPages === 1 || whatRender === "pokemon") {
    return null;
  }
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
