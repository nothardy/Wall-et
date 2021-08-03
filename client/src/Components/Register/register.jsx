import React, { useState, useRef } from 'react';
import './register.module.css';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";


function Register() {
    const [input, setInput] = useState({
        fullname: '',
        dni: '',
        mail: '',
        password: '',
        birth_data: ''
    });
    const history = useHistory();
    const captcha= useRef(null);

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
                
        try {
            await fetch('http://localhost:3001/register',
                {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(input),
                })
            alert('Account created succesfully!');
            setInput({
                fullname: '',
                dni: '',
                mail: '',
                password: '',
                birth_data: ''
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
    }
}


    return (
        <div className="formulario">
            <h2> Create your Account </h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>FullName</p>
                <input type="text" placeholder="FullName" id="title" required="required" name='fullname' value={input.fullname} onChange={handleChange} />
                <p>Identification Number</p>
                <input type="text" placeholder="Identification Number"  name='dni' required="required" value={input.dni} onChange={handleChange} />
                <p>E-mail</p>
                <input type="text" placeholder="E-mail"  required="required" name='mail' value={input.mail} onChange={handleChange} />
                <p>Password</p>
                <input type="password" placeholder="Password" required="required" name='password' value={input.password} onChange={handleChange} />
                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password"  required="required" name="password2" id="password2" value={input.password} onChange={handleChange} />

                <div className="form-row hide-inputbtns">
                    <label for="birthdate">Date of Birth</label>
                    <input className="birthdate" type="date" placeholder="YYYY-MM-DD" data-date-split-input="true" name='birth_data' value={input.birth_data} onChange={handleChange} />
                </div>

                <div className="recaptcha">
                <ReCAPTCHA
                    ref={captcha}
                    sitekey="6LfmRtcbAAAAAFHflEfIwe6cWeS89VI91LKYQ6sH"
                    onChange={onChange}
                        />
                </div>
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
