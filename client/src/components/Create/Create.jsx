import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { urlCloudinary } from "../../constants/cloudinry";
import { Btn } from "../Btn/Btn";
import Select from "../Select/Select";
import { inputStats } from "./services";
import { CreateStyle } from "./style";
import { validate } from "./validate";
import axios from "axios";
import { createPokemon } from "../../redux/actions/pokemons";
import { SET_FORMS_CREATE_TYPES } from "../../redux/constants/forms";
import { actionGenerator } from "../../utils/actions";

const initDataCreate = {
  name: "",
  hp: 0,
  attack: 0,
  defense: 0,
  speed: 0,
  height: 0,
  weight: 0,
  img: "",
};
const Create = () => {
  const dispatch = useDispatch();
  const createTypes = useSelector((state) => state.forms.create.types);
  const resCreatePokemon = useSelector(
    (state) => state.pokemons.resCreatePokemon
  );
  const [dataCreate, setDataCreate] = useState(initDataCreate);
  const [err, setErr] = useState({});
  const [keyFile, setKeyFile] = useState(Date.now());
  const [keySelect, setKeySelect] = useState(Date.now());

  useEffect(() => {
    setErr(validate({ ...dataCreate, types: createTypes }));
  }, [dataCreate, createTypes]);

  useEffect(() => {
    if (resCreatePokemon.msg === "Pokemon created successfully") {
      setDataCreate(initDataCreate);
      setKeyFile(Date.now());
    }
  }, [resCreatePokemon, dispatch]);

  const onChangeDataCreate = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setDataCreate({
      ...dataCreate,
      [name]: value,
    });
  };

  const onChangeImgPokemon = async (e) => {
    const imgs = e.target.files;
    const formData = new FormData();
    formData.append("file", imgs[0]);
    formData.append("upload_preset", "imgPokemon"); // el preset debe llemarse tal cual lo tengas en cloudinary
    const data = await axios.post(urlCloudinary, formData);
    const urlImg = data.data.secure_url;
    setDataCreate({
      ...dataCreate,
      img: urlImg,
    });
  };

  const onClickCreatePokemon = (e) => {
    e.preventDefault();
    if (Object.keys(err).length === 0) {
      dispatch(createPokemon({ ...dataCreate, types: createTypes }));
      dispatch(actionGenerator(SET_FORMS_CREATE_TYPES, []));
      setKeySelect(Date.now());
    }
  };
  const setTypes = (dataSelect) => {
    dispatch(actionGenerator(SET_FORMS_CREATE_TYPES, dataSelect));
  };
  return (
    <CreateStyle>
      <form action="">
        <div className="name">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={onChangeDataCreate}
            value={dataCreate.name}
          />
          <span>{err.name ? err.name : null}</span>
        </div>
        {inputStats(onChangeDataCreate, dataCreate, err)}
        <div className="containerFile">
          <div className="image">
            <Btn>Image</Btn>
            <span>{err.img ? err.img : null}</span>
          </div>
          <input
            className="file"
            key={keyFile}
            type="file"
            onChange={onChangeImgPokemon}
          />
        </div>
        <div className="types ">
          <Select key={keySelect} initData={createTypes} setTypes={setTypes} />
          <span>{err.types ? err.types : null}</span>
        </div>
        <Btn
          disabled={Object.keys(err).length !== 0}
          onClick={onClickCreatePokemon}
        >
          Create
        </Btn>
        {resCreatePokemon.msg ? <span>{resCreatePokemon.msg}</span> : null}
      </form>
    </CreateStyle>
  );
};

export default Create;
