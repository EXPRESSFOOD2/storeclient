import React from "react";
import Title from "../../Shared/Title/Title";
import style from "./Login.module.css";

export default function Login({ formik }) {
  return (
    <div className={style.login}>
      <Title data="Bienvenido" />
      <form className={style.data} onSubmit={formik.handleSubmit}>
        <div className={style.col}>
          <input
            type="text"
            name="correo"
            placeholder="correo"
            className={formik.errors.correo ? style.errorInput : ""}
            onChange={formik.handleChange}
            value={formik.values.correo}
          />
           {formik.errors.correo && (
            <label className={style.errorText}>
              {formik.errors.correo}
            </label>
          )}
        </div>
        <div className={style.col}>
          <input
            name="contraseña"
            type="text"
            placeholder="contraseña"
            className={formik.errors.contraseña ? style.errorInput : ""}
            onChange={formik.handleChange}
            value={formik.values.contraseña}
          />
          {formik.errors.contraseña && (
            <label className={style.errorText}>
              {formik.errors.contraseña}
            </label>
          )}
        </div>
        <span>Recuperar mi contraseña</span>
        <button type="submit">Iniciar sesión</button>
        <div className={style.checkbox}>
          <input
            name="remember"
            type="checkbox"
            value="Remember me"
            id="remember"
          />
          <label htmlFor="remember">Recordarme</label>
        </div>
      </form>
    </div>
  );
}
