//import "./App.css";
import { Route } from "react-router-dom";

import Login from '../../client/src/Componets/Login/login';



export default function App() {
  return (
    <>

       
      <Route exact path='/login' exact component={Login} /> 

      
    </>
  )
}