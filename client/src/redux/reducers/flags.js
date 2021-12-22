import { SET_LIMIT, SET_WHAT_RENDER } from "../constants/flags";

const inicialState = {
  whatRender: "",
  limit: "9",
};

export const flags = (state = inicialState, { type, payload }) => {
  switch (type) {
    case SET_WHAT_RENDER:
      return {
        ...state,
        whatRender: payload,
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: payload,
      };
    default:
      return state;
  }
};
