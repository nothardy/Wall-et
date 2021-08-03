import "./App.css";
import { Route } from "react-router";
import Balance from "./Components/Balance/Balance";
import { Home } from "./Components/Home/Home";


export default function App() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/mywallet"><Home/></Route> 
      <Route path="/balance">
        <Balance />
      </Route>
    </>
  )
}