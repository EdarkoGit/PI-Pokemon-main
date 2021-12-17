const axios = require("axios");
const { urlBaseApi } = require("../constants/urls");
const { pokemons } = require("../data/pokemons.json");

module.exports = {
  fillModelType: async function () {
    await axios.post(`${urlBaseApi}/types`);
  },
  fillModelPokemon: async function () {
    const arrPromises = pokemons.map((item) => definitionPromisePost(item));
    await Promise.all(arrPromises);
  },
};
const definitionPromisePost = (body) => {
  return axios.post(`${urlBaseApi}/pokemons`, body);
};
