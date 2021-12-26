import React, { useEffect, useState } from "react";
import { Btn } from "../Btn/Btn";
import { SelectStyle } from "./style";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useSelector } from "react-redux";

const Select = ({ initData = [], setTypes = console.log("send funtion") }) => {
  const types = useSelector((state) => state.pokemons.types);
  const [collapse, setCollapse] = useState(false);
  const [dataSelect, setDataSelect] = useState(initData);

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
    setTypes(dataSelect);
  }, [dataSelect]);
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
