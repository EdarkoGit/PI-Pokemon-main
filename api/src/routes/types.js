const { Router } = require("express");
const types = Router();
const { Type } = require("../db");
const { urlBasePokeapi } = require("../constants/urls");
const { getAxios } = require("../utils");

types.get("/", async (req, res, next) => {
  try {
    const types = await Type.findAll();
    if (!types.length) return res.json({ msg: "No type found" });
    res.json(types);
  } catch (error) {
    next(error);
  }
});
types.post("/", async (req, res, next) => {
  try {
    const data = await getAxios(`${urlBasePokeapi}/type`);
    for (let i = 0; i < data.results.length; i++) {
      const item = data.results[i];
      const urlSplit = item.url.split("/");
      await Type.findOrCreate({
        where: { name: item.name },
        defaults: {
          id: urlSplit[urlSplit.length - 2],
          name: item.name,
        },
      });
    }
    res.json({ msg: "Types created successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = types;
