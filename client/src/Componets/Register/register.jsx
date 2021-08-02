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




            <button onclick="">Create User</button>
        </form>
        </div>
    )
}

export default register
