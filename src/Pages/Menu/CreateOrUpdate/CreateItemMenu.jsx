import { useLocation, useParams } from "react-router-dom";
import Form from "../../../components/createItemMenu/Form";
import NavBar from "../../../Shared/NavBar/NavBar";

import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../../redux/Actions/actions";
import { useEffect } from "react";

export default function CreateItemMenu() {
  // get Route [create | update]
  const route = useLocation().pathname.split("/").at(2);
  // se puede mejorar, si es create aun asi busca menus y eso esta mal
  const menus = useSelector((state) => state.menus);
  const { id } = useParams();
  const itemMenu = menus.find((item) => item.id === parseInt(id));

  const dispatch = useDispatch();

  useEffect(() => {
    if (route === "update" && !menus.length) {
      dispatch(getMenu());
    }
  }, [menus, dispatch, route]);

  return (
    <div>
      <NavBar />
      {route === "update" ? (
        menus.length ? (
          <Form path={route} menu={itemMenu} />
        ) : (
          "Loading"
        )
      ) : (
        <Form path={route} />
      )}
    </div>
  );
}
