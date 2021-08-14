import { React, useEffect, useState, useRef } from 'react'
import { getDateUser, updateUser } from '../../Redux/Actions/Home';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCopy } from '@fortawesome/free-solid-svg-icons';
//import { Link } from "react-router-dom";
import UpdatePassword from './UpdatePassword';
import { useHistory } from "react-router";
import u from './UpdateDetailAccount.module.css';
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

//1900-01-01 //2003-12-31
//VALIDACIONES
// const schema = yup.object().shape({
//     fullname: yup.string().required(),
//     email: yup.string().email().required(),
//     birth_date: yup.string().required(),
//     dni: yup.number().min(8).max(8).positive().integer().required(),
//     password: yup.string().min(8).max(16).required(),
//     confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
//   });


function UpdateDetailAccount({ close }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.homeReducer.User);
    const [updateinfo, setUpdateInfo] = useState({
        id: '',
        fullname: '',
        mail: '',
        dni: '',
        birth_date: '',
        ubication: '',
        photo: ''
    });

    var history = useHistory();
    const [errors, setErrors] = useState({});



    useEffect(() => {
        dispatch(getDateUser()); //Trae la DATA, no el date
    }, []);
    //}, [firstRender, dispatch]);

    useEffect(() => {
        setUpdateInfo(
            {
                ...updateinfo,
                id: user?.id || "",
                fullname: user?.user_data.fullname || "",
                mail: user?.account_data.mail || "",
                dni: user?.user_data.dni || "",
                birth_date: user?.user_data.birth || "",
                ubication: user?.user_data.ubicacion || "",
                photo: user?.account_data.photo || ""
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

        setUpdateInfo({
            ...updateinfo,
            id: "",
            fullname: "",
            mail: "",
            dni: "",
            birth_date: "",
            ubication: "",
            photo: ""
        });
        swal({
            title: "Info Edited",
            icon: "success",
            button: true,
        });
        dispatch(getDateUser())
        close()
        history.push("/account")
    }



    return (
        <div className={u.container}>

            {user ?

                <div>

                    <div >
                        {/* <img className="image" src={user.account_data.photo} width="350" height="150" alt="" /> */}
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div ><p>Full Name:</p>
                                {/* <p>{props.user.user_data.fullname}</p> */}
                            </div>
                            <input className='' type="text" onChange={handleInputChange} placeholder={user.user_data.fullname}
                                // {currentInfo? currentInfo.user_data? currentInfo.user_data.fullname : "" : ""}
                                value={updateinfo.fullname} name="fullname" />
                            <div ><p>E-mail:</p>
                                {/* <p>{props.user.account_data.mail}</p> */}
                            </div>
                            <input className='' type="text" onChange={handleInputChange} placeholder={user.account_data.mail}
                                value={updateinfo.mail} name="mail" />
                            {errors.mail && (
                                <p className=''>{errors.mail}</p>
                            )}
                            <div ><p>Identification Number:</p>
                                {/* <p>{props.user.user_data.dni}</p> */}
                            </div>
                            <input className='' type="text" onChange={handleInputChange} placeholder={user.user_data.dni}
                                value={updateinfo.dni} name="dni" minlength="8"
                            />


                            <div ><p>Birth Date:</p>
                                {/* <p>{props.user.user_data.birth}</p> */}
                            </div>
                            <input htmlFor="birthdate" className='' type="date" placeholder={user.user_data.birth} data-date-split-input="true" name='birth_date' value={updateinfo.birth_date} onChange={handleInputChange} min="1900-01-01" max="2003-12-31" />
                            <div ><p>Address:</p>
                                {/* <p>{props.user.user_data.ubicacion}</p> */}
                            </div>
                            <input className='' type="text" onChange={handleInputChange} placeholder={user.user_data.ubicacion}
                                value={updateinfo.ubication} name="ubication" />



                            <button className='' type="submit" value="" name=""> Update Profile </button>
                        </form>
                        <button onClick={() => close()}>X</button>
                    </div>



                </div> : <div> <h1>Loading</h1>
                    <img src="" alt="LoadingGif" className='loadingGif' />
                </div>


            }


        </div>
    )
}
export default UpdateDetailAccount

