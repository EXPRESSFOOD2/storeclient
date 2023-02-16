import React from "react";
import CardMenu from "../Card_menu/Card_menu";
import styles from "./MenuCards.module.css";

const MenuCards = (props) => {
    // TODO Este será el estado global que contiene todos los menus
    // const allMenus = [];

    // * Debe recibir por props el numer de la página en que se encuentra y la cantidad de cards que mostrará en cada página;

    return (
        <div className={styles.cards}>
            <div className={styles.description}>
                <span>Foto</span>
                <span>Id</span>
                <span>Nombre</span>
                <span>Cantidad</span>
                <span>Acción</span>
            </div>
            <div className={styles.container}>
                {/* {allMenus.slice(
                (props.pagina - 1) * props.porPagina,
                (props.pagina - 1) * props.porPagina + props.porPagina
                ).map((element, index) =>(
                    <Cardmenu/>
                ))} */}
                <CardMenu id="1" name="Hamburguesa" cuantity="15" />
                <CardMenu id="2" name="Pizza" cuantity="12" />
                <CardMenu id="3" name="Salchipapa" cuantity="17" />
                <CardMenu id="4" name="Hot Dog" cuantity="19" />
            </div>
        </div>
    );
};

export default MenuCards;
