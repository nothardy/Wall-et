import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { help } from '../../Redux/Actions/helpActions';
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import s from './ContactUs.module.css';

const ContactUs = () => {

	const [ user, setUser ] = useState({
		mail: '',
		subject: '',
		message: '',
	});

	const { register, handleSubmit, formState : { errors } } = useForm();

	const dispatch = useDispatch(); 

	function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }


	const onSubmit = () => {
		dispatch(help(user));
	}

	return (
		<div className={s.body}>
			<div className={s.wrapper}>
				<h3 className={s.title}>
					We are here to answer any questions about 'Wall-et' you may have.
                    <br />
                    Please use the Contact Form below to get in touch.
				</h3>
			
				    <form className={s.form} onSubmit={handleSubmit(onSubmit)} onChange={handleChange}> 
					    <div className={s.field}>E-mail </div>
					<input
						className={s.input}
                        autoComplete='off'
						type='text'
                        placeholder='example@mail.com'
                        {...register('mail', { 
                        required:'E-mail is required', 
                        })}
					/>
					<FontAwesomeIcon
                    icon={faEnvelope}
                    className={s.icon}
                    id='envelope'
                    />
                    {errors.mail && <p>{errors.mail.message}</p>}
					    <div className={s.field}>Subject </div>
					<input
						className={s.input}
                        autoComplete='off'
						type='text'
						{...register('subject', { 
                        required:'Too Short', 
                        minLength: 3 })}
					/>
                    {errors.subject && <p>{errors.subject.message}</p>}
					    <div className={s.field}>Message </div>
					<textarea
						className={s.textarea}
						{...register('message', {
							required: 'The message should have between 4 and 150 characters',
							minLength: 4,
							maxLength: 150,
						})}
					/>
                    {errors.message && <p>{errors.message.message}</p>}
                    <br />
					<button className={s.button} type='submit'>Send</button>
				</form>
			</div>
		</div>
	);
};

export default ContactUs;