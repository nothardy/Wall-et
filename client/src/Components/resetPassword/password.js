import React, { useState } from 'react';
import { forgot } from '../../../Redux/Actions/resetActions';
import { useDispatch } from "react-redux";

export function validate(user) {
    let errors = {};
    if (!user.mail) {
      errors.mail = ('Required Email')
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(user.mail)) {
      errors.mail = 'Invalid Email ';
    }
}

const ForgotPassword = () => {
    const [ user, setUser ] = useState({
        mail:'',
    });

const [errors, setErrors] = useState({

});

const dispatch = useDispatch();

function handleChange(e) {
    setUser({
        ...user,
        [e.target.name]: e.target.value
        });
<<<<<<< HEAD:client/src/Components/resetPassword/resetPassword/password.js
 //setErrors(validate({
  //    ...user,
   //   [e.target.name]: e.target.value
     //   }));
=======
    console.log(user)
    //setErrors(validate({
    //    ...user,
    //    [e.target.value]: e.target.value
    //    }));
>>>>>>> 37bde7c92c3d1d6ee9a30f173c3972989bb9e90c:client/src/Components/resetPassword/password.js
}

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgot(user.mail));
}
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Forgot Password?</h2>
                <div>
                    <input
                        autoComplete='off'
                        id='mail'
                        type='text'
                        required='required'
                        name='mail'
                        value={user.mail}
                        placeholder="example@mail.com"
                        onChange={handleChange}
                        />
                        {errors.mail && (
                    <p>{errors.mail}</p>
                )}
                </div>
                            <div>
                                <button type='submit'>Submit</button>
                            </div>
        </form>  
    )
}

export default ForgotPassword;