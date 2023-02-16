import React, { useState, useEffect } from "react";
import MenuCards from "../../components/MenuCards/MenuCards";
import NavBar from "../../Shared/NavBar/NavBar";
import Pagination from "../../Shared/Pagination/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../redux/Actions/actions";

const Menu = () => {
  const [pagina, setPagina] = useState(1);
  const [porPagina] = useState(10);

  const dispatch = useDispatch();
  const menus = useSelector((state) => state.menus);

  let maximo = Math.ceil(menus.length / porPagina);

  // Dispatch

  useEffect(() => {
    if (!menus.length) {
      dispatch(getMenu());
    }
  }, [menus, dispatch]);

  return (
    <div>
      <NavBar />
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      <MenuCards pagina={pagina} porPagina={porPagina} render={menus} />
    </div>
  );
};

export default Menu;
