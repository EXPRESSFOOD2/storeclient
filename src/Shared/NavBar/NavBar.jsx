import React from "react";
import styles from "./NavBar.module.css";
import img from "./image/logoSARASA.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={img} alt="" className={styles.logo} />
      </div>
      <div className={styles.buttons}>
        <Link to="/edit_store">
          <button
            className={
              location.pathname === "/edit_store" ? styles.currentPag : ""
            }
          >
            Editar
          </button>
        </Link>
        <Link to="/register">
          <button
            className={
              location.pathname === "/register" ? styles.currentPag : ""
            }
          >
            Registros
          </button>
        </Link>
        <Link to="/menu">
          <button
            className={
              location.pathname === "/menu" ? styles.currentPag : ""
            }
          >
            Menú
          </button>
        </Link>
        <button
          className={
            location.pathname === "/create_recipe" ? styles.currentPag : ""
          }
        >
          Receta
        </button>
        {/* <Link to="/menu"> */}
          <button
            // className={location.pathname === "/menu" ? styles.currentPag : ""}
          >
            Ingrdientes
          </button>
        {/* </Link> */}
        <Link to="/login">
          <button>Salir</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
