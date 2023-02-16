import { GET_MENU,ERROR } from "../Actions/actions";
const initialState = {
  menu: [],
  error: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU:
      return { ...state, menu: action.payload };
    case ERROR:
        return {...state, error: action.payload}
    default:
      break;
  }
};

export default rootReducer;
