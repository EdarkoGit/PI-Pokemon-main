const axios = require("axios");
module.exports = {
  getAxios: async function (url) {
    const result = await axios(url);
    return result.data;
  },
  definitionPromise: function (url) {
    return axios.get(url).then((data) => data.data);
  },
  extractData: async function (arr) {
    // id, img, name, types, attack
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const id = item.id;
      const name = item.name;
      const img = item.db
        ? item.img
        : item.sprites.other.dream_world.front_default;
      const types = item.db
        ? await extractDataGetTypes(item)
        : item.types.map((item) => item.type.name);
      const attack = item.db
        ? item.attack
        : item.stats.find((item) => item.stat.name === "attack").base_stat;
      result.push({
        id,
        img,
        name,
        types,
        attack,
      });
    }
    return result;
  },
};
const extractDataGetTypes = async (instance) => {
  const result = await instance.getTypes();
  return result.map((item) => item.name);
};
