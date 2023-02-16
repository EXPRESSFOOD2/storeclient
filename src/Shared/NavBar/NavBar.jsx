import React from "react";
import styles from "./NavBar.module.css";
import img from "./image/logoSARASA.png";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={img} alt="" className={styles.logo} />
            </div>
            <div className={styles.buttons}>
                <Link to="/edit_store">
                    <button>Editar</button>
                </Link>
                <Link to="/register">
                    <button>Registrar</button>
                </Link>
                <Link to="/create_menu_item">
                    <button>Crear menú</button>
                </Link>
                <button>Crear receta</button>
                <Link to="/menu">
                    <button>Menús</button>
          </Link>
          <Link to="/login">
                    <button>Salir</button>
          </Link>
            </div>
        </div>
    );
};

export default NavBar;
