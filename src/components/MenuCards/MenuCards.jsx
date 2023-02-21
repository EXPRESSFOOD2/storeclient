import React from "react";
import CardMenu from "../Card_menu/Card_menu";
import styles from "./MenuCards.module.css";

const MenuCards = (props) => {
  // TODO Este será el estado global que contiene todos los menus
  const { render } = props;
  // * Debe recibir por props el numer de la página en que se encuentra y la cantidad de cards que mostrará en cada página;

  return (
    <div className={styles.cards}>
      <div className={styles.description}>
        <span className={styles.foto}>Foto</span>
        <span className={styles.nombre}>Nombre</span>
        <span className={styles.id}>Id</span>
        <span className={styles.precio}>Precio</span>
        <span className={styles.cantidad}>Cantidad</span>
        <span className={styles.accion}>Acción</span>
      </div>
      <div className={styles.container}>
        {render
          ?.slice(
            (props.pagina - 1) * props.porPagina,
            (props.pagina - 1) * props.porPagina + props.porPagina
          )
          .map((element, index) => (
            <CardMenu
              id={element.id}
              name={element.name}
              cuantity={element.stock}
              key={index}
              imgURL={element.url_image}
              price={element.price}
            />
          ))}
      </div>
    </div>
  );
};

export default MenuCards;
