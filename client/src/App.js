import "./App.css";
import { Route, Switch } from "react-router";
import {Balance} from './Components/Balance/Balance'
import { Home } from "./Components/Home/Home";
function App() {
  return (
   <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/' component={Balance}/>
   </Switch>
  );
}

export default App;
