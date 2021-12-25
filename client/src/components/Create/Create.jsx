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
      setKeySelect(Date.now());
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

  const onClickCreatePokemon = () => {
    if (Object.keys(err).length === 0) {
      dispatch(createPokemon({ ...dataCreate, types: createTypes }));
    }
  };

  return (
    <CreateStyle>
      <form action="">
        <section>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={onChangeDataCreate}
            value={dataCreate.name}
          />
          <span>{err.name ? err.name : null}</span>
        </section>
        {inputStats(onChangeDataCreate, dataCreate, err)}
        <section>
          <input key={keyFile} type="file" onChange={onChangeImgPokemon} />
          <span>{err.img ? err.img : null}</span>
        </section>
        <section>
          <Select key={keySelect} />
          <span>{err.types ? err.types : null}</span>
        </section>
        <Btn onClick={onClickCreatePokemon}>Create</Btn>
        {resCreatePokemon.msg ? <span>{resCreatePokemon.msg}</span> : null}
      </form>
    </CreateStyle>
  );
};

export default Create;
