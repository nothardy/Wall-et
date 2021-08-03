import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home/index";

function App() {
  return (
    <div className="App">
      <Route exact path="/mywallet"><Home/></Route> 
    </div>
  );
}

export default App;
