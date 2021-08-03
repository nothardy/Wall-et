import React, { useState, useRef } from 'react';
import './register.module.css';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

export function validate(input) {
    let errors = {};
    if (!input.mail) {
      errors.mail = 'Se requiere un Email';
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.mail)) {
      errors.mail = 'Email inválido';
    }
    if (!input.password) {
        errors.password = 'Se requiere una contraseña';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(input.password)) {
        errors.password = 'La contraseña debe contener ocho caracteres, al menos un caracter especial,una mayúscula y un número.';
      }
  
    return errors;
  };

function Register() {
    const [user, setUser] = useState({
        fullname: '',
        dni: '',
        mail: '',
        password: '',
        birth_date: ''
    });
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const [captchaValido, cambiarCaptchaValido] = useState(null);
	const [usuarioValido, cambiarUsuarioValido] = useState(false);
    const captcha= useRef(null);

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...user,
            [e.target.id]: e.target.value
          }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
                
        try {
            await fetch('http://localhost:3001/register',
                {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user),
                })
            alert('Account created succesfully!');
            setUser({
                fullname: '',
                dni: '',
                mail: '',
                password: '',
                birth_date: ''
            })
            history.push('/home');
        } catch (err) {
            console.log(err.message)
            alert('We could not create account. Please try again.');
        }
		
    }


function onChange() {
    if(captcha.current.getValue()){
        console.log('The user is not a robot');
        cambiarUsuarioValido(true);
        cambiarCaptchaValido(true);
    } else {
        console.log('Por favor acepta el captcha');
        cambiarUsuarioValido(false);
        cambiarCaptchaValido(false);
    
    }
}


    return (
        
        <div className="formulario">
            
            <h2> Create your Account </h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>FullName</p>
                <input type="text" placeholder="FullName" id="title" required="required" name='fullname' value={user.fullname} onChange={handleChange} />
                <p>Identification Number</p>
                <input type="text" placeholder="Identification Number"  name='dni' required="required" value={user.dni} onChange={handleChange} />
                <p>E-mail</p>
                <input type="text" placeholder="E-mail"  required="required" name='mail' value={user.mail} onChange={handleChange} />
                {errors.mail && (
                  <p className=''>{errors.mail}</p>
                  )} 
                <p>Password</p>
                <input type="password" placeholder="Password" required="required" name='password' value={user.password} onChange={handleChange} />
                {errors.password && (
                   <p className=''>{errors.password}</p>
                   )} 
                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password"  required="required" name="password2" id="password2" value={user.password} onChange={handleChange} />
                {errors.password && (
                   <p className=''>{errors.password}</p>
                   )}
                <div className="form-row hide-inputbtns">
                    <label for="birthdate">Date of Birth</label>
                    <input className="birthdate" type="date" placeholder="YYYY-MM-DD" data-date-split-input="true" name='birth_date' value={user.birth_date} onChange={handleChange} />
                </div>

                <div className="recaptcha">
                <ReCAPTCHA
                    ref={captcha}
                    sitekey="6LfmRtcbAAAAAFHflEfIwe6cWeS89VI91LKYQ6sH"
                    onChange={onChange}
                        />
                </div>
                {captchaValido === false && <div className="error-captcha">Por favor acepta el captcha</div>}
                    <button type="submit">Create User</button>
            </form>

            <Link to='/recoverpassword'>
                <p className='descriptionDetails'>Forgot Password</p>
            </Link>
            <Link to='/faq'>
                <p className='descriptionDetails'>Frecuently Asked Questions</p>
            </Link>
        </div>
    )
}

export default Register
