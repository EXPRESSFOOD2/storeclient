import axios from "axios";
import { GET_MENU, ERROR, GET_ALL_INGREDIENTS } from "./types";

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

export const createUser = async (user) => {
  try {
    const newUser = await axios.post("/users/create", user);
    console.log(newUser);
  } catch (error) {
    console.error(error);
  }
};

export const deleteIngredient = async (id) => {
  try {
    const deleteIngredient = await axios.delete(`/ingredients/delete?id=${id}`);
    console.log(deleteIngredient);
  } catch (error) {
    console.error(error);
  }
};

export const resetError = () => {
  //Funcion para resetear el estado de redux error en false, despues de un error
  return { type: ERROR, payload: false };
};
