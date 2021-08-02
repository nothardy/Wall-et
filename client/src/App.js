/* import logo from "./logo.svg"; */
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Componets/Home/index";

function App() {
  return (
    <div className="App">
      <Route exact path="/t" componet={Home} />     
    </div>
  );
}

export default App;
