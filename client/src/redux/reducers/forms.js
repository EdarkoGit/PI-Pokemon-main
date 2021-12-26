import {
  SET_FILTER_EXISTING,
  SET_FILTER_TYPES,
  RESET_FORMS_FILTER,
  SET_FORMS_ORDER,
  SET_FORMS_CREATE_TYPES,
} from "../constants/forms";

const inicialState = {
  filter: {
    existing: "",
    types: [],
  },
  order: "default",
  create: {
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
    case RESET_FORMS_FILTER:
      return {
        ...state,
        filter: {
          existing: "",
          types: [],
        },
      };
    case SET_FORMS_ORDER:
      return {
        ...state,
        order: payload,
      };
    case SET_FORMS_CREATE_TYPES:
      return {
        ...state,
        create: {
          types: payload,
        },
      };
    default:
      return state;
  }
};
