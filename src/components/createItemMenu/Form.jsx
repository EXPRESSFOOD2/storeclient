import React from "react";
import style from "./form.module.css";
import img from "./image/leftImgBG.jpg";
import Title from "../../Shared/Title/Title";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form({ path, menu }) {
  console.log(path, menu)
  const formik = useFormik({
    initialValues: {
      name: menu?.name || "",
      description: menu?.description || "",
      price: menu?.price || "",
      stock: menu?.stock || "",
      recomendado: menu?.recomend_first || "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Nombre requerido"),
      description: Yup.string().required("Descripción requerida"),
      price: Yup.number("Debe se ser un numero")
        .min(1, "El precio debe ser minimo 1")
        .required("Precio requerido"),
      stock: Yup.number("Debe se ser un numero")
        .min(0, "El stock debe ser minimo 0")
        .required("Stock requerido"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={style.menuItem}>
      <Title data={path === "create" ? "Crear menu" : "Actualizar Menu"} />
      <div className={style.container}>
        <form
          action=""
          className={style.formBox}
          onSubmit={formik.handleSubmit}
        >
          <div className={style.formLeft}>
            <img src={img} alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={style.logoForm}
            >
              <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" />
              <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" />
            </svg>
          </div>
          <div className={style.formRight}>
            <div className={style.col}>
              <label>Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                name="name"
                className={formik.errors.name ? style.errorInput : ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.errors.name && (
                <label className={style.errorText}>{formik.errors.name}</label>
              )}
            </div>
            <div className={style.col}>
              <label>Descripción</label>
              <input
                type="text"
                name="description"
                placeholder="Descripción"
                className={formik.errors.description ? style.errorInput : ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              />
              {formik.errors.description && (
                <label className={style.errorText}>
                  {formik.errors.description}
                </label>
              )}
            </div>
            <div className={style.col}>
              <label>Precio</label>
              <input
                type="number"
                placeholder="Precio"
                name="price"
                className={formik.errors.price ? style.errorInput : ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
              {formik.errors.price && (
                <label className={style.errorText}>{formik.errors.price}</label>
              )}
            </div>
            <div className={style.col}>
              <label>Stock</label>
              <input
                className={formik.errors.stock ? style.errorInput : ""}
                type="number"
                placeholder="Stock"
                name="stock"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.stock}
              />
              {formik.errors.stock && (
                <label className={style.errorText}>{formik.errors.stock}</label>
              )}
            </div>
            <div className={style.checkboxCol}>
              <input
                type="checkbox"
                name="recomendado"
                onChange={formik.handleChange}
                value={formik.values.recomendado}
                checked={formik.values.recomendado}
              />
              <label>
                Recomendarías este ítem sobre los otros que has creado?
              </label>
            </div>
            <div className={style.col}>
              <button
                disabled={Object.keys(formik.errors).length}
                type="submit"
              >
                {path === "create" ? "Crear" : "Actualizar"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
