import React from "react";
import CardRecipe from "../CardRecipe/CardRecipe";
import styles from "./MenuRecipe.module.css";

const MenuRecipe = (props) => {
  // TODO Este será el estado global que contiene todos los menus
  const { render } = props;
  // * Debe recibir por props el numer de la página en que se encuentra y la cantidad de cards que mostrará en cada página;

  return (
    
      <div className={styles.container}>

<div className={styles.cards}>
      <div className={styles.description}>
        <span>Foto</span>
        <span>Activo</span>
        <span>Nombre</span>
        <span>Precio</span>
        <span>Cantidad</span>
        <span>Editar</span>
      </div>
        {render
          ?.slice(
            (props.pagina - 1) * props.porPagina,
            (props.pagina - 1) * props.porPagina + props.porPagina
          )
          .map((element, index) => (
            <CardRecipe
              //id={element.id}
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

export default MenuRecipe;
