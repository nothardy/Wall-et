import "./App.css";
import { Route } from "react-router";
import { Balance } from "./Components/Balance/Balance";
import { Home } from "./Components/Home/Home";
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
