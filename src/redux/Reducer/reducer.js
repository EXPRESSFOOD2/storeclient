import { GET_MENU, ERROR, GET_ALL_INGREDIENTS, FILTER,GET_INGREDIENT_ID } from "../Actions/types";
const initialState = {
  menus: [],
  ingredients: [],
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
    case FILTER:
      return {
        ...state,
        statusFilter: state.statusFilter ? false : true,
        render: filterFunction(state.statusFilter, state.menus),
      };
    case GET_MENU:
      return { ...state, menus: action.payload, render: [...action.payload] };
    case GET_ALL_INGREDIENTS:
      return { ...state, ingredients: action.payload };
    case GET_INGREDIENT_ID:
        //NIY No se si guardarlo en el estado ingredients o crear otro estado....
    case ERROR:
      return { ...state, errors: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
