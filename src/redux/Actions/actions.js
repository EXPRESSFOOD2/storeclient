import axios from "axios";
import ReactDOM from "react-dom";

import {
  GET_MENU,
  ERROR,
  GET_ALL_INGREDIENTS,
  FILTER,
  CREATE_MENU,
  UPDATE_MENU,
  GET_INGREDIENT_ID,
  LOGIN_STATUS,
} from "./types";
import Alert from "../../Shared/Alert/Alert";

export const validateLogin = async (values, dispatch) => {
  try {
    const login = (
      await axios.post("/users/login", {
        email: values.email,
        password: values.password,
      })
    ).data;

    if (login === "Conected!!! Logged!!") {
      console.log(login);
      // No esta haciendo el dispatch no se porque
      dispatch({ type: LOGIN_STATUS, payload: true });
    } else {
      alert(login);
    }  

    // validUser ? alert("correcto") : alert("INcorrecto");
  } catch (error) {
    alert(error.response.data.error);
  }
};
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
  const Ingredient = await axios.patch("/ingredients/update", data);
  console.log(Ingredient);
};

export const createMenu = (data) => {
  return async function (dispatch) {
    try {
      const newMenu = await axios.post("/menu/create", data);
      dispatch({ type: CREATE_MENU, payload: newMenu });
      ReactDOM.render(
        <Alert
          title="Success"
          message="Se ha creado un nuevo menú"
          type="success"
        />,
        document.getElementById("alert")
      );
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const updateMenu = (data) => {
  return async function (dispatch) {
    try {
      await axios.patch("/menu/update", data);
      dispatch({ type: UPDATE_MENU, payload: data });
      ReactDOM.render(
        <Alert
          title="Success"
          message="Se ha actualizado un menú"
          type="success"
        />,
        document.getElementById("alert")
      );
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const filter = () => (dispatch) => {
  dispatch({ type: FILTER });
};

export const createUser = async (user) => {
  try {
    const res = await axios.post("/users/create", user);
    return console.log(res);
  } catch (err) {
    return console.error(err);
  }
  // después veré que hacer con la respuesta o el error por el momento la consologeo
};

export const deleteIngredient = async (id) => {
  try {
    const res = await axios.delete(`/ingredients/delete?id=${id}`);
    return console.log(res);
  } catch (err) {
    return console.error(err);
  }
  // después veré que hacer con la respuesta o el error por el momento la consologeo
};

export const resetError = () => {
  //Funcion para resetear el estado de redux error en false, despues de un error
  return { type: ERROR, payload: false };
};
