export const validate = (dataCreate) => {
  let errors = {};
  if (dataCreate.types.length === 0) {
    errors.types = "*";
  }
  if (!/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(dataCreate.name)) {
    errors.name = "*";
  }
  if (!isUrl(dataCreate.img)) {
    errors.img = "*";
  }
  validateStat(errors, dataCreate, "hp");
  validateStat(errors, dataCreate, "attack");
  validateStat(errors, dataCreate, "defense");
  validateStat(errors, dataCreate, "speed");
  validateStat(errors, dataCreate, "height");
  validateStat(errors, dataCreate, "weight");

  return errors;
};
const validateStat = (errors, dataCreate, stat) => {
  if (!/^[0-9]{1,3}$/.test(dataCreate[stat])) {
    errors[stat] = "*";
  } else {
    const num = parseInt(dataCreate[stat]);
    if (num <= 0 || num > 150) {
      errors[stat] = "*";
    }
  }
};
const isUrl = (str) => {
  //según veo no sirve para nada :(
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
};
