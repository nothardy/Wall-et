import { React, useEffect, useState, useRef } from 'react'
import { getDateUser } from '../../Redux/Actions/Home';
import { useSelector, useDispatch } from 'react-redux';
import a from './DetailAccount.module.css';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import UpdatePassword from './UpdatePassword';

function UpdateDetailAccount() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.homeReducer.User);
    const [updateinfo, setUpdateInfo] = useState({
        id: '',
        fullname: '',
        mail: '',
        dni: '',
        birth: '',
        ubicacion: '',
    });


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
        

    }

    //COPY CVU
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        e.preventDefault();
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
    };
    //botton que abre el edit password
    let [editPassword, setEditPassword] = useState(false);
    const toggleEditPassword = () => { setEditPassword(editPassword = !editPassword) }
    return (
        <div >
            {user ?
                <div>
                    <div >
                        <img className="image" src={user.account_data.photo} width="350" height="150" alt="" />
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
                            <input htmlFor="birthdate" className='' type="date" placeholder={user.user_data.birth} data-date-split-input="true" name='birth' value={updateinfo.birth} onChange={handleInputChange} min="1900-01-01" max="2003-12-31" />
                            <div ><p>Address:</p>
                                {/* <p>{props.user.user_data.ubicacion}</p> */}
                            </div>
                            <input className='' type="text" onChange={handleInputChange} placeholder={user.user_data.ubicacion}
                                value={updateinfo.ubicacion} name="ubicacion" />


                            <div ><p>Cards:</p><p>{user.account_data.cards.length > 0 ? user.account_data.cards.length : "No cards available"}</p></div>
                            <button className='' type="submit" value="" name=""> Update Profile </button>
                        </form>
                    </div>
                    <div><label>CVU:</label>
                        {/* <p >{props.user.account_data.cvu } </p> */}
                    </div>

                    <form>
                        <input
                            ref={textAreaRef}
                            value={user.account_data.cvu}
                        />
                        {
                            /* Logical shortcut for only displaying the 
                               button if the copy command exists */
                            document.queryCommandSupported('copy') &&
                            <div>
                                <FontAwesomeIcon
                                    onClick={copyToClipboard}
                                    icon={faCopy}
                                    // className={a.icon}
                                    id='show_hide' />
                                {copySuccess}
                            </div>
                        }
                    </form>
                </div> : <div> <h1>Loading</h1>
                    <img src="" alt="LoadingGif" className='loadingGif' />
                </div>
            }
            <button className='' onClick={() => toggleEditPassword()}> Change Password </button>
            {editPassword ? <div> <UpdatePassword close={toggleEditPassword} /> </div> : null}

        </div>
    )
}
export default UpdateDetailAccount

