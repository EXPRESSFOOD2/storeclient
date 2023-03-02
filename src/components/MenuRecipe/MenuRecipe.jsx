/* eslint-disable react/prop-types */
import React from "react";
import CardRecipe from "../CardRecipe/CardRecipe";
import styles from "./MenuRecipe.module.css";

const MenuRecipe = (props) => {
    // TODO Este será el estado global que contiene todos los menus
    const { render_receta } = props;
    // * Debe recibir por props el numer de la página en que se encuentra y la cantidad de cards que mostrará en cada página;

    //console.log(render_receta )

    return (
        <div className={styles.cards}>
            <div className={styles.description}>
                <span>Nombre</span>
                <span>Acción</span>
            </div>
            {render_receta
                ?.slice(
                    (props.pagina - 1) * props.porPagina,
                    (props.pagina - 1) * props.porPagina + props.porPagina
                )
                .map((element, i) => (
                    <CardRecipe
                        id={element.id}
                        name={element.name}
                        details={element.details}
                        stock={element.produced_amount}
                        active={element.is_active}
                        ingredients={element.Ingredients}
                        key={i}
                    />
                ))}
        </div>
    );
};

export default MenuRecipe;
