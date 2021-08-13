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




    

function UpdateDetailAccount({close}) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.homeReducer.User);
    const [updateinfo, setUpdateInfo] = useState({
        id: '',
        fullname: '',
        mail: '',
        dni: '',
        birth_date: '',
        ubication: '',
        photo:''
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
                photo:user?.account_data.photo || ""
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
        }
        else{
        
      
        dispatch(updateUser(updateinfo));

        setUpdateInfo({...updateinfo,
            id:  "",
            fullname:  "",
            mail:  "",
            dni:  "",
            birth_date: "",
            ubication:  "",
            photo: ""});
        swal({
        title: "Info Edited",
        icon: "success",
        button: true,
        });
        dispatch(getDateUser())
        history.push("/mywallet")
    }        
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
                                value={updateinfo.dni} name="dni" />


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
                        <button onClick={()=>close()}>X</button>
                    </div>
                    
                   
                   
                </div> : <div> <h1>Loading</h1>
                    <img src="" alt="LoadingGif" className='loadingGif' />
                </div>
                
                
            }
           
           
        </div>
    )
}
export default UpdateDetailAccount
