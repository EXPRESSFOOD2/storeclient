/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import {mYdata} from "../../MisPedidos";

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
    GET_ROLES,
    GET_RECETA,
    ORDER_BY_PRICE,
    FILTER_BY_TAG,
    ORDER_BY_RECOMMENDATION,
    SORT_BY_ACTIVITY,
    ORDER_BY_QUANTITY,
    DELIVERY,
    GET_ORDERS,
    DELETE_INGREDIENT,
    DELETE_RECIPE,
    GET_BALANCE,
    DELETE_MENU,
    GET_TAGS
} from "./types";
import Alert from "../../Shared/Alert/Alert";
import { Login } from "@mui/icons-material";

export const changeLoginStatus = (value) => {
    return { type: LOGIN_STATUS, payload: value };
};

export const validateLogin = (values) => async (dispatch) => {
    try {
        const login = (
            await axios.post("/users/login", {
                email: values.email,
                password: values.password,
            })
        ).data;

        if (login.valid) {
            const name = login.user.name;
            const img = login.user.profile_image;
            try {
                window.localStorage.setItem("userLogin", "true");
                window.localStorage.setItem("userData", JSON.stringify({ name, img }));
            } catch (error) {
                console.error(error);
            }
            dispatch(changeLoginStatus(true));
            ReactDOM.render(
                <Alert
                    title="Success"
                    message={`Bienvenido ${values.email}`}
                    type="success"
                />,
                document.getElementById("alert")
            );
            return true;
        } else {
            ReactDOM.render(
                <Alert
                    title="Error"
                    message={"Invalid Account & Password or This Account Doesn't exist"}
                    type="danger"
                />,
                document.getElementById("alert")
            );
        }
        // validUser ? alert("correcto") : alert("INcorrecto");
    } catch (error) {
        ReactDOM.render(
            <Alert title="Error" message={error} type="danger" />,
            document.getElementById(alert)
        );
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

// Ingredients Section
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
    // no testeado
    const Ingredient = await axios.patch("/ingredients/update", data);
    
};

// export const deleteIngredient = () => () => {

// }

export const createMenu = (data) => {

  return async function (dispatch) {
    try {
      
        const newMenu = await axios.post('/menu/create', data)
        dispatch({ type: CREATE_MENU, payload: newMenu })
       
        
      const root = createRoot(document.getElementById('alert'))
      root.render(
        <Alert
          title="Success"
          message="Se ha creado un nuevo men??"
          type="success"
        />
      )
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data.error })
    }
  }
}

export const updateMenu = (data) => {
    return async function (dispatch) {
        try {
            await axios.patch("/menu/update", data);
            dispatch({ type: UPDATE_MENU, payload: data });
            const root = createRoot(document.getElementById("alert"));
            root.render(
                <Alert title="Success" message="Se ha actualizado un men??" type="success" />
            );
        } catch (error) {
            dispatch({ type: ERROR, payload: error.response.data.error });
        }
    };
};

export const filter = () => (dispatch) => {
    dispatch({ type: FILTER });
};

export const createUser = (user) => {
  return async () => {
    try {
      const res = await axios.post('/users/create', user)
      //! PROVICIONAL
      alert('Ok, user Creado')
      console.log(res);
    } catch (err) {
      return console.error(err)
    }
  }
}

export const getImageUrl = (imageStr, imageFn) => {
  return async (dispatch) => {

    try {
      const result = await axios.post('/processImage/post', {
        imageStr
      })
     
      imageFn(result.data)
      return result.data
    } catch (error) {
      console.error(error)
    }

  }
}

export const deleteIngredient = (id)=> async (dispatch) => {
  try {
    await axios.delete(`/ingredients/delete/${id}`)
    dispatch({type:DELETE_INGREDIENT, payload:id })
  } catch (err) {
    return console.error(err)
  }
  // despu??s ver?? que hacer con la respuesta o el error por el momento la consologeo
}

export const createIngredients = (data) => async (dispatch) => {
    try {
        const promises = await data.map(async (element) => {
            const res = await axios.post("/ingredients/create", { ...element });
            return res.data;
        });
        const results = await Promise.allSettled(promises);
        const success = results.filter((element) => element.status === "fulfilled");
        const reject = results.filter((element) => element.status === "rejected");
        if (success.length === results.length) {
            dispatch({
                type: CREATE_INGREDIENTS,
                payload: results.map((ele) => ele.value),
            });
            const root = createRoot(document.getElementById("alert"));
            root.render(
                <Alert title="Success" message="Se crearon los ingredientes" type="success" />
            );
        } else {
            if (success.length) {
                dispatch({
                    type: CREATE_INGREDIENTS,
                    payload: success.map((ele) => ele.value),
                });
            }
            if (reject.length === results.length) {
                const root = createRoot(document.getElementById("alert"));
                root.render(
                    <Alert title="Ingredientes ya existentes" message="TODOS" type="danger" />
                );
            } else {
                const repetidos = reject.map((ele) => {
                    const { response } = ele.reason;
                    return response.data?.error.slice(35, -1);
                });
                const root = createRoot(document.getElementById("alert"));
                root.render(
                    <Alert
                        title="Ingredientes ya existentes"
                        message={repetidos.join(", ")}
                        type="alert"
                    />
                );
            }
        }
        // return dispatch({type:CREATE_INGREDIENTS, payload:results})
    } catch (error) {
        console.error(error.response?.data.error);
    }
};

export const getRoles = () => {
    return async function (dispatch) {
        try {
            const roles = (await axios.get("/roles/get")).data;
            dispatch({ type: GET_ROLES, payload: roles });
        } catch (error) {
            dispatch({ type: ERROR, payload: error.response.data.error });
        }
    };
};

export const resetError = () => {
    // Funcion para resetear el estado de redux error en false, despues de un error
    return { type: ERROR, payload: false };
};

export const getReceta = () => {
    return async function (dispatch) {
        try {
            const result = (await axios.get("/recipes/get")).data;
            const receta = result.filter((element) => !element.name?.includes(" OLD "));
            dispatch({ type: GET_RECETA, payload: receta });
        } catch (error) {
            dispatch({ type: ERROR, payload: error.response.data.error });
        }
    };
};

export const deleteRecipe = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:3002/recipes/delete?id=${id}`);
        dispatch({ type: DELETE_RECIPE, payload: id });
    } catch (error) {
        console.log(error);
    }
};

export const orderByPrecio = (payload) => ({
    type: ORDER_BY_PRICE,
    payload,
});

export const filterByTag = (payload) => ({
    type: FILTER_BY_TAG,
    payload,
});

export const OrderByRecommendation = (payload) => ({
    type: ORDER_BY_RECOMMENDATION,
    payload,
});

export const sortByActivity = (payload) => ({
    type: SORT_BY_ACTIVITY,
    payload,
});

export const orderByQuantity = (payload) => ({
    type: ORDER_BY_QUANTITY,
    payload,
});

export const getOrders = () => {
    return async (dispatch) => {
        try {
            const orders = await axios.post("/orders/get");
            // console.log(orders.data);
            dispatch({ type: GET_ORDERS, payload: orders.data });
        } catch (error) {
            dispatch({ type: ERROR, payload: error.response.data.error });
        }
    };
};
export const getTags = () => {
    return async (dispatch) => {
        try {
            const tags = await axios.get("/tags/get");
       
            dispatch({ type: GET_TAGS, payload: tags.data });
        } catch (error) {
            dispatch({ type: ERROR, payload: error.response.data.error });
        }
    };
};

// no testeado
export const isFinished = async (data) => {
    try {
        const order = await axios.patch("/orders/update", data);
        console.log(order);
    } catch (error) {
        console.error(error);
    }
};

export const delivery = async (data) => {
    try {
        const order = await axios.patch("/orders/update", data);
      
    } catch (error) {
        console.error(error);
    }
};

export const getOrderBalance = () => async (dispatch) => {
    try {
        const result = (await axios.get("http://localhost:3002/orders/getBalance")).data;
        console.log(result);
        const Mydata = sortBalanceByDate(result.ticketsAll);
        // console.log(mYdata.ticketsAll);
        return dispatch({ type: GET_BALANCE, payload: { ...Mydata } });
    } catch (error) {
        console.log(error);
    }
};

export const deleteMenu = (id) => async (dispatch) => {
    try {
        dispatch({type:DELETE_MENU, payload:id})
        await axios.delete(`/menu/delete/?id=${id}`);
    } catch (error) {
        console.log(error.message);
    }
}

// ************************************************************************************************
// FUNCIONES AUXILIARES:
const sortBalanceByDate = (array) => {
    const obj = {};
    for (const element of array) {
        const date = element.orderDate.slice(0, 10);
        obj[date]
            ? (obj[date] = {
                  data: [...obj[date].data, element],
                  amount: obj[date].amount + parseInt(element.totalAmountPerorder),
              })
            : (obj[date] = { data: [element], amount: parseInt(element.totalAmountPerorder) });
    }
    return obj;
};