import React from "react";
import Title from "../../Shared/Title/Title";
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.login}>
            <Title data="Welcome" />
            <form className={styles.data}>
                <input type="text" placeholder="mail" className={styles.inputData} />
                <input type="text" placeholder="password" className={styles.inputData} />
                <span>Recover my password</span>
                <button>Login</button>
                <div className={styles.checkbox}>
                    <input name="remember" type="checkbox" value="Remember me" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
            </form>
        </div>
    );
};

export default Login;
