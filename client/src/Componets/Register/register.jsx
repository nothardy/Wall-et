import React, { useState } from 'react';
import './register.module.css';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';


function Register() {
    const [input, setInput] = useState({
        fullname: '',
        dni: '',
        mail: '',
        password: '',
        birth_data: ''
    });
    const history = useHistory();

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
        } catch (err) {
            console.log(err.message)
            alert('We could not create account. Please try again.');
        }

        setInput({
            fullname: '',
            dni: '',
            mail: '',
            password: '',
            birth_data: ''
        })
        history.push('/home');
    }


    return (
        <div className="formulario">
            <h2> Create your Account </h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>FullName</p>
                <input type="text" placeholder="FullName" id="FullName" required name='fullname' value={input.fullname} onChange={handleChange} />
                <p>Identification Number</p>
                <input type="text" placeholder="Identification Number" id="IdentificationNumber" name='dni' required value={input.dni} onChange={handleChange} />
                <p>E-mail</p>
                <input type="text" placeholder="E-mail" id="E-mail" required name='mail' value={input.mail} onChange={handleChange} />
                <p>Password</p>
                <input type="password" placeholder="Password" id="password" required name='password' value={input.password} onChange={handleChange} />
                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" id="password" required name='password' value={input.password} onChange={handleChange} />

                <div className="form-row hide-inputbtns">
                    <label for="birthdate">Date of Birth</label>
                    <input className="birthdate" type="date" placeholder="YYYY-MM-DD" data-date-split-input="true" name='birth_data' value={input.birth_data} onChange={handleChange} />
                </div>

                <div className="g-recaptcha" data-sitekey="6LcePAATAAAAAGPRWgx90814DTjgt5sXnNbV5WaW"></div>

                <Link to='/home'>
                    <button type="submit">Create User</button>
                </Link>
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
