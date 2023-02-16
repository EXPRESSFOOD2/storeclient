import Form from "../../components/createItemMenu/Form";
import NavBar from "../../Shared/NavBar/NavBar";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function CreateItemMenu() {
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
      <Form formik={formik} />
    </div>
  );
}