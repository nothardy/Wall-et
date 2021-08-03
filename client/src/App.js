import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Componets/Home/index";
import Login from '../../client/src/Componets/Login/login';
import Balance from "./Components/Balance/Balance";
import { Home } from "./Components/Home/Home";


export default function App() {
  return (
    <>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route exact path="/mywallet"><Home/></Route> 
      <Route path="/balance">
        <Balance />
      </Route>
      <Route exact path='/login' exact component={Login} /> 
    </>
  )
}