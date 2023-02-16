import "./App.css";
import { Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import CreateItemMenu from "./Pages/createItemMenu/CreateItemMenu";
import CreateIngredient from "./Pages/CreateIngredient/CreateIngredient";
import EditStore from "./Pages/EditStore/EditSore";
import Menu from "./Pages/Menu/Menu";

function App() {
  return (
      <div className="App">
          <Route path="/" />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/dashboard" />
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/create_menu_item" component={CreateItemMenu} />
          <Route exact path="/create_recipe" />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/create_ingredients" component={CreateIngredient} />
          <Route exact path="/profile" />
          <Route exact path="/store" />
          <Route exact path="/orders" />
          <Route exact path="/edit_store" component={EditStore} />
      </div>
  );
}

export default App;
