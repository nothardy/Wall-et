import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from '../../Redux/Actions/loginActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import s from'./login.module.css';

export function validate(user) {
    let errors = {};

    if (!user.mail) {
      errors.mail = ('Required Email')
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(user.mail)) {
      errors.mail = 'Invalid Email ';
    }
    if (!user.password) {
        errors.password = 'Required password';
      } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(user.password)) {
        errors.password = 'The password must contain 8 Characters, an Uppercase Letter, and a Number.';
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
            <form className={s.formulariologin} onSubmit={(e) => handleSubmit(e)}>
                <h2>WELCOME</h2>
                
                    <div>
                        <input
                            className={s.inputs}
                            autocomplete='off'
                            id='mail'
                            type='text'
                            required='required'
                            name='mail'
                            value={user.mail}
                            placeholder="example@mail.com"
                            onChange={handleChange}/>
                            {errors.mail && (
                        <p className={s.errors}>{errors.mail}</p>
                    )}
                    </div>
                    <div> 
                        <input
                                className={s.inputs}
                                id='password'
                                type={show ? 'text' : 'password'}
                                required='required'
                                name='password'
                                value={user.password}
                                placeholder = "Enter your Password..."
                                onChange={handleChange}/>
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
                                {errors.password && (
                        <p className={s.errors}>{errors.password}</p>
                                )}
                            
                        </div>
                       
                                <div>
                                    <button className={s.buttonlogin} type='submit'>LOGIN</button>
                                </div>
                                <div className={s.linkslogin}>
                            <Link to='/recoverpassword'>
                                <p>Forgot Password?</p>
                            </Link>
                            </div>
            </form>  
        )
    
}

export default Login;