import { React, useEffect, useState, useRef } from 'react'
import { getDateUser } from '../../Redux/Actions/Home';
import { useSelector, useDispatch } from 'react-redux';
import a from './DetailAccount.module.css';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function DetailAccount() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.homeReducer.User); 
    let [firstRender, setFirstRender] = useState(true);
    const [updateinfo, setUpdateInfo] = useState({
        fullname: '',
        mail: '',
        dni: '',
        birth: '',
        ubicacion:'',

        // fullname: props.user.user_data.fullname,
        // mail: props.user.account_data.mail,
        // dni: props.user.user_data.dni,
        // birth: props.user.user_data.birth,
        // ubicacion: props.user.user_data.ubicacion,

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
        if (firstRender === true) {
            dispatch(getDateUser());
            setFirstRender(firstRender = !firstRender)
        }
    }, [firstRender, dispatch]);


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
                            <input htmlFor="birthdate" className='' type="date" placeholder={user.user_data.birth} data-date-split-input="true" name='birth' value={updateinfo.birth} onChange={handleInputChange}  min="1900-01-01" max="2003-12-31" />
                            <div ><p>Address:</p>
                            {/* <p>{props.user.user_data.ubicacion}</p> */}
                            </div>
                            <input className='' type="text" onChange={handleInputChange} placeholder={user.user_data.ubicacion}
                                value={updateinfo.ubicacion} name="ubicacion" />
                            
                            <div ><p> New Password:</p></div>
                            <div>
                            <input className='' type={show ? 'text' : 'password'} placeholder="Password*"  name='password' id="password" value={updateinfo.password} onChange={handleInputChange} autoComplete="off" />
                                
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
                            <input className='' type={showpass2 ? 'text' : 'password'} placeholder="Confirm Password*"  name="confirmpassword" id="confirmpassword" value={updateinfo.confirmpassword} onChange={handleInputChange} autoComplete="off" />

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
                        <div ><p>Cards:</p><p>{user.account_data.cards.length>0? user.account_data.cards.length : "No cards available" }</p></div>
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
          <button onClick={copyToClipboard}>Copy</button> 
          {copySuccess}
        </div>
      }
      </form>  
                
                </div> : <div> <h1>Loading</h1>
                        <img src="" alt="LoadingGif" className='loadingGif' />
            </div>
            }


            <Link to='/recoverpassword'>
                        <p >Forgot Password?</p>
                    </Link>

                    
                </div>
        )
}
export default DetailAccount

