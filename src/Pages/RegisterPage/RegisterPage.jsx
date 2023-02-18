import React from "react";
import Register from "../../components/Register/Register";
import NavBar from "../../Shared/NavBar/NavBar";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/Actions/actions";

import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterPage = (props) => {
  const dispatch = useDispatch();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const passwordRegExp =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  const formik = useFormik({
    initialValues: {
      name: "",
      last_name: "",
      email: "",
      account_name: "",
      phone: "",
      password: "",
      password_question: "",
      password_answer: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es requerido"),
      last_name: Yup.string().required("El apellido es requerido"),
      email: Yup.string()
        .email("Correo electronico invalido")
        .required("El email es requerido")
        .max(100, "máximo 100 caracteres"),
      account_name: Yup.string()
        .min(5, "minimo 5 caracteres")
        .max(30, "máximo 30 caracteres")
        .required("El Nombre de Usuario es requerido"),
      phone: Yup.string()
        .required("Telefono requerido")
        .matches(phoneRegExp, "telefono invalido")
        .max(15, "máximo 15 caracteres"),
      password: Yup.string()
        .required("Se requiere una contraseña")
        .matches(
          passwordRegExp,
          "la contraseña debe ser mayor a 8 digitos y contener mayúsculas y números"
        ),
      password_question: Yup.string()
        .required("selecciona una pregunta")
        .min(3, "se requiere seleccionar una pregunta"),
      password_answer: Yup.string().required("Se requiere una respuesta"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(createUser(values));
    },
  });

  return (
    <div>
      <NavBar />
      <Register formik={formik} />
    </div>
  );
};

export default RegisterPage;
