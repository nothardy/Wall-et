import "./App.css";
<<<<<<< HEAD
import { Route } from "react-router-dom";
import Home from "./Components/Home/index";

=======
import { Route } from "react-router";
import Balance from "./Components/Balance/Balance";
import { Home } from "./Components/Home/Home";
>>>>>>> 9f86c11a60d46dc14bcc54af4af8d44180201ae5
function App() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/balance">
        <Balance />
      </Route>
    </>
  );
}

export default App;
