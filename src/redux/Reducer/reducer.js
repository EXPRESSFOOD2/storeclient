import { GET_MENU } from "../Actions/actions";
const initialstate = {
  menu: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU:
      return { ...state, menu: action.payload };

    default:
      break;
  }
};

export default rootReducer;
