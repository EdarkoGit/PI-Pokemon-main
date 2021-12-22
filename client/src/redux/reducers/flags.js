import {
  SET_LIMIT,
  SET_ON_CLICK_FILTER,
  SET_WHAT_RENDER,
} from "../constants/flags";

const inicialState = {
  whatRender: "",
  limit: "9",
  onClickFilter: false,
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
    case SET_ON_CLICK_FILTER:
      return {
        ...state,
        onClickFilter: payload,
      };
    default:
      return state;
  }
};
