import React, { useState, useEffect } from "react";
import MenuRecipe from "../../../components/MenuRecipe/MenuRecipe";
import NavBar from "../../../Shared/NavBar/NavBar";
import Pagination from "../../../Shared/Pagination/PaginationComponent";
import Filter from "../../../Shared/Filter/Filter";

import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../../redux/Actions/actions";

const GetRecipe = () => {
  const [pagina, setPagina] = useState(1);
  const [porPagina] = useState(5);

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
      <Filter />
      <MenuRecipe pagina={pagina} porPagina={porPagina} render={render} />
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
};

export default GetRecipe;

/* import GetRecipe from '../../../components/Recipe/Get/GetRecipe.jsx'
import NavBar from "../../../Shared/NavBar/NavBar.jsx";

const GetReceta = () => {
    return ( 
        <>
        <NavBar/>
        <GetRecipe/>
        </>
     );
}
 
export default GetReceta;  */
