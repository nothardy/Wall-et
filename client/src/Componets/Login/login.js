import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
//import axios from 'axios';
import { login } from '../../../src/Redux/Actions/loginActions';

//const MAX_LEN = 15;
//const MIN_LEN = 6;
//const PASS_LABELS = ['Too Short', 'Weak', 'Normal', 'Strong', 'Secure'];

//axios.defaults.withCredentials = true;

const Login = () => {
    const [ user, setUser ] = useState({
        mail:'',
        password:''
    });
const dispatch = useDispatch();   
//const logged = useSelector((state) => state.loginReducer.isAuth);
function handleChange(e) {
   setUser({
       ...user,
       [e.target.name]: e.target.value
   });
   }
    
   function handleSubmit (event) {
       event.preventDefault();
       dispatch(login(user));
  } 
        return(
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2>WELCOME</h2>
                <img />
                    <div>
                        <input
                            id='mail'
                            type='text'
                            required='required'
                            name='mail'
                            value={user.mail}
                            placeholder="ejemplo@mail.com"
                            onChange={handleChange}/>
                    </div>
                        <div> 
                            <input
                                id='password'
                                type='password'
                                required='required'
                                name='password'
                                value={user.password}
                                //maxLength={15}
                                placeholder = "Password..."
                                onChange={handleChange}/>
                                    <div
                                       // showLabels
                                       // password={state.password}
                                       // maxLength={MAX_LEN}
                                       // minLength={MIN_LEN}
                                       // labels={PASS_LABELS}
                                    />
                        </div>
                            <Link to='/recoverpassword'>
                                <p>Forgot Password?</p>
                            </Link>
                                <div>
                                    <button type='submit'>LOGIN</button>
                                </div>
            </form>  
        )
    
}

export default Login;