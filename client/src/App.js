
import { Route } from "react-router-dom";
import Login from '../../client/src/Componets/Login/login';
import Password from "./Componets/resetPassword/password";




export default function App() {
  return (
    <>

       
      <Route exact path='/home' exact component={Login} /> 
      <Route exact path='/forgot' exact component={Password} />
      
    </>
  )
}