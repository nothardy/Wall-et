import { Route, Redirect } from "react-router-dom";
import Home from "./Components/Home/home";
/* import Loging from './Components/loging/index'; */
import Register from "./Components/Register/register";
import RecoverPassword from "./Components/RecoverPassword/recoverpassword";
import FrecuentlyQuestions from "./Components/FrecuentlyQuestions/frecuentlyquestions";
import Login from "../../client/src/Components/Login/login";
import Balance from "./Components/Balance_2/Balance";
import NavBar from "./Components/Home/NavBar/navBar";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Logout from './Middleware/Logout'

// CSS hecho por:
// Cami y Celes: /register y /home
// Gonza: NavBar
// Franco: mywallet


export default function App() {
  return (
    <div>
      <Route exact path="/register" exact component= {Register}/>
      <Route exact path="/recoverpassword" exact component= {RecoverPassword}/>
      <Route exact path="/faq" exact component= {FrecuentlyQuestions}/>
      <Route exact path="/home" exact component= {Login} />
      <Route exact path="/logout" exact component= {Logout} />
      <PrivateRoute path="/mywallet" component= {Home} exact/>
      <PrivateRoute path="/balance" component= {Balance} exact/>
    </div>
  );
}
