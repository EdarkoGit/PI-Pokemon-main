import React, { useEffect, useState } from "react";
import { Btn } from "../Btn/Btn";
import { SelectStyle } from "./style";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../utils/actions";
import {
  SET_FILTER_TYPES,
  SET_FORMS_CREATE_TYPES,
} from "../../redux/constants/forms";
import { useLocation } from "react-router-dom";

const Select = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemons.types);
  const onClickFilter = useSelector((state) => state.flags.onClickFilter);
  const [collapse, setCollapse] = useState(false);
  const [dataSelect, setDataSelect] = useState([]);

  const onClickCollapse = (e) => {
    e.preventDefault();
    setCollapse(!collapse);
  };
  const onClickCheckbox = (e) => {
    const valueCheckbox = parseInt(e.target.id);
    if (dataSelect.includes(valueCheckbox)) {
      setDataSelect(dataSelect.filter((item) => item !== valueCheckbox));
    } else {
      setDataSelect([...dataSelect, valueCheckbox]);
    }
  };
  useEffect(() => {
    if (pathname === "/home/create") {
      dispatch(actionGenerator(SET_FORMS_CREATE_TYPES, dataSelect));
    } else {
      dispatch(actionGenerator(SET_FILTER_TYPES, dataSelect));
    }
  }, [dataSelect, pathname, dispatch]);
  useEffect(() => {
    setDataSelect([]);
  }, [onClickFilter]);
  return (
    <SelectStyle>
      <Btn onClick={onClickCollapse}>
        Types
        <IoMdArrowDropdownCircle size="20px" />
      </Btn>
      {collapse && types ? (
        <div className="boxspan">
          {types.map((item) => {
            return (
              <span key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.name}
                  onClick={onClickCheckbox}
                  readOnly
                  checked={dataSelect.includes(item.id)}
                />
                <label htmlFor={item.id}>{item.name}</label>
              </span>
            );
          })}
        </div>
      ) : null}
    </SelectStyle>
  );
};

export default Select;
