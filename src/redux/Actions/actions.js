import axios from "axios";
import { GET_MENU, ERROR } from "./types";

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

export const resetError = () => {
  //Funcion para resetear el estado de redux error en false, despues de un error
  return { type: ERROR, payload: false };
};
