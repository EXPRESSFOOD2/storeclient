import React, { useState, useEffect } from "react";
import MenuCards from "../../components/MenuCards/MenuCards";
import NavBar from "../../Shared/NavBar/NavBar";
import Pagination from "../../Shared/Pagination/Pagination";
import Filter from "../../Shared/Filter/Filter";

import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../redux/Actions/actions";

import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";


const Menu = () => {
  const [pagina, setPagina] = useState(1);
  const [porPagina] = useState(10);

  const dispatch = useDispatch();
  const render = useSelector((state) => state.render);

  let maximo = Math.ceil(render.length / porPagina);

  // Dispatch

  useEffect(() => {
    if (!render.length) {
      dispatch(getMenu());
    }
  }, [render, dispatch]);

  return (
    <div className={style.container}>
      <NavBar />
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      <div className={style.rows}>
        <Filter />
        <NavLink to="/menu/create">
          <button className={style.button}>Crear menú</button>
        </NavLink>
      </div>

      <MenuCards pagina={pagina} porPagina={porPagina} render={render} />
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
};

export default Menu;
