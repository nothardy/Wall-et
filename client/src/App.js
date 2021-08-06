import { Route } from "react-router-dom";
import Login from '../../client/src/Componets/Login/login';



export default function App() {
  return (
    <>

       
      <Route exact path='/home' exact component={Login} /> 

      
    </>
  )
}