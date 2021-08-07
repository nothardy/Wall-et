import { Route } from "react-router-dom";
import Home from "./Components/Home/home";
/* import Loging from './Components/loging/index'; */
import Register from "./Components/Register/register";
import RecoverPassword from "./Components/RecoverPassword/recoverpassword";
import FrecuentlyQuestions from "./Components/FrecuentlyQuestions/frecuentlyquestions";
import Login from "../../client/src/Components/Login/login";
import Balance from "./Components/Balance_2/Balance";
import NavBar from "./Components/Home/NavBar/navBar";

// CSS hecho por:
// Cami y Celes: /register y /home
// Gonza: NavBar
// Franco: mywallet


export default function App() {
  return (
    <div>
      <Route exact path="/mywallet">
        <Home />
      </Route>
      <Route exact path="/balance">
        <NavBar />
        <Balance />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/recoverpassword">
        <RecoverPassword />
      </Route>
      <Route exact path="/faq">
        <FrecuentlyQuestions />
      </Route>
      <Route exact path="/home" exact component={Login} />
    </div>
  );
}
