import axios from "axios";
import { GET_MENU } from "./types";

export const getMenu = () => {
  return async function (dispatch) {
    try {
      const menu = (await axios.get("/menu/get")).data;
      dispatch({ type: GET_MENU, payload: menu });
    } catch (error) {
      //NIY MANEJO DE ERRORES
    }
  };
};

