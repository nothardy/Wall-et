import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from '../../../src/Redux/Actions/loginActions';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import s from'./login.module.css';

export function validate(input) {
    let errors = {};
    if (!input.mail) {
      errors.mail = 'Required mail';
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.mail)) {
      errors.mail = 'Invalid  ';
    }
    if (!input.password) {
        errors.password = 'Required password';
      } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(input.password)) {
        errors.password = 'The password must contain eight characters, an uppercase letter, and a number.';
      }
    return errors;
  };


const Login = () => {
    const [ user, setUser ] = useState({
        mail:'',
        password:''
    });
const [ show, setShow ] = useState(false);
const [errors, setErrors] = useState({});

const dispatch = useDispatch(); 

const handleShowHide = () => {
setShow(!show);
}

function handleChange(e) {
   setUser({
       ...user,
       [e.target.name]: e.target.value
   });
   setErrors(validate({
    ...user,
    [e.target.value]: e.target.value
  }));
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
                            className={s.container}
                            autocomplete='off'
                            id='mail'
                            type='text'
                            required='required'
                            name='mail'
                            value={user.mail}
                            placeholder="example@mail.com"
                            onChange={handleChange}/>
                            {errors.mail && (
                        <p>{errors.mail}</p>
                    )}
                    </div>
                    <div> 
                        <input
                                className={s.container}
                                id='password'
                                type={show ? 'text' : 'password'}
                                required='required'
                                name='password'
                                value={user.password}
                                placeholder = "Password..."
                                onChange={handleChange}/>
                                {errors.password && (
                        <p>{errors.password}</p>
                    )}
                            {show ? (
                                <FontAwesomeIcon 
                                onClick={handleShowHide} 
                                icon={faEye} 
                                className={s.icon} 
                                id='show_hide' /> 
                                ) : (
                                <FontAwesomeIcon 
                                onClick={handleShowHide} 
                                icon={faEyeSlash} 
                                className={s.icon} 
                                id='show_hide' /> 
                                )
                            }
                            
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