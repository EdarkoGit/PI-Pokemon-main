import { SET_FILTER_EXISTING, SET_FILTER_TYPES } from "../constants/forms";

const inicialState = {
  filter: {
    existing: "",
    types: [],
  },
};

export const forms = (state = inicialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER_EXISTING:
      return {
        ...state,
        filter: {
          ...state.filter,
          existing: payload,
        },
      };
    case SET_FILTER_TYPES:
      return {
        ...state,
        filter: {
          ...state.filter,
          types: payload,
        },
      };
    default:
      return state;
  }
};
