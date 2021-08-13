/* import logo from "./logo.svg"; */
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home/index";
import Help from "./Components/Help/help";

function App() {
  return (
    <div className="App">
      <Route exact path="/t"><Home/></Route> 
      <Route exact path='/help' component={Help}></Route>
    </div>
  );
}

export default App;
