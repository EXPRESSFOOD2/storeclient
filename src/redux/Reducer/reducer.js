import { GET_MENU, ERROR } from "../Actions/types";

const initialState = {
  menus: [],
  errors: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU:
      return { ...state, menus: action.payload };
    case ERROR:
      return { ...state, errors: action.payload }
    default:
      break;
  }
};

export default rootReducer;
