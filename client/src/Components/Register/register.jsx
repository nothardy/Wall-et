import React, { useState, useRef } from 'react';
//import './register.module.css';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import r from './register.module.css';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';

// export function validate(input) {
//     let errors = {};
//     if (!input.mail) {
//       errors.mail = 'Required Email';
//     } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.mail)) {
//       errors.mail = 'Invalid Email ';
//     }
//     if (!input.password) {
//         errors.password = 'Required password';
//       } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(input.password)) {
//         errors.password = 'The password must contain eight characters, an uppercase letter, and a number.';
//       }
//     return errors;
//   };

function Register() {
    const [input, setInput] = useState({
        fullname: '',
        dni: '',
        mail: '',
        password: '',
        confirmpassword: '',
        birth_date: ''
    });
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const [captchaValido, cambiarCaptchaValido] = useState(null);
    const [usuarioValido, cambiarUsuarioValido] = useState(false);
    const captcha = useRef(null);
    const [show, setShow] = useState(false);
    const [showpass2, setShowpass2] = useState(false);


    const handleShowHide = () => {
        setShow(!show);

    }
    const handleShowHide2 = () => {

        setShowpass2(!showpass2);
    }


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        // setErrors(validate({
        //     ...input,
        //     [e.target.value]: e.target.value
        // }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (/^(\d{2}\.{1}\d{3}\.\d{3})|(\d{2}\s{1}\d{3}\s\d{3})$/.test(input.dni)) { return swal("ID number must not contain points", "You clicked the button!", "error") };
        if (!/^[0-9]*$/.test(input.dni)) { return swal("ID must be a number", "You clicked the button!", "error") };
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.mail)) {
            return swal('Invalid Email', "You clicked the button!", "error");
        };
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(input.password)) { return swal("Password must contain eight characters, an uppercase letter, and a number.", "You clicked the button!", "error") };
        if (input.password !== input.confirmpassword) { return swal("Passwords don't match", "You clicked the button!", "error") }
        if (captcha.current.getValue()) {
            cambiarUsuarioValido(true);
            cambiarCaptchaValido(true);
            try {
                await fetch('http://localhost:3001/register',
                    {
                        method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(input),
                    })
                swal('Account created succesfully!', "You clicked the button!", "success");
            } catch (err) {
                swal('We could not create account. Please try again.', "You clicked the button!", "error");
            }
            history.push('/');
        } else {
            swal('Please accept the captcha', "You clicked the button!", "warning")
            cambiarUsuarioValido(false);
            cambiarCaptchaValido(false);
        }
    }



    function captchaChange() {
        if (captcha.current.getValue()) {
            cambiarCaptchaValido(true);
        }
    }


    return (
<div className={r.fondoregister}>
    <div className={r.centrarformulario}>
        <div className={r.formulario}>
            
            {!usuarioValido &&
                <div className={r.centrar}>
                    <h2 className={r.create}> Create your Account </h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {/* <p className={r.titles}>Full Name*</p> */}
                        <input type="text" placeholder="Full Name*" id="title" required="required" name='fullname' value={input.fullname} onChange={handleChange} className={r.inputregister} />
                        {/* <p className={r.titles}>Identification Number*</p> */}
                        <div >
                            {/* <p className={r.titles}>E-mail*</p> */}
                            <input className={r.inputregister} type="text" placeholder="E-mail*" required="required" name='mail' value={input.mail} onChange={handleChange} className={r.inputregister} />
                            {errors.mail && (
                                <p className=''>{errors.mail}</p>
                            )}
                        </div>
                        
                 
                        <div>
                            {/* <p className={r.titles}>Password*</p> */}
                            <input className={r.inputregister} type={show ? 'text' : 'password'} placeholder="Password*" required="required" name='password' id="password" value={input.password} onChange={handleChange} autoComplete="off" />
                                
                            {show ? (
                                <FontAwesomeIcon
                                    onClick={handleShowHide}
                                    icon={faEye}
                                    className={r.icon}
                                    id='show_hide' />
                            ) : (
                                <FontAwesomeIcon
                                    onClick={handleShowHide}
                                    icon={faEyeSlash}
                                    className={r.icon}
                                    id='show_hide' />
                            )}<p className={r.passwordWarning}>The password must contain eight characters, an uppercase letter, and a number</p>
                            {errors.password && (
                                <p className=''>{errors.password}</p>
                            )}
                        </div>
                        <div>
                            {/* <p className={r.titles}>Confirm Password*</p> */}
                            <input className={r.inputregister} type={showpass2 ? 'text' : 'password'} placeholder="Confirm Password*" required="required" name="confirmpassword" id="confirmpassword" value={input.confirmpassword} onChange={handleChange} autoComplete="off" />

                            {showpass2 ? (
                                <FontAwesomeIcon
                                    onClick={handleShowHide2}
                                    icon={faEye}
                                    className={r.icon}
                                    id='show_hide2' />
                            ) : (
                                <FontAwesomeIcon
                                    onClick={handleShowHide2}
                                    icon={faEyeSlash}
                                    className={r.icon}
                                    id='show_hide2' />
                            )
                            }
                            {errors.password && (
                                <p className=''>{errors.password}</p>
                            )}
                        </div>

                        {/* <label htmlFor="birthdate" className={r.titles}></label> */}
                        <input type="text" placeholder="Identification Number*" name='dni' required="required" value={input.dni} onChange={handleChange} className={r.inputregister} />
                        <input htmlFor="birthdate"  className={r.inputregister} type="date" placeholder="YYYY-MM-DD" data-date-split-input="true" name='birth_date' value={input.birth_date} onChange={handleChange} required='required' min="1900-01-01" max="2003-12-31" />

<div className={r.centerCaptchaRegister}>
                        <div className={r.recaptcha}>
                            <ReCAPTCHA
                                required
                                ref={captcha}
                                sitekey="6LfmRtcbAAAAAFHflEfIwe6cWeS89VI91LKYQ6sH"
                                onChange={captchaChange}
                            />
                        </div>
</div>

                        {/* {captchaValido === false && <div className="error-captcha">Please accept the captcha</div>} */}
                        <button type="submit" className={r.buttoncreate}>Create Account</button>


                    </form>
                </div>
            }
            <div className={r.descriptionDetails}>
                <div className={r.linksRegister}>
                    <Link to='/recoverpassword'>
                        <p >Forgot Password</p>
                    </Link>
                    |
                    <Link to='/faq'>
                        <p >Frecuently Asked Questions</p>
                    </Link>
                </div>
                <div className={r.loginFromRegister}>
                    <p className={r.doYouHave}>You already have an account?</p>
                    <Link to='/'>
                        <p >Log in</p>
                    </Link>
                </div>
            </div>
            </div>
        </div>
        <div className={r.contactus}>
                    
        <Link to='/faq'>
                        <p >FAQ</p>
                    </Link>
                        <p >Contact Us</p>
                        <p> +54 411154545444</p>
                        <p> wall-et@wmail.com</p>
                </div>
        </div>
        

    )
}

export default Register
