import React, { useState } from 'react';
import { forgot } from '../../Redux/Actions/resetActions';
import { useDispatch } from "react-redux";
import s from './password.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

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
        <div className={s.body}>
            <div className={s.wrapper}>
                <h2 className={s.title}>Forgot Password?</h2>
                <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
                    <div className={s.field}>E-mail</div>
                    <input
                        className={s.input}
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
                        className={s.icon}
                        id='envelope'
                    />
                    {errors.mail && (
                        <p className={s.error}>{errors.mail}</p>
                    )}

                    <div>
                        <button className={s.button} type='submit'>Submit</button>
                    </div>
                    <Link to="/">
                        <button className={s.button}>Back</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default RecoverPassword;