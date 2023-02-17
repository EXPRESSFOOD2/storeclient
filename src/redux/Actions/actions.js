import axios from "axios";
import {
  GET_MENU,
  ERROR,
  GET_ALL_INGREDIENTS,
  GET_INGREDIENT_ID,
  FILTER,
} from "./types";

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

//Ingredients Section
// get's section
// Organizamos por section o por request?
export const getAllIngredients = () => {
  return async function (dispatch) {
    try {
      const ingredients = (await axios.get("/ingredients/get")).data;
      dispatch({ type: GET_ALL_INGREDIENTS, payload: ingredients });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const getIngredientById = (id) => {
  return async function (dispatch) {
    try {
      const ingredient = (await axios.get(`/ingredients/get/${id}`)).data;
      dispatch({ type: GET_INGREDIENT_ID, payload: ingredient });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const updateIngredient = async (data) => {
  //no testeado
  return await axios
    .patch("/ingredients/update", data)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

export const filter = () => (dispatch) => {
  dispatch({ type: FILTER });
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
