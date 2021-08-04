<<<<<<< HEAD
=======
//import "./App.css";
>>>>>>> 216a3fcfb0ae4979824a9ae76ebb34fe8e61469f
import { Route } from "react-router-dom";
import Login from '../../client/src/Componets/Login/login';



export default function App() {
  return (
    <>

       
      <Route exact path='/login' exact component={Login} /> 

      
    </>
  )
}