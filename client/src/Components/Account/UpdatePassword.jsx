import { React, useEffect, useState } from 'react'
import { getDateUser, updateUser } from '../../Redux/Actions/Home';
import { useSelector, useDispatch } from 'react-redux';
import p from './UpdatePassword.module.css';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
//import { Link } from "react-router-dom";


//VALIDACIONES
// const schema = yup.object().shape({
//     password: yup.string().min(8).max(16).required(),
//     confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
//   });



function UpdatePassword({close}) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.homeReducer.User);
    const [updateinfo, setUpdateInfo] = useState({
        id:'',
       password:'',
       confirmpassword:''
    });

    const [show, setShow] = useState(false);
    const [showpass2, setShowpass2] = useState(false);
    const history = useHistory();
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
                password:  '' ,
                confirmpassword: ''
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
        dispatch(updateUser(updateinfo));

        setUpdateInfo({...updateinfo,
            id:  "",
            password:'',
            confirmpassword:''
        })
        swal({
        title: "Info Edited",
        icon: "success",
        button: true,
        });
        dispatch(getDateUser())
         close()
        history.push("/logout")
    }

    return (
        <div className={p.container}>
            {user ?
                <div>
                    <div >
                    
                        <form onSubmit={(e) => handleSubmit(e)}>
                            

                            <div ><p> New Password:</p><p></p></div>
                            <div>
                                <input className='' type={show ? 'text' : 'password'} placeholder="Enter your New Password*" name='password' id="password" value={updateinfo.password} onChange={handleInputChange} autoComplete="off" />

                                {show ? (
                                    <FontAwesomeIcon
                                        onClick={handleShowHide}
                                        icon={faEye}
                                        className={p.icon}
                                        id='show_hide' />
                                ) : (
                                    <FontAwesomeIcon
                                        onClick={handleShowHide}
                                        icon={faEyeSlash}
                                        className={p.icon}
                                        id='show_hide' />
                                )}
                                {errors.password && (
                                    <p className=''>{errors.password}</p>
                                )}<p className={p.passwordWarning}>The password must contain eight characters, an uppercase letter, and a number</p>

                            </div>
                            <div>
                                <p className=''>Confirm Password*</p>
                                <input className='' type={showpass2 ? 'text' : 'password'} placeholder="Confirm Password*" name="confirmpassword" id="confirmpassword" value={updateinfo.confirmpassword} onChange={handleInputChange} autoComplete="off" />

                                {showpass2 ? (
                                    <FontAwesomeIcon
                                        onClick={handleShowHide2}
                                        icon={faEye}
                                        className={p.icon}
                                        id='show_hide2' />
                                ) : (
                                    <FontAwesomeIcon
                                        onClick={handleShowHide2}
                                        icon={faEyeSlash}
                                        className={p.icon}
                                        id='show_hide2' />
                                )
                                }{errors.password && (
                                    <p className=''>{errors.password}</p>
                                )}

                            </div>
                            
                            <button className='' type="submit" value="" name=""> Change Password </button>
                        </form>
                        <button  onClick={()=>close()}>X</button>
                    </div>

                </div> : <div> <h1>Loading</h1>
                    <img src="" alt="LoadingGif" className='loadingGif' />
                </div>
            }
           
        </div>
    )
}
export default UpdatePassword;
