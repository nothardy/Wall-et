import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home/home";
/* import Loging from './Components/loging/index'; */
import Register from './Components/Register/register';
import RecoverPassword from './Components/RecoverPassword/recoverpassword';
import FrecuentlyQuestions from './Components/FrecuentlyQuestions/frecuentlyquestions';


function App() {
  return (
    <div className="App">
    {/* <Route exact path="/home"><Loging/></Route>  */}
    <Route exact path="/mywallet"><Home/></Route>
    {/* <Route exact path ="/balance"> <Mybalance/></Route> */}
    <Route exact path="/register"><Register/></Route> 
    <Route exact path="/recoverpassword"><RecoverPassword/></Route> 
    <Route exact path="/faq"><FrecuentlyQuestions /></Route> 
  </div>
  );
}

export default App;
