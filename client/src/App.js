import "./App.css";
import { Route } from "react-router";
import {Balance} from './Components/Balance/Balance'
function App() {
  return (
    <Route path='/' component={Balance}/>
  );
}

export default App;
