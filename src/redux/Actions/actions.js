import axios from "axios";

import {
  GET_MENU,
  ERROR,
  GET_ALL_INGREDIENTS,
  FILTER,
  CREATE_MENU,
  UPDATE_MENU,
  GET_INGREDIENT_ID,
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
  const Ingredient = await axios.patch("/ingredients/update", data);
  console.log(Ingredient);
};

export const createMenu = (data) => {
  return async function (dispatch) {
    try {
      const newMenu = await axios.post("/menu/create", data);
      dispatch({ type: CREATE_MENU, payload: newMenu });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const updateMenu = (data) => {
  return async function (dispatch) {
    try {
      await axios.patch("/menu/update", data)
      dispatch({ type: UPDATE_MENU, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const filter = () => (dispatch) => {
  dispatch({ type: FILTER });
};

export const createUser = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios
        .post("http://localhost:3001/users/create", user);
        //! PROVICIONAL
      alert("Ok, user Creado");
    } catch (err) {
      return console.error(err);
    }
  }
  // después veré que hacer con la respuesta o el error por el momento la consologeo
};

export const getImageUrl = (imageStr, imageFn) => {
  return async (dispatch) => {
      try {
        let result = await axios.post("http://localhost:3001/processImage/post", {imageStr: imageStr})
        imageFn(result.data)
        //! ?! manejar Success && Error
        return result;
      } catch(error) {
        console.error(error)
      }
}

}

export const deleteIngredient = async (id) => {
  try {
    const res = await axios
      .delete(`/ingredients/delete?id=${id}`);
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
