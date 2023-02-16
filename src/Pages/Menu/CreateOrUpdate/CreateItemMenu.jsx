import { useLocation } from "react-router-dom";
import Form from "../../../components/createItemMenu/Form";
import NavBar from "../../../Shared/NavBar/NavBar";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function CreateItemMenu() {
  const route = useLocation().pathname.split("/").at(2);

  // Form Validation
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      stock: "",
      recomendado: false,
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Nombre requerido"),
      description: Yup.string().required("Descripción requerida"),
      price: Yup.number("Debe se ser un numero")
        .min(1, "El precio debe ser minimo 1")
        .required("Precio requerido"),
      stock: Yup.number("Debe se ser un numero")
        .min(1, "El stock debe ser minimo 1")
        .required("Stock requerido"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <NavBar />
      <Form path={route} formik={formik} />
    </div>
  );
}
