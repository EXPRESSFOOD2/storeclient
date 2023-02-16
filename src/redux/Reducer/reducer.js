


import { GET_MENU, ERROR, GET_ALL_INGREDIENTS } from "../Actions/types";
const initialState = {
  menus: [],
  ingredients: [],
  errors: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU:
      return { ...state, menus: action.payload };
    case GET_ALL_INGREDIENTS:
      return { ...state, ingredients: action.payload };
    case ERROR:
      return { ...state, errors: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
