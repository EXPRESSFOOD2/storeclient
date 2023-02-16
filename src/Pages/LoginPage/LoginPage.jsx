import React from "react";
import Login from "../../components/Login/Login";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      correo: "",
      contraseña: "",
    },
    validationSchema: Yup.object({
      correo: Yup.string()
        .email("Correo incorrecto")
        .required("Correo requerido"),

      contraseña: Yup.string().required("Contraseña requerida"),
    }),
    onSubmit: (values) => {
      console.log("formik submite");
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Login formik={formik} />
    </div>
  );
};

export default LoginPage;
