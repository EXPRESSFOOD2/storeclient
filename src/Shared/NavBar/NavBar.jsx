import React from 'react'
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
      <div className={styles.navbar}>
          <div className={styles.logo}>Aquí va el logo</div>
          <div className={styles.buttons}>
              <button>Editar</button>
              <button>Registros</button>
              <button>Crear menú</button>
              <button>Crear receta</button>
          </div>
    </div>
  )
}

export default NavBar