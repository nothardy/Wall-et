import React, { useState } from 'react';
import { forgot } from '../../Redux/Actions/resetActions';
import { useDispatch } from "react-redux";
import ps from './password.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export function validate(user) {
    let errors = {};
    if (!user.mail) {
        errors.mail = ('Required E-mail')
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(user.mail)) {
        errors.mail = 'Invalid E-mail ';
    }
    return errors;
}

const RecoverPassword = () => {
    const [user, setUser] = useState({
        mail: '',
    });

    const [errors, setErrors] = useState({
        mail: ''
    });

    const dispatch = useDispatch();

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...user,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgot(user.mail));
    }

    return (
        <div>
        <div className={ps.conteinercito}>
            <div className={ps.wrapper}>
                <h2 className={ps.title}>Forgot Password?</h2>
                <form className={ps.form} onSubmit={(e) => handleSubmit(e)}>
                    <div className={ps.field}>E-mail</div>
                    <input
                        className={ps.input}
                        autoComplete='off'
                        id='mail'
                        type='text'
                        required='required'
                        name='mail'
                        value={user.mail}
                        placeholder="example@mail.com"
                        onChange={handleChange}
                    />
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className={ps.icon}
                        id='envelope'
                    />
                    {errors.mail && (
                        <p className={ps.error}>{errors.mail}</p>
                    )}

                    <div>
                        <button className={ps.button} type='submit'>Submit</button>
                    </div>
                    <div className={ps.buttonBack}>
                    <Link to="/">
                        <button className={ps.button}>Back</button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    <div>    

<div className={ps.margeninferior}>
      <div className={ps.contactus}>
        <div className={ps.faqLanding}>
        <Link to="/faq">
            <p>FAQ</p>
          </Link>
          </div>
        <p>
          Contact Us <br></br>+54 411154545444 <br></br>
          wall-et@wmail.com
        </p>
        </div>
      <footer className={ps.footer}>
        {" "}
        <p> Copyright© 2021 Wall-et</p>
      </footer>
      </div>
      </div>
      </div>
      
    )

   
   
}

export default RecoverPassword;