import React, { useEffect, useState } from "react";
import { Btn } from "../Btn/Btn";
import { SelectStyle } from "./style";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../utils/actions";
import { SET_FILTER_TYPES } from "../../redux/constants/forms";

const Select = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemons.types);
  const formTypes = useSelector((state) => state.forms.filter.types);
  const onClickFilter = useSelector((state) => state.flags.onClickFilter);
  const [collapse, setCollapse] = useState(false);
  const [dataSelect, setDataSelect] = useState([]);

  const onClickCollapse = () => setCollapse(!collapse);
  const onClickCheckbox = (e) => {
    const valueCheckbox = parseInt(e.target.id);
    if (dataSelect.includes(valueCheckbox)) {
      setDataSelect(dataSelect.filter((item) => item !== valueCheckbox));
    } else {
      setDataSelect([...dataSelect, valueCheckbox]);
    }
  };
  useEffect(() => {
    dispatch(actionGenerator(SET_FILTER_TYPES, dataSelect));
  }, [dataSelect, dispatch]);
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
                  checked={formTypes.includes(item.id)}
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
