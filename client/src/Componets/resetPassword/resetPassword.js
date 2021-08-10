import React, { useState } from "react";
import { ModificarPassword } from "../../Redux/User";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const ResetPassword = () => {
  const [ show, setShow ] = useState(false);

  const [password1, setPassword1] = useState("");

  const [password2, setPassword2] = useState("");
  const [error, setError] = useState({
    matchPasswordError: "",
    passwordError: "",
  });

  const handleShowHide = () => {
    setShow(!show);
    }

  function validateForm() {
    setError({
      matchPasswordError: "",
      passwordError: "",
    });

    if (password1 !== password2) {
      matchPasswordError = "Las contraseñas no coinciden";
    }
    if (password1.length < 8 || password1.length > 15) {
      passwordError = "Debe tener entre 8 y 15 caracteres";
    } else if (password1.search(/[0-9]/) == -1) {
    }
  }

  function handleSubmit() {
    const valid = validateForm()
    if (valid) {
      ResetPassword(password2)
      Alert.alert("contraseña modificada")
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <h2>Reset Password</h2>
            <input
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
                id='show_hide' /> 
                ) : (
                <FontAwesomeIcon 
                onClick={handleShowHide} 
                icon={faEyeSlash} 
                id='show_hide' /> 
                )
                }
                {errors.password && (
                <p>{errors.password}</p>
                )}
      </div>  
      <div>
            <input
            id='password'
            type={show ? 'text' : 'password'}
            required='required'
            name='password'
            value={user.password}
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
        {error.matchPasswordError ? (
          <p>{error.matchPasswordError}</p>
        ) : null}
      </div>
        <div>
          <button type='submit'>Change Password</button>
        </div>
    </form>
  )
}

export default ResetPassword;