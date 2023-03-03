/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-case-declarations */
import Alert from '../../Shared/Alert/Alert'
import {
  GET_MENU,
  ERROR,
  GET_ALL_INGREDIENTS,
  FILTER,
  CREATE_MENU,
  UPDATE_MENU,
  GET_INGREDIENT_ID,
  LOGIN_STATUS,
  CREATE_INGREDIENTS,
  GET_ROLES, GET_RECETA,
  ORDER_BY_PRICE,
  FILTER_BY_TAG,
  ORDER_BY_RECOMMENDATION,
  SORT_BY_ACTIVITY,
  ORDER_BY_QUANTITY
} from '../Actions/types'
import { createRoot } from 'react-dom/client'

const initialState = {
  loginStatus: false,
  menus: [],
  ingredients: [],
  ingredientDetail: {},
  errors: false,
  render: [],
  statusFilter: true,
  roles: [],
  render_receta:[],

}
// console.log(initialState.render);
const filterFunction = (status, array) => {
  let newRender
  if (status) {
    newRender = array.filter((element) => element.recomend_first === true)
  } else newRender = [...array]
  return newRender
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STATUS:
      return {
        ...state,
        loginStatus: action.payload

      }
    case FILTER:
      return {
        ...state,
        statusFilter: !state.statusFilter,
        render: filterFunction(state.statusFilter, state.menus)
      }
    case GET_MENU:
      return { ...state, menus: action.payload, render: [...action.payload] }
    case CREATE_MENU:
      return { ...state, menus: [...state.menus, action.payload] }
    case UPDATE_MENU:
      const newMenu = [...state.menus].filter(
        (menu) => menu.id !== action.payload.id
      )
      newMenu.unshift(action.payload)

      return { ...state, menus: newMenu, render: newMenu }
    case GET_ALL_INGREDIENTS:
      return { ...state, ingredients: action.payload }
    case GET_INGREDIENT_ID:
      return { ...state, ingredientDetail: action.payload }
    case CREATE_INGREDIENTS:
      return { ...state, ingredients: [...state.ingredients, ...action.payload] }
    case ERROR:
      const root = createRoot(document.getElementById('alert'))
      root.render(<Alert title="Error" message={action.payload} type="danger" />)
      return { ...state, errors: action.payload }
      
      case GET_ROLES:
        return { ...state, roles: action.payload }
        
              case GET_RECETA:
              return { ...state, recetas: action.payload, render_receta: [...action.payload] };

      case ORDER_BY_PRICE:
      let sortPrice =
        action.payload === "mayor"
          ? state.render.sort((a, b) => {
              return b.price - a.price;
            })
          : state.render.sort((a, b) => {
              return a.price - b.price;
            });
      // console.log(sortPrice)
      return {
        ...state,
        render: sortPrice,
      };

      case ORDER_BY_QUANTITY:
        let sortQuantity =
          action.payload === "mayor"
            ? state.render.sort((a, b) => {
                return b.stock - a.stock;
              })
            : state.render.sort((a, b) => {
                return a.stock - b.stock;
              });
        // console.log(sortPrice)
        return {
          ...state,
          render: sortQuantity,
        };

      case FILTER_BY_TAG:
        return { ...state, render: action.payload }
      case ORDER_BY_RECOMMENDATION:
        return { ...state, render: action.payload }
      case SORT_BY_ACTIVITY:
        return { ...state, render: action.payload }
    default:
      return { ...state }
  }
}

export default rootReducer
