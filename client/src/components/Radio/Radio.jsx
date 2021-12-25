import React, { useState } from "react";
import { RadioStyle } from "./style";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { Btn } from "../Btn/Btn";
import { useEffect } from "react";
import { actionGenerator } from "../../utils/actions";
import { SET_FILTER_EXISTING } from "../../redux/constants/forms";
import { useDispatch, useSelector } from "react-redux";
const Radio = () => {
  const dispatch = useDispatch();
  const existing = useSelector((state) => state.forms.filter.existing);
  const onClickFilter = useSelector((state) => state.flags.onClickFilter);
  const [collapse, setCollapse] = useState(false);
  const [dataRadio, setDataRadio] = useState("");

  const onClickCollapse = (e) => {
    e.preventDefault();
    setCollapse(!collapse);
  };
  const onClickDataRadio = (e) => {
    if (existing === e.target.id) {
      setDataRadio("");
    } else {
      setDataRadio(e.target.id);
    }
  };
  useEffect(() => {
    dispatch(actionGenerator(SET_FILTER_EXISTING, dataRadio));
  }, [dataRadio, dispatch]);
  useEffect(() => {
    setDataRadio("");
  }, [onClickFilter]);
  return (
    <RadioStyle>
      <Btn onClick={onClickCollapse}>
        Existing
        <IoMdArrowDropdownCircle size="20px" />
      </Btn>
      {collapse ? (
        <section className="radiospan">
          <div>
            <input
              type="radio"
              id="existing"
              name="radio"
              onClick={onClickDataRadio}
              readOnly
              checked={existing === "existing"}
            />
            <label htmlFor="existing">Existing</label>
          </div>
          <div>
            <input
              type="radio"
              id="created"
              name="radio"
              onClick={onClickDataRadio}
              readOnly
              checked={existing === "created"}
            />
            <label htmlFor="created">Created</label>
          </div>
        </section>
      ) : null}
    </RadioStyle>
  );
};

export default Radio;
