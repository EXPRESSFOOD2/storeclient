import { GET_MENU, ERROR, GET_ALL_INGREDIENTS } from "../Actions/actions";
const initialState = {
  menus: [],
  ingredients: [],
  errors: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU:
      return { ...state, menu: action.payload };
    case GET_ALL_INGREDIENTS:
      return { ...state, ingredients: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      break;
  }
};

export default rootReducer;
