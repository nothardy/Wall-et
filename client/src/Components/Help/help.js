import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { help } from '../../Redux/Actions/helpActions';
import { useDispatch } from "react-redux";

const Help = () => {

	const [ user, setUser ] = useState({
		mail: '',
		mailSubject: '',
		mailBody: '',
	});

	const { register, handleSubmit, formState : { errors } } = useForm();

	const dispatch = useDispatch(); 

	const onSubmit = () => {
		dispatch(help(user));
	}

	return (
		<div>
			<div>
				<h3>
					We are here to answer any questions about 'Wall-et' you may have.
                    <br />
                    Please use the Contact Form below to get in touch.
				</h3>
				    <form onSubmit={handleSubmit(onSubmit)}> 
					    <h5>E-mail </h5>
					<input
                        autoComplete='off'
						type='text'
                        placeholder='example@mail.com'
                        {...register('mail', { 
                        required:'E-mail is required', 
                        })}
					/>
                    {errors.mail && <p>{errors.mail.message}</p>}
					    <h5>Subject </h5>
					<input
                        autoComplete='off'
						type='text'
						{...register('subject', { 
                        required:'Too Short', 
                        minLength: 3 })}
					/>
                    {errors.subject && <p>{errors.subject.message}</p>}
					    <h5>Message </h5>
					<textarea
						{...register('message', {
							required: 'The message should have between 4 and 150 characters',
							minLength: 4,
							maxLength: 150,
						})}
					/>
                    {errors.message && <p>{errors.message.message}</p>}
                    <br />
					<button type='submit'>Send</button>
				</form>
			</div>
		</div>
	);
};

export default Help;