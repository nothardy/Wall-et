/* import logo from "./logo.svg"; */
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Componets/Home/index";
import Login from '../../client/src/Componets/Login/login';

function App() {
  return (
    <div className="App">
      <Route exact path="/" exact component={Login} />
    </div>
  );
}

export default App;
