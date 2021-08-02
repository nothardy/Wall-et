import React from 'react';
import './register.module.css';


function register() {
    return (
        <div class="formulario">
            <h2> Create your Account </h2>
        <form >
        <p>FullName</p>
            <input type="text" placeholder="FullName"  id="FullName" required value='' onChange= ''/>
        <p>Identification Number</p>
            <input type="text" placeholder="Identification Number" id="IdentificationNumber" required value='' onChange= ''/>
        <p>E-mail</p>
            <input type="text" placeholder="E-mail"  id="E-mail" required value='' onChange= ''/>
        <p>Password</p>
            <input type="password" placeholder="Password" id="password" required  value='' onChange= ''/>
        <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" id="password" required value='' onChange= ''/>
            
            <div class="form-row hide-inputbtns">
        <label for="birthdate">Date of Birth</label>
        <input class="birthdate" type="date" placeholder="YYYY-MM-DD" data-date-split-input="true"  value='' onChange= ''/>
        </div>

        <div class="g-recaptcha" data-sitekey="6LcePAATAAAAAGPRWgx90814DTjgt5sXnNbV5WaW"></div>

        <Link to='/LandingPage'> 
            <button onclick="">Create User</button>
            </Link>
        </form>

        <Link to='/forgotpassword'>
            <p className='descriptionDetails'>Forgot Password</p>
        </Link>
        <Link to='/FAQ'>
            <p className='descriptionDetails'>Frecuently Asked Questions</p>
        </Link>
        </div>
    )
}

export default register
