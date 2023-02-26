import "./App.css";
import axios from 'axios';
import { Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import CreateItemMenu from "./Pages/Menu/CreateOrUpdate/CreateItemMenu";
import CreateIngredient from "./Pages/CreateIngredient/CreateIngredient";
import EditStore from "./Pages/EditStore/EditSore";
import Menu from "./Pages/Menu/Menu";
import Ingredients from "./Pages/Ingredients/Ingredients";
import GetRecipe from "./Pages/Recipe/Get/GetRecipe"
import CreateRecipe from "./Pages/Recipe/Create/RecipeCreate";
import DetailRecipe from "./Pages/Recipe/DetailRecipe/DetailRecipe";


//Se establece la base de axios pensando en el deploy
axios.defaults.baseURL = "http://localhost:3001/"

function App() {
  return (
    <div className="App">
      <Route path="/" />
      <Route path="/login" component={LoginPage} />
      <Route exact path="/dashboard" />
      {/* menu */}
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/menu/create" component={CreateItemMenu} />
      <Route exact path="/menu/update/:id" component={CreateItemMenu} />
      {/* recetas */ }
      <Route exact path="/recipe" component={GetRecipe}/> 
      <Route exact path="/recipe/update/:id" component={DetailRecipe}/> 
      <Route exact path="/recipe/create" component={CreateRecipe}/>
      { }
      <Route exact path="/register" component={RegisterPage} />
      { }
      <Route exact path="/ingredient" component={Ingredients} />
      <Route exact path="/ingredient/create" component={CreateIngredient} />
      <Route exact path="/ingredient/update/:id" component={CreateIngredient} />
      { }
      <Route exact path="/profile" />
      <Route exact path="/store" />
      <Route exact path="/orders" />
      <Route exact path="/store/update" component={EditStore} />
    </div>
  );
}

export default App;
