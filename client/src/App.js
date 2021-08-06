import "./App.css";
import { Route } from "react-router";
import Balance from "./Components/Balance_2/Balance";
function App() {
  return (
    <>
      <Route exact path="/">
        <Balance />
      </Route>
    </>
  );
}

export default App;
