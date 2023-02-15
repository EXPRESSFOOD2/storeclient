import React from "react";

const MenuCards = (props) => {
    // TODO Este será el estado global que contiene todos los menus
    const allMenus = [];

    // * Debe recibir por props el numer de la página en que se encuentra y la cantidad de cards que mostrará en cada página;

    return (
        <div>
            {allMenus.slice(
                (props.pagina - 1) * props.porPagina,
                (props.pagina - 1) * props.porPagina + props.porPagina
            ).map((element, index) =>(
                <div>{element}</div>
            ))}
        </div>
    );
};

export default MenuCards;
