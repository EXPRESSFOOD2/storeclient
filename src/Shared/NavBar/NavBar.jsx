import React from "react";
import styles from "./NavBar.module.css";
import img from "./image/logoSARASA.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation().pathname.split("/").at(1);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={img} alt="" className={styles.logo} />
      </div>
      <div className={styles.buttons}>
        <Link to="/store/update">
          <button className={location === "store" ? styles.currentPag : ""}>
            Editar
          </button>
        </Link>
        <Link to="/register">
          <button className={location === "register" ? styles.currentPag : ""}>
            Registros
          </button>
        </Link>

        <Link to="/menu">
          <button className={location === "menu" ? styles.currentPag : ""}>
            Menú
          </button>
        </Link>

        <Link to="get/recipe">
        <button className={location === "recipe" ? styles.currentPag : ""}>
          Receta
        </button>
        </Link>

        <Link to="/ingredient">
          <button
            className={location === "ingredient" ? styles.currentPag : ""}
          >
            Ingredientes
          </button>
        </Link>
        <Link to="/login">
          <button>Salir</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
