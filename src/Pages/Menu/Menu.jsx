import React, { useState } from "react";
import MenuCards from "../../components/MenuCards/MenuCards";
import NavBar from "../../Shared/NavBar/NavBar";
import Pagination from "../../Shared/Pagination/Pagination";

const Menu = () => {
    const [render] = useState([
        { id: 1, name: "Hamburguesa", cuantity: 14 },
        { id: 2, name: "Pizza", cuantity: 14 },
        { id: 3, name: "Hot Dog", cuantity: 14 },
        { id: 4, name: "Salchipapa", cuantity: 14 },
        { id: 5, name: "Picada", cuantity: 14 },
        { id: 6, name: "PataBurguer", cuantity: 14 },
        { id: 7, name: "Suizo", cuantity: 14 },
        { id: 8, name: "Desgranado", cuantity: 14 },
        { id: 9, name: "Asado de cerdo", cuantity: 14 },
        { id: 10, name: "Pechuga a la plancha", cuantity: 14 },
        { id: 11, name: "Hamburguesa", cuantity: 14 },
        { id: 12, name: "Pizza", cuantity: 14 },
        { id: 13, name: "Hot Dog", cuantity: 14 },
        { id: 14, name: "Salchipapa", cuantity: 14 },
        { id: 15, name: "Picada", cuantity: 14 },
        { id: 16, name: "PataBurguer", cuantity: 14 },
        { id: 17, name: "Suizo", cuantity: 14 },
        { id: 18, name: "Desgranado", cuantity: 14 },
        { id: 19, name: "Asado de cerdo", cuantity: 14 },
        { id: 20, name: "Pechuga a la plancha", cuantity: 14 },
    ]);
    const [pagina, setPagina] = useState(1);
    const [porPagina] = useState(10);
    const maximo = Math.ceil(render.length / porPagina);

    return (
        <div>
            <NavBar />
            <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
            <MenuCards pagina={pagina} porPagina={porPagina} render={render} />
        </div>
    );
};

export default Menu;
