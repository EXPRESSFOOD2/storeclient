import Alert from "../../Shared/Alert/Alert";
import {
  GET_MENU,
  ERROR,
  GET_ALL_INGREDIENTS,
  FILTER,
  CREATE_MENU,
  UPDATE_MENU,
  GET_INGREDIENT_ID,
  LOGIN_STATUS,
} from "../Actions/types";
import ReactDOM from "react-dom";

const initialState = {
  loginStatus: false,
  menus: [],
  ingredients: [],
  ingredientDetail: {},
  errors: false,
  render: [],
  statusFilter: true,
};

const filterFunction = (status, array) => {
  let newRender;
  if (status) {
    newRender = array.filter((element) => element.recomend_first === true);
  } else newRender = [...array];
  return newRender;
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_STATUS:      
      return {
        ...state,
        loginStatus: !state.loginStatus,

      };
    case FILTER:
      return {
        ...state,
        statusFilter: state.statusFilter ? false : true,
        render: filterFunction(state.statusFilter, state.menus),
      };
    case GET_MENU:
      return { ...state, menus: action.payload, render: [...action.payload] };
    case CREATE_MENU:
      return { ...state, menus: [...state.menus, action.payload] };
    case UPDATE_MENU:
      const newMenu = [...state.menus].filter(
        (menu) => menu.id !== action.payload.id
      );
      newMenu.unshift(action.payload);

      return { ...state, menus: newMenu, render: newMenu };
    case GET_ALL_INGREDIENTS:
      return { ...state, ingredients: action.payload };
    case GET_INGREDIENT_ID:
      return { ...state, ingredientDetail: action.payload };

    case ERROR:
      ReactDOM.render(
        <Alert title="Error" message={action.payload} type="danger" />,
        document.getElementById("alert")
      );
      return { ...state, errors: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
