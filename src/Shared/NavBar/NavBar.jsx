import React from "react";
import styles from "./NavBar.module.css";
import img from "./image/logoSARASA.png";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={img} alt="" className={styles.logo} />
      </div>
      <div className={styles.buttons}>
        <button>Editar</button>
        <button>Registros</button>
        <button>Crear menú</button>
        <button>Crear receta</button>
      </div>
    </div>
  );
};

export default NavBar;
