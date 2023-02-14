import React from "react";
import style from "./form.module.css";
import img from "./image/leftImgBG.jpg";

export default function Form() {
  return (
    <div className={style.container}>
      <form action="" className={style.formBox}>
        <div className={style.formLeft}>
          <img src={img} alt="" />
        </div>
        <div className={style.formRight}>
          <div className={style.col}>
            <label>Nombre</label>
            <input type="text" placeholder="Nombre" />
          </div>
          <div className={style.col}>
            <label>Descripción</label>
            <input type="text" placeholder="Descripción" />
          </div>
          <div className={style.col}>
            <label>Precio</label>
            <input type="text" placeholder="Precio" />
          </div>
          <div className={style.col}>
            <label>Stock</label>
            <input type="text" placeholder="Stock" />
          </div>
          <div className={style.checkboxCol}>
            <input type="checkbox" />
            <label>
              Recomendarías este ítem sobre los otros que has creado?
            </label>
          </div>
          <div className={style.col}>
            <button>Crear</button>
          </div>
        </div>
      </form>
    </div>
  );
}
