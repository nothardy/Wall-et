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
import FaceView from "./Components/FaceRecognition/FaceView";
import ExpiredSession from "./Components/FaceRecognition/ExpiredSession/ExpiredSession";

// CSS hecho por:
// Cami y Celes: /register y /home
// Gonza: NavBar
// Franco: mywallet

export default function App() {
	return (
		<div>
			<Route exact path="/" component={Landingpage} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/recoverpassword" component={RecoverPassword} />
			<Route exact path="/faq" component={FrecuentlyQuestions} />
			<Route exact path="/expiredsession" component={ExpiredSession}/>
			<Route exact path="/logout" component={Logout} />
			<PrivateRoute path="/account" component={Account} exact />
			<Route exact path="/contacts" component={Contacts} />
			<Route path="/transfers/:section" component={Transfer} />
			<Route exact path="/help" component={Help} />
			<PrivateRoute path="/mywallet" component={Home} exact />
			<PrivateRoute path="/balance" component={Balance} exact />
			<Route
				exact
				path="/resetPassword/:userid"
				component={ResetPassword}
			/>
			<PrivateRoute path="/face" component={FaceView} exact />
		</div>
	);
}
