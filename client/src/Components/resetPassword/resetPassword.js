import React, { useState } from "react";
import { changePassword } from "../../Redux/Actions/resetActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const ResetPassword = () => {
  const [ show, setShow ] = useState(false);

  const dispatch = useDispatch();
  const { userid } = useParams();

  const [password, setPassword] = useState({
    password1: '',
    password2: ''
  });

  const handleChange = (e) => {
		setPassword({
			...password,
			[e.target.name]: e.target.value,
		});
	};

  const [error, setError] = useState({
    passwordError: "",
  });

  const handleShowHide = () => {
    setShow(!show);
    }

  function validateForm() {
    setError({
      passwordError: "",
    });

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password)) { 
      return swal("Password must contain eight characters, an uppercase letter, and a number.", "error") 
    }
  }

  function handleSubmit(e) {
   e.preventDefault()
    //const valid = validateForm()
  //if (valid) {
    dispatch(changePassword({ userid, password: password.password1 }))
  // }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <h2>Reset Password</h2>
            <input
            id='password1'
            type={show ? 'text' : 'password1'}
            required='required'
            name='password1'
            value={password.password1}
            placeholder = "Enter your New Password..."
            onChange={handleChange}
            />
            {show ? (
                <FontAwesomeIcon 
                onClick={handleShowHide} 
                icon={faEye} 
                id='show_hide' /> 
                ) : (
                <FontAwesomeIcon 
                onClick={handleShowHide} 
                icon={faEyeSlash} 
                id='show_hide' /> 
                )
                }
                {error.passwordError && (
                <p>{error.passwordError}</p>
                )}
      </div>  
      <div>
            <input
            id='password2'
            type={show ? 'text' : 'password2'}
            required='required'
            name='password2'
            value={password.password2}
            placeholder = "Repeat your New Password..."
            onChange={handleChange}
            />
            {show ? (
                <FontAwesomeIcon 
                onClick={handleShowHide} 
                icon={faEye} 
                id='show_hide' /> 
                ) : (
                <FontAwesomeIcon 
                onClick={handleShowHide} 
                icon={faEyeSlash} 
                id='show_hide' /> 
                )
                }
      </div>
        <div>
          <button type='submit'>Change Password</button>
        </div>
    </form>
  )
}

export default ResetPassword;