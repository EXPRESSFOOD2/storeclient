/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

// import img from "./image/leftImgBG.jpg";
// import Title from '../../Shared/Title/Title'

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  createMenu,
  updateMenu,
  getImageUrl,
} from "../../redux/Actions/actions";

import ImageIcon from "@mui/icons-material/Image";
import { grey } from "@mui/material/colors";
import style from "./form.module.css";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form({ path, menu, ingredientes }) {
  // eslint-disable-next-line no-unused-vars
  // const [showImg, setShowImg] = useState(false);
  const dispatch = useDispatch();

  const [ingredientesArray, setIngredientesArray] = useState(
    menu?.Ingredients || []
  );
  const [cantidad, setCantidad] = useState(
    menu?.Ingredients.map((item) => item.IngredientsMenuItems.quantity) || []
  );

  const [imageInputState, setImageInputState] = useState("");
  const [urlImage, setUrlImage] = useState("");

  useEffect(() => {
    dispatch(getImageUrl(urlImage, imageFn));
  }, [urlImage, dispatch]);

  // change ingredient quantity by type
  const onIngredeintFormChangeHandler = (e) => {
    const ingre = ingredientes.find((item) => e.target.value === item.name);
    if (ingre) {
      if (!ingredientesArray.includes(ingre)) {
        setIngredientesArray([...new Set([...ingredientesArray, ingre])]);
        setCantidad([...cantidad, 0]);
        e.target.value = "";
      }
    }
  };

  // Manejador imagen
  // const imageHandleChange = (event) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(event.target.files[0]);
  //     fileReader.onload = () => {
  //         setUrlImage(fileReader.result);
  //     };
  // };

  const handleImageInputChange = async (e) => {
    const inputImg = e.target.files[0];
    await prepareImageToShowAndSend(inputImg);
  };

  const prepareImageToShowAndSend = (inputImg) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(inputImg);
      reader.onloadend = () => {
        setUrlImage(reader.result);

        resolve();
      };
      reader.onerror = () => {
        reject(reader.error);
      };
    });
  };

  // const imgDefault =
  // "https://c8.alamy.com/compes/her4w9/comida-tradicional-mexicana-de-fondo-con-el-burrito-croquis-dibujados-a-mano-ilustracion-vectorial-mexico-cocina-vintage-banner-her4w9.jpg";

  const localValues = JSON.parse(localStorage.getItem("localMenu"));
  const localImg = localStorage.getItem("localImg");

  //   useEffect(() => {
  //     if (path !== "update") {
  //       const img = new Image();
  //       img.src = localImg;
  //       setUrlImage(img);
  //     }
  //   }, []);

  const formik = useFormik({
    initialValues: {
      name: menu?.name || localValues?.name || "",
      description: menu?.description || localValues?.description,
      price: menu?.price || localValues?.price || "",
      stock: menu?.stock || localValues?.stock || 0,
      recomendado: menu?.recomend_first || localValues?.recomend_first || false,
      url_image: menu?.url_image || localImg || "",
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
        console.log("aqui");
      const ingredientesMap = ingredientesArray.map((item, i) => {
        return { id: item.id, quantity: cantidad[i] };
      });
      const menuMapData = {
        id: menu?.id || "",
        ...values,
        ingredArray: ingredientesMap,
        is_active: true,
        // url_image: urlImage,
        Ingredients: cantidad.map((a) => {
          return {
            IngredientsMenuItems: {
              quantity: a,
            },
          };
        }),
      };
      if (path === "update") {
        dispatch(updateMenu({ ...menuMapData, id: menu.id }));
      } else {
        dispatch(createMenu(menuMapData));
      }
      localStorage.removeItem("localImg");
      localStorage.removeItem("localMenu");
    },
  });

  const imageFn = (imageUrl) => {
    formik.values.url_image = imageUrl;
    localStorage.setItem("localImg", imageUrl);
  };

  useEffect(() => {
    if (path !== "update") {
      const values = JSON.stringify(formik.values);
      localStorage.setItem("localMenu", values);
    }
  }, [formik]);

  useEffect(() => {
    setUrlImage(localImg);
  }, []);

  return (
    <div className={style.menuItem}>
      {/* <Title data={path === 'create' ? 'Crear menú' : 'Actualizar Menú'} /> */}
      <div className={style.container}>
        <form
          action=""
          className={style.formBox}
          onSubmit={formik.handleSubmit}
        >
          {/* <div className={style.formLeft}>
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
          </div> */}
          {/* <div className={showImg ? style.show : style.image}>
             <img
              src={
                path === 'update'
                  ? menu.url_image
                  : urlImage 
              }
              alt=""
             />
          </div> */}
          <div className={style.formRight}>
            <div
              className={style.contentfile}
              // onMouseEnter={() => {
              // setShowImg(true);
              // }}

              // onMouseLeave={() => {
              // setShowImg(false);
              // }}
            >
              {urlImage ? (
                <img
                  src={urlImage}
                  alt="Profile Pic"
                  className={style.imageUser}
                />
              ) : (
                <ImageIcon
                  sx={{ color: grey[500], fontSize: 100, mt: 2 }}
                ></ImageIcon>
              )}
              {/* <label>agregar imagen</label> */}
              <input
                hidden={path === "update"}
                type="file"
                name="Imagen"
                className={style.inputfile}
                value={imageInputState}
                // onChange={imageHandleChange}
                onChange={handleImageInputChange}
              />
            </div>
            <div className={style.col1}>
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
            <div className={style.rowData}>
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
                  <label className={style.errorText}>
                    {formik.errors.price}
                  </label>
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
                  <label className={style.errorText}>
                    {formik.errors.stock}
                  </label>
                )}
              </div>
            </div>
            <div className={style.col}>
              <label className={style.label}>Ingredientes</label>
              <br />
              <input
                hidden={path === "update"}
                type="text"
                name="ingredientes"
                list="ingredientes"
                placeholder="Ingredientes"
                onChange={onIngredeintFormChangeHandler}
              />
            </div>
            <div className={style.col}>
              <div className={style.table}>
                <div className={style.rowTableTitle}>
                  <span>Nombre</span>
                  <span>Cantidad</span>
                </div>
                {ingredientesArray.map((item, i) => {
                  ingredientesArray[i].quantity = 0;
                  return (
                    <div className={style.rowTableData} key={i}>
                      <span>
                        {item.name + " "}
                        <span style={{ fontWeight: "bold" }}>
                          {item.type_measure}
                        </span>
                      </span>
                      {path === "update" ? (
                        <span>{cantidad[i]} </span>
                      ) : (
                        <input
                          type="text"
                          placeholder="Cantidad"
                          value={cantidad[i]}
                          onChange={(e) => {
                            cantidad[i] = e.target.value;
                            setCantidad([...cantidad]);
                          }}
                        />
                      )}
                    </div>
                  );
                })}
                <datalist id="ingredientes">
                  {ingredientes.map((ingrediente) => {
                    return <option value={ingrediente.name}></option>;
                  })}
                </datalist>
              </div>
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
                disabled={
                  Object.keys(formik.errors).length || cantidad.length === 0
                }
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
