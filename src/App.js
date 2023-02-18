import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation()

  return (
    <div className="App">
      {location !== "/login" && (<Route path='/' />)}
      <Route exact path='/login'/>
      <Route exact path='/dashboard'/>
      <Route exact path='/create_menu'/>
      <Route exact path='/create_recipe'/>
      <Route exact path='/register' />
      <Route exact path='/create_ingredients' />
      <Route exact path='/profile' />
      <Route exact path='/store' />
      <Route exact path='/orders' />
    </div>
  );
}

export default App;
