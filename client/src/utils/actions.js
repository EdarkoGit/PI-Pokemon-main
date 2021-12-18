import axios from "axios";

export const actionGenerator = (type, payload) => ({ type, payload });
export const axiosGet = async (url) => {
  const result = await axios(url);
  return result.data;
};
