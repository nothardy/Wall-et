import "./App.css";
import { Route } from "react-router";
import Balance from "./Components/Balance_2/Balance";
import { Home } from "./Components/Home/Home_balance";
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
