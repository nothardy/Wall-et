import React, { useState, useRef } from 'react';
import './register.module.css';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import {r } from './register.module.css';

export function validate(input) {
    let errors = {};
    if (!input.mail) {
      errors.mail = 'Required Email';
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.mail)) {
      errors.mail = 'Invalid Email ';
    }
    if (!input.password) {
        errors.password = 'Required password';
      } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(input.password)) {
        errors.password = 'The password must contain eight characters, an uppercase letter, and a number.';
      }
    return errors;
  };

function Register() {
    const [input, setInput] = useState({
        fullname: '',
        dni: '',
        mail: '',
        password: '',
        confirmpassword:'',
        birth_date: ''
    });
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const [captchaValido, cambiarCaptchaValido] = useState(null);
    const [usuarioValido, cambiarUsuarioValido] = useState(false);
    const captcha = useRef(null);


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.value]: e.target.value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (/^(\d{2}\.{1}\d{3}\.\d{3})|(\d{2}\s{1}\d{3}\s\d{3})$/.test(input.dni)) { return alert("ID number must not contain points") };
        if (!/^[0-9]*$/.test(input.dni)) {return alert("ID must be a number")};
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.mail)) {
            return alert('Invalid Email');
        };
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(input.password)) { return alert("Password must contain eight characters, an uppercase letter, and a number.") };
        if (captcha.current.getValue()) {
            console.log('The user is not a robot');
            cambiarUsuarioValido(true);
            cambiarCaptchaValido(true);
            try {
                await fetch('http://localhost:3001/register',
                    {
                        method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(input),
                    })
                alert('Account created succesfully!');
            } catch (err) {
                console.log(err.message)
                alert('We could not create account. Please try again.');
            }
            history.push('/home');
        } else {
            console.log('Please accept the captcha');
            cambiarUsuarioValido(false);
            cambiarCaptchaValido(false);
        }
    }



    function captchaChange() {
        if (captcha.current.getValue()) {
            console.log('The user is not a robot');
            cambiarCaptchaValido(true);
        }
    }


    return (

        <div className={r.formulario}>
            {!usuarioValido &&
                <div>
                    <h2 className={r.create}> Create your Account </h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <p className={r.titles}>FullName*</p>
                        <input type="text" placeholder="FullName" id="title" required="required" name='fullname' value={input.fullname} onChange={handleChange} />
                        <p className={r.titles}>Identification Number*</p>
                        <input type="text" placeholder="Identification Number" name='dni' required="required" value={input.dni} onChange={handleChange} />

                        <div>
                            <p className={r.titles}>E-mail*</p>
                            <input type="text" placeholder="E-mail" required="required" name='mail' value={input.mail} onChange={handleChange} />
                            {errors.mail && (
                                <p className=''>{errors.mail}</p>
                            )}
                        </div>
                        <div>
                            <p className={r.titles}>Password*</p>
                            <input type="password" placeholder="Password" required="required" name='password' id="password" value={input.password} onChange={handleChange} />
                            {errors.password && (
                                <p className=''>{errors.password}</p>
                            )}
                        </div>
                        <div>
                <p className={r.titles}>Confirm Password*</p>
                <input type="password" placeholder="Confirm Password"  required="required" name="confirmpassword" id="confirmpassword" value={input.confirmpassword} onChange={handleChange} />
                {errors.password && (
                    <p className=''>{errors.password}</p>
                    )}
                    </div>
                        <div className="form-row hide-inputbtns">
                            <label for="birthdate" className={r.titles}>Date of Birth*</label>
                            <input className="birthdate" type="date" placeholder="YYYY-MM-DD" data-date-split-input="true" name='birth_date' value={input.birth_date} onChange={handleChange} required='required' min="1900-01-01" max="2003-12-31" />
                        </div>

                        <div className="recaptcha">
                            <ReCAPTCHA
                                required
                                ref={captcha}
                                sitekey="6LfmRtcbAAAAAFHflEfIwe6cWeS89VI91LKYQ6sH"
                                onChange={captchaChange}
                            />
                        </div>


                        {captchaValido === false && <div className="error-captcha">Please accept the captcha</div>}
                        <button type="submit" className={r.buttoncreate}>Create User</button>


                    </form>
                </div>
            }
            <Link to='/recoverpassword'>
                <p className={r.descriptionDetails}>Forgot Password</p>
            </Link>
            <Link to='/faq'>
                <p className={r.descriptionDetails}>Frecuently Asked Questions</p>
            </Link>
            <p className={r.descriptionDetails}>You already have an account?</p>
            <Link to='/loging'>
                <p className={r.descriptionDetails}>Log in</p>
            </Link>
        </div>

    )
}

export default Register
