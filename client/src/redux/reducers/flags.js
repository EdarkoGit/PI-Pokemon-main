import { SET_WHAT_RENDER } from "../constants/flags";

const inicialState = {
  whatRender: "",
};

export const flags = (state = inicialState, { type, payload }) => {
  switch (type) {
    case SET_WHAT_RENDER:
      return {
        ...state,
        whatRender: payload,
      };
    default:
      return state;
  }
};
