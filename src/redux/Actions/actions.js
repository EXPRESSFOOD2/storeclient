import axios from "axios";
import { GET_MENU, ERROR, GET_INGREDIENTS} from "./types";

export const getMenu = () => {
  return async function (dispatch) {
    try {
      const menu = (await axios.get("/menu/get")).data;
      dispatch({ type: GET_MENU, payload: menu });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const createUser = (user) => {
  return axios
    .post("/users/create", user)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  // después veré que hacer con la respuesta o el error por el momento la consologeo
};

export const deleteIngredient = (id) => {
  return axios
    .delete(`/ingredients/delete?id=${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  // después veré que hacer con la respuesta o el error por el momento la consologeo
};

export const resetError = () => {
  //Funcion para resetear el estado de redux error en false, despues de un error
  return { type: ERROR, payload: false };
};

export const getIngredients = () => async (dispatch) => {
  // Función que trae todos los ingredientes de la DataBase;
  try {
    const result = await axios.get("/ingredients/get")
    dispatch({type:GET_INGREDIENTS, payload:result.data})
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response?.data.error });
  }
}
