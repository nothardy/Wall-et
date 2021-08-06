import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home/home";

function App() {
  return (
    <div className="App">
      <Route exact path="/mywallet"><Home/></Route> 
    </div>
  );
}

export default App;
