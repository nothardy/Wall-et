import { Route } from "react-router-dom";
import Home from "./Components/Home/home";
/* import Loging from './Components/loging/index'; */
import Register from "./Components/Register/register";
import FrecuentlyQuestions from "./Components/FrecuentlyQuestions/frecuentlyquestions";
import Balance from "./Components/Balance_2/Balance";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Logout from "./utils/Logout";
import Landingpage from "./Components/LandingPage/landingpage";
import Account from "./Components/Account/Account";
import Contacts from "./Components/Contacts/Contacts";
import Transfer from "./Components/Transfer/index";
import Help from "./Components/Help/Help";
import ResetPassword from "./Components/RecoverPassword/resetPassword";
import RecoverPassword from "./Components/RecoverPassword/password";
import Verify from "./utils/Verify";
import checkMail from "./Components/Register/checkMail";

// CSS hecho por:
// Cami y Celes: /register y /home
// Gonza: NavBar
// Franco: mywallet

export default function App() {
  return (
    <div className='App'>
      
      <Route exact path="/" component={Landingpage} />
      <Route exact path="/confirmMail/:token" component={Verify} />
      <Route exact path="/verifyMail" component={checkMail} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/recoverpassword" component={RecoverPassword} />
      <Route exact path="/faq" component={FrecuentlyQuestions} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/contacts" component={Contacts} />
      <Route path="/transfers/:section" component={Transfer} />
      <Route exact path="/help" component={Help} />
      <PrivateRoute path="/mywallet" component={Home} exact />
      <PrivateRoute path="/balance" component={Balance} exact />
      <Route exact path="/resetPassword/:userid" component={ResetPassword} />
      {/* <DarkMode /> */}
      <PrivateRoute path="/account" component={Account} exact />
    </div>
  );
}
