import React from "react";
import Register from "../../components/Register/Register";
import NavBar from "../../Shared/NavBar/NavBar";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterPage = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      username: "",
      phone: "",
      password: "",
      password_question: "",
      password_answer: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es requerido"),
      lastname: Yup.string().required("El apellido es requerido"),
      email: Yup.string()
        .email("Email invalido")
        .required("El email es requerido"),
      username: Yup.string().required("El Nombre de Usuario es requerido"),
      phone: Yup.number("Deben se ser números").required("Telefono requerido"),
      password: Yup.string().required("debe contener mas de 10 digitos"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
