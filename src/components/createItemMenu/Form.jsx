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
  getImageUrl,getMenu
} from "../../redux/Actions/actions";

import ImageIcon from "@mui/icons-material/Image";
import { grey } from "@mui/material/colors";
import style from "./form.module.css";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form({ path, menu, ingredientes, tags }) {
  // eslint-disable-next-line no-unused-vars
  // const [showImg, setShowImg] = useState(false);
  const dispatch = useDispatch();

  const [ingredientesArray, setIngredientesArray] = useState(
    menu?.Ingredients || []
  );
  const [tagsArray, setTagsArray] = useState([]);

  const [cantidad, setCantidad] = useState(
    menu?.Ingredients.map((item) => item.IngredientsMenuItems.quantity) || []
  );

  const [imageInputState, setImageInputState] = useState("");
  const [urlImage, setUrlImage] = useState("");
  // console.log(urlImage);

  useEffect(() => {
    if (urlImage.length) {
      dispatch(getImageUrl(urlImage, imageFn));
    }
  }, [urlImage]);

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
  const tagsHandler = (e) => {
    const tag = tags.find((tag) => e.target.value === tag.name);
    if (tag) {
      if (!tagsArray.includes(tag)) {
        setTagsArray([...new Set([...tagsArray, tag])]);

        e.target.value = "";
      } else {
        e.target.value = "";
      }
    }
  };

  const tagsRemove = (e) => {
    setTagsArray(
      tagsArray.filter((tag) => {
        return tag.name !== e.target.value;
      })
    );
  };

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

  const formik = useFormik({
    initialValues: {
      name: menu?.name || "",
      description: menu?.description || "",
      price: menu?.price || "",
      stock: menu?.stock || 0,
      recomendado: menu?.recomend_first || "",
      url_image: menu?.url_image || "",
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
      const ingredientesMap = ingredientesArray.map((item, i) => {
        return { id: item.id, quantity: cantidad[i] };
      });
      const tagsMap = tagsArray.map((item) => {
        return item.id;
      });
      const menuMapData = {
        id: menu?.id || "",
        ...values,
        ingredArray: ingredientesMap,
        is_active: true,
        tagsIds: tagsMap,
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
        dispatch(getMenu())
    } else {
        console.log(formik.values);
        dispatch(createMenu(menuMapData));
        dispatch(getMenu())
      }
    },
  });

  const imageFn = (imageUrl) => {
    formik.values.url_image = imageUrl;
  };

  return (
    <div className={style.menuItem}>
      <div className={style.container}>
        <form
          action=""
          className={style.formBox}
          onSubmit={formik.handleSubmit}
        >
          <div className={style.formRight}>
            <div className={style.contentfile}>
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

              <input
                hidden={path === "update"}
                type="file"
                name="Imagen"
                className={style.inputfile}
                value={imageInputState}
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
                    return (
                      <option
                        key={ingrediente.id}
                        value={ingrediente.name}
                      ></option>
                    );
                  })}
                </datalist>
              </div>
            </div>
            <div className={style.col}>
              <input
              hidden={path==="update"}
                type="text"
                name="Categorias"
                list="Categorias"
                placeholder="Categorias"
                onChange={tagsHandler}
              />
            </div>
            <datalist id="Categorias">
              {tags?.map((tag) => {
                return <option key={tag.id} value={tag.name}></option>;
              })}
            </datalist>

            <div className={style.col}>
              <div className={style.table}>
                <div className={style.rowTableTitle}>
                  <span>Categoria</span>
                </div>
                {tagsArray?.map((item) => {
                  return (
                    <div
                      className={style.rowTableData}
                      key={item.id}
                      value={item.name}
                    >
                      <div className={style.divSpanButtons}>
                        <span className={style.spanCategories}>
                          {item.name}
                        </span>
                        <button
                        hidden={path === "update"}
                          type="button"
                          value={item.name}
                          onClick={tagsRemove}
                          className={style.eraseButton}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  );
                })}
                <datalist id="Categoria">
                  {tags.map((tag) => {
                    return <option key={tag.id} value={tag.name}></option>;
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
