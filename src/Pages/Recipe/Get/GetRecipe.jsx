import React, { useState, useEffect } from "react";
import MenuRecipe from "../../../components/MenuRecipe/MenuRecipe";
import NavBar from "../../../Shared/NavBar/NavBar";
import { Pagination } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";//Los hoods
import { getReceta } from "../../../redux/Actions/actions";

const GetRecipe = () => {
  const [pagina, setPagina] = useState(1);
  const [porPagina] = useState(5);

  const dispatch = useDispatch();
  const render_receta = useSelector((state) => state.render_receta);

  let maximo = Math.ceil(render_receta.length / porPagina);

  // Dispatch

  useEffect(() => {
    if (!render_receta.length) {
      dispatch(getReceta());
    }
  }, [render_receta, dispatch]);
  //console.log(render_receta)
  return (
    <div>
      <NavBar />
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      <MenuRecipe pagina={pagina} porPagina={porPagina} render_receta={render_receta} />
      
    </div>
  );
};

export default GetRecipe;
  