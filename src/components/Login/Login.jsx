import React from "react";
import Title from "../../Shared/Title/Title";
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.login}>
            <Title data="Bienvenido" />
            <form className={styles.data}>
                <input type="text" placeholder="correo" className={styles.inputData} />
                <input type="text" placeholder="contraseña" className={styles.inputData} />
                <span>Recuperar mi contraseña</span>
                <button>Iniciar sesión</button>
                <div className={styles.checkbox}>
                    <input name="remember" type="checkbox" value="Remember me" id="remember" />
                    <label htmlFor="remember">Recordarme</label>
                </div>
            </form>
        </div>
    );
};

export default Login;
