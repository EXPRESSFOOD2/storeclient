import React from "react";
import Login from "../../components/Login/Login";
import { useFormik } from "formik";
import * as Yup from "yup";
import { validateLogin } from "../../redux/Actions/actions";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";



const LoginPage = () => {
  const loginStatus = useSelector((state) => state.loginStatus);
  const history = useHistory();

  const dispatch = useDispatch()

  useEffect(() => {
    if (loginStatus) {
      history.push("/menu");
    }
  }, [loginStatus]);


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Correo incorrecto")
        .required("Correo requerido"),

      password: Yup.string().required("Contraseña requerida"),
    }),
    onSubmit: async (values) => {

      dispatch(validateLogin(values))
      
      // await validateLogin(values);

      //Falta re linkear a /menu
    },
  });

  return (
    <div>
      <Login formik={formik} />
    </div>
  );
};

export default LoginPage;
