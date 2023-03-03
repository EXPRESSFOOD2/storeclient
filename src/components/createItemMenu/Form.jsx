/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import style from './form.module.css'
import img from './image/leftImgBG.jpg'
// import Title from '../../Shared/Title/Title'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { createMenu, updateMenu, getMenu } from '../../redux/Actions/actions'

export default function Form ({ path, menu, ingredientes }) {  
  const [ingredientesArray, setIngredientesArray] = useState(
    menu?.Ingredients || []
  )

  const [showImg, setShowImg] = useState(false)
  const [cantidad, setCantidad] = useState(
    menu?.Ingredients.map((item) => item.IngredientsMenuItems.quantity) || []
  )
  const [urlImage, setUrlImage] = useState('')

  const dispatch = useDispatch()

  // change ingredient quantity by type
  const onIngredeintFormChangeHandler = (e) => {
    const ingre = ingredientes.find((item) => e.target.value === item.name)
    if (ingre) {
      if (!ingredientesArray.includes(ingre)) {
        setIngredientesArray([...new Set([...ingredientesArray, ingre])])
        setCantidad([...cantidad, 0])
        e.target.value = ''
      }
    }
  }

  // Manejador imagen
  const imageHandleChange = (event) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(event.target.files[0])
    fileReader.onload = () => {
      setUrlImage(fileReader.result)
    }
  }

  const imgDefault =
    'https://c8.alamy.com/compes/her4w9/comida-tradicional-mexicana-de-fondo-con-el-burrito-croquis-dibujados-a-mano-ilustracion-vectorial-mexico-cocina-vintage-banner-her4w9.jpg'

  const formik = useFormik({
    initialValues: {
      name: menu?.name || '',
      description: menu?.description || '',
      price: menu?.price || '',
      stock: menu?.stock || 0,
      recomendado: menu?.recomend_first || ''
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Nombre requerido'),
      description: Yup.string().required('Descripción requerida'),
      price: Yup.number('Debe se ser un numero')
        .min(1, 'El precio debe ser minimo 1')
        .required('Precio requerido'),
      stock: Yup.number('Debe se ser un numero')
        .min(0, 'El stock debe ser minimo 0')
        .required('Stock requerido')
    }),

    onSubmit: (values) => {
      const ingredientesMap = ingredientesArray.map((item, i) => {
        return { id: item.id, quantity: cantidad[i] }
      })
      const menuMapData = {
        id: menu?.id || '',
        ...values,
        ingredArray: ingredientesMap,
        is_active: true,
        // por ahora el backend no recibe la img del input, por esto le mandamos uno por default
        url_image: imgDefault,
        Ingredients: cantidad.map((a) => {
          return {
            IngredientsMenuItems: {
              quantity: a
            }
          }
        })
      }

      if (path === 'update') {
        dispatch(updateMenu({ ...menuMapData, id: menu.id }))
      } else {
        dispatch(createMenu(menuMapData))
        dispatch(getMenu())
        // console.log(menuMapData)
      }
    }
  })

  return (
    <div className={style.menuItem}>
      {/* <Title data={path === 'create' ? 'Crear menú' : 'Actualizar Menú'} /> */}
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
          <div className={showImg ? style.show : style.image}>
            <img
              src={
                path === 'update'
                  ? menu.url_image
                  : urlImage || imgDefault
              }
              alt=""
            />
          </div>
          <div className={style.formRight}>
            <div className={style.col}>
              <label>Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                name="name"
                className={formik.errors.name ? style.errorInput : ''}
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
                className={formik.errors.description ? style.errorInput : ''}
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
                className={formik.errors.price ? style.errorInput : ''}
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
                className={formik.errors.stock ? style.errorInput : ''}
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
            <div
              className={style.col}
              onMouseEnter={() => {
                setShowImg(true)
              }}
              onMouseLeave={() => {
                setShowImg(false)
              }}
            >
              <label>Imagen</label>
              <input
                hidden={path === 'update'}
                type="file"
                name="Imagen"
                accept="image/*"
                onChange={imageHandleChange}
              />
            </div>
            <div className={style.col}>
              <label>Ingredientes</label>
              <input
                hidden={path === 'update'}
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
                  console.log(ingredientesArray)
                  ingredientesArray[i].quantity = 0
                  return (
                    <div className={style.rowTableData} key={i}>
                      <span>
                        {item.name + ' '}
                        <span style={{ fontWeight: 'bold' }}>
                          {item.type_measure}
                        </span>
                      </span>
                      {path === 'update'
                        ? (
                        <span>{cantidad[i]} </span>
                          )
                        : (
                        <input
                          type="text"
                          placeholder="Cantidad"
                          value={cantidad[i]}
                          onChange={(e) => {
                            cantidad[i] = e.target.value
                            setCantidad([...cantidad])
                          }}
                        />
                          )}
                    </div>
                  )
                })}
                <datalist id="ingredientes">
                  {ingredientes.map((ingrediente) => {
                    return <option value={ingrediente.name}></option>
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
                {path === 'create' ? 'Crear' : 'Actualizar'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
