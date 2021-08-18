import React, { useState } from "react";
import { changePassword } from "../../Redux/Actions/resetActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import swal from 'sweetalert';
import rp from './resetPassword.module.css';
import { Link } from "react-router-dom";


export function validate(user) {
  let errors = {};
  if (!user.password) {
      errors.password = 'Required password';
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(user.password)) {
      errors.password = 'The password must contain 8 characters, an uppercase letter, and a number';
    }
    if (!user.password2) {
      errors.password2 = 'Required password';
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(user.password2)) {
      errors.password2 = 'The password must contain 8 characters, an uppercase letter, and a number';
    }
  return errors;
};

const ResetPassword = () => {
  
  const [user, setUser] = useState({
    password: '',
    password2: ''
  });

  const { userid } = useParams();
  
  const [error, setError] = useState({});
  
  const [ show, setShow ] = useState(false); //password

  const [ showPassword, setShowPassword ] = useState(false); // password2
  
  const handleShowHide = () => {
    setShow(!show);
    }

  const handleShowHide1 = () => {
    setShowPassword(!showPassword)
  }

  const dispatch = useDispatch();
  
  const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
    setError(validate({
      ...user,
      [e.target.name]: e.target.value,
    }));
	}

  function handleSubmit(e) {
   e.preventDefault()
   if (user.password !== user.password2) { 
     return swal("Passwords don't match", { icon: 'error'})}
    dispatch(changePassword({ userid, password: user.password }))
  }

  return (
    <div>
      <div className={rp.body}>
          <div className={rp.wrapper}>
              <h2 className={rp.title}>Reset Password</h2>
                <form className={rp.form} onSubmit={(e) => handleSubmit(e)}>
                    <div className={rp.field}>New Password</div>
                      <input
                      className={rp.input}
                      autoComplete='off'
                      id='password'
                      type={show ? 'text' : 'password'}
                      required='required'
                      name='password'
                      value={user.password}
                      placeholder = "Enter your New Password..."
                      onChange={handleChange}
                      />
                      {show ? (
                      <FontAwesomeIcon 
                      onClick={handleShowHide} 
                      icon={faEye} 
                      className={rp.icon}
                      id='show_hide' /> 
                      ) : (
                      <FontAwesomeIcon 
                      onClick={handleShowHide} 
                      icon={faEyeSlash}
                      className={rp.icon} 
                      id='show_hide' /> 
                      )
                      }
                      {error.password && (
                      <p className={rp.error}>{error.password}</p>
                      )} 
                      <div className={rp.field}>Re-Password</div>
                        <input
                        className={rp.input}
                        autoComplete='off'
                        id='password2'
                        type={showPassword ? 'text' : 'password'}
                        required='required'
                        name='password2'
                        value={user.password2}
                        placeholder = "Repeat your New Password..."
                        onChange={handleChange}
                        />
                        {showPassword ? (
                        <FontAwesomeIcon 
                        onClick={handleShowHide1} 
                        icon={faEye} 
                        className={rp.icon}
                        id='show_hide' /> 
                        ) : (
                        <FontAwesomeIcon 
                        onClick={handleShowHide1} 
                        icon={faEyeSlash}
                        className={rp.icon} 
                        id='show_hide' /> 
                        )
                        }
                        {error.password2 && (
                        <p className={rp.error}>{error.password2}</p>
                        )}
                          <div className={rp.primary}>
                            <button className={rp.button} type='submit'>Change Password</button>
                          </div>
                </form>
          </div>
    </div>
    <div>    

<div className={rp.margeninferior}>
      <div className={rp.contactus}>
        <div className={rp.faqLanding}>
        <Link to="/faq">
            <p>FAQ</p>
          </Link>
          </div>
        <p>
          Contact Us <br></br>+54 411154545444 <br></br>
          wall-et@wmail.com
        </p>
        </div>
      <footer className={rp.footer}>
        {" "}
        <p> Copyright© 2021 Wall-et</p>
      </footer>
      </div>
      </div>
    </div>
  )
}

export default ResetPassword;