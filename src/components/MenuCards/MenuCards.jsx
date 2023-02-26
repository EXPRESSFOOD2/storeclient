import React from "react";
import CardMenu from "../Card_menu/Card_menu";
import styles from "./MenuCards.module.css";

const MenuCards = (props) => {
  // TODO Este será el estado global que contiene todos los menus
  const { render } = props;
  // * Debe recibir por props el numer de la página en que se encuentra y la cantidad de cards que mostrará en cada página;
 
  //console.log(render)
  
  return (
    <div className={styles.cards}>
      <div className={styles.description}>
        <span>Foto</span>
        <span>Id</span>
        <span>Nombre</span>
        <span>Precio</span>
        <span>Cantidad</span>
        <span>Acción</span>
      </div>
      <div className={styles.container}>
        {render
          ?.slice(
            (props.pagina - 1) * props.porPagina,
            (props.pagina - 1) * props.porPagina + props.porPagina
          )
          .map((element, i) => (
            <CardMenu
              id={element.id}
              name={element.name}
              cuantity={element.stock}
              key={i}
              imgURL={element.url_image}
              price={element.price}
            />
          ))}
      </div>
    </div>
  );
};

export default MenuCards;
