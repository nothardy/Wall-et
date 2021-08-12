import { React, useEffect, useState } from 'react'
import { getDateUser } from '../../Redux/Actions/Home';
import { useSelector, useDispatch } from 'react-redux';
import a from './DetailAccount.module.css';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function UpdatePassword() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.homeReducer.User);
    const [updateinfo, setUpdateInfo] = useState({
        id:'',
        fullname: '',
        mail: '',
        dni: '',
        birth: '',
        ubicacion: '',
    });

    const [show, setShow] = useState(false);
    const [showpass2, setShowpass2] = useState(false);
    const [errors, setErrors] = useState({});


    const handleShowHide = () => {
        setShow(!show);

    }
    const handleShowHide2 = () => {
        setShowpass2(!showpass2);
    }

    useEffect(() => {
            dispatch(getDateUser()); //Trae la DATA, no el date
    },[]);
    //}, [firstRender, dispatch]);

    useEffect(() => {
        setUpdateInfo(
            {
                ...updateinfo, 
                id: user?.id || "",
                fullname: user?.user_data.fullname || "",
                mail: user?.account_data.mail || "",
                dni: user?.user_data.dni || "",
                birth: user?.user_data.birth || "",
                ubicacion: user?.user_data.ubicacion || "",
            }
        )
    }, [user])

    function handleInputChange(e) {
        setUpdateInfo({
            ...updateinfo,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (/^(\d{2}\.{1}\d{3}\.\d{3})|(\d{2}\s{1}\d{3}\s\d{3})$/.test(updateinfo.dni)) { return swal("ID number must not contain points", "You clicked the button!", "error") };
        if (!/^[0-9]*$/.test(updateinfo.dni)) { return swal("ID must be a number", "You clicked the button!", "error") };
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(updateinfo.mail)) {
            return swal('Invalid Email', "You clicked the button!", "error");
        };
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(updateinfo.password)) { return swal("Password must contain eight characters, an uppercase letter, and a number.", "You clicked the button!", "error") };
        if (updateinfo.password !== updateinfo.confirmpassword) { return swal("Passwords don't match", "You clicked the button!", "error") }
    }

   


    return (
        <div >
            {user ?
                <div>
                    <div >
                    
                        <form onSubmit={(e) => handleSubmit(e)}>
                            

                            <div ><p> New Password:</p><p></p></div>
                            <div>
                                <input className='' type={show ? 'text' : 'password'} placeholder="Password*" name='password' id="password" value={updateinfo.password} onChange={handleInputChange} autoComplete="off" />

                                {show ? (
                                    <FontAwesomeIcon
                                        onClick={handleShowHide}
                                        icon={faEye}
                                        className={a.icon}
                                        id='show_hide' />
                                ) : (
                                    <FontAwesomeIcon
                                        onClick={handleShowHide}
                                        icon={faEyeSlash}
                                        className={a.icon}
                                        id='show_hide' />
                                )}
                                {errors.password && (
                                    <p className=''>{errors.password}</p>
                                )}<p className={a.passwordWarning}>The password must contain eight characters, an uppercase letter, and a number</p>

                            </div>
                            <div>
                                <p className=''>Confirm Password*</p>
                                <input className='' type={showpass2 ? 'text' : 'password'} placeholder="Confirm Password*" name="confirmpassword" id="confirmpassword" value={updateinfo.confirmpassword} onChange={handleInputChange} autoComplete="off" />

                                {showpass2 ? (
                                    <FontAwesomeIcon
                                        onClick={handleShowHide2}
                                        icon={faEye}
                                        className={a.icon}
                                        id='show_hide2' />
                                ) : (
                                    <FontAwesomeIcon
                                        onClick={handleShowHide2}
                                        icon={faEyeSlash}
                                        className={a.icon}
                                        id='show_hide2' />
                                )
                                }{errors.password && (
                                    <p className=''>{errors.password}</p>
                                )}

                            </div>
                            
                            <button className='' type="submit" value="" name=""> Change Password </button>
                        </form>
                    </div>

                </div> : <div> <h1>Loading</h1>
                    <img src="" alt="LoadingGif" className='loadingGif' />
                </div>
            }
           
        </div>
    )
}
export default UpdatePassword;
