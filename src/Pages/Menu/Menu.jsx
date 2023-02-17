import React, { useState, useEffect } from "react";
import MenuCards from "../../components/MenuCards/MenuCards";
import NavBar from "../../Shared/NavBar/NavBar";
import Pagination from "../../Shared/Pagination/Pagination";
import Filter from "../../Shared/Filter/Filter"
import styles from './Menu.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../redux/Actions/actions";

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
    <div>
      <NavBar />
      <div className={styles.menu}>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      <Filter/>
      <MenuCards pagina={pagina} porPagina={porPagina} render={render} />
      </div>
    </div>
  );
};

export default Menu;
