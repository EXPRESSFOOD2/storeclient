/* eslint-disable react/prop-types */
import React from "react";
import style from "./Login.module.css";
import img from "./image/logoSinFondo.png";
import { red } from "@mui/material/colors";

const Login = ({ formik }) => {
    return (
        <div className={style.superDiv}>
            <div className={style.createLogin}>
                <div className={style.prev}>
                    <img src={img} alt="not found" className={style.image} />
                    <p >¡Te damos la bienvenida!</p>
                    <p style={{color:"red", fontSize:"small"}}>Usuario de prueba: x@x.com</p>
                    <p style={{color:"red", fontSize:"small"}}>password de prueba:12345678</p>
                </div>
                <form action="" className={style.form} onSubmit={formik.handleSubmit}>
                    <div className={style.col}>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            className={formik.errors.email ? style.errorInput : ""}
                            id="email"
                            name="email"
                            {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <label className={style.errorText}>{formik.errors.email}</label>
                        ) : null}
                    </div>
                    <div className={style.col}>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            className={formik.errors.password ? style.errorInput : ""}
                            id="password"
                            name="password"
                            {...formik.getFieldProps("password")}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <label className={style.errorText}>{formik.errors.password}</label>
                        ) : null}
                        <a href="https://github.com/EXPRESSFOOD2">olvide mi contraseña</a>
                    </div>
                    <div className={style.logins}>
                        <button type="submit">iniciar sesión</button>
                    </div>
                    <div className={style.checkbox}>
                        <input type="checkbox" name="" id="" value="rememberMe" />
                        <label htmlFor="">Recuerdame</label>
                    </div>
                </form>

                {/* <div className={style.question}>
          <p>¿primera vez en Space Food? </p>{" "}

          <a href="/register"> ¡Registrate! </a>
        </div> */}
            </div>
        </div>
    );
};

export default Login;
