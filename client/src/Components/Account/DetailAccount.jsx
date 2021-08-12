import { React, useEffect, useState, useRef } from 'react'
import { getDateUser } from '../../Redux/Actions/Home';
import { useSelector, useDispatch } from 'react-redux';
//import a from './DetailAccount.module.css';
//import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCopy } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import UpdateDetailAccount from './UpdateDetailAccount';

function DetailAccount() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.homeReducer.User);
    const [updateinfo, setUpdateInfo] = useState({
        id:'',
        fullname: '',
        mail: '',
        dni: '',
        birth_date: '',
        ubication: '',
    });


    useEffect(() => {
            dispatch(getDateUser()); //Trae la DATA, no el date
    },[]);
    // }, [firstRender, dispatch]);

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
            }
        )
    }, [user])



    //COPY CVU
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        e.preventDefault();
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };
    //botton que abre el edit
    let [editProfile, setEditProfile] = useState(false);
    const toggleEditProfile = () =>{ setEditProfile(editProfile = !editProfile) }

    return (
        <div >
            {user ?
                <div>
                    <div >
                        {/* <img className="image" src={user.account_data.photo} width="350" height="150" alt="" /> */}
                            <div ><p>Full Name:</p><p>{user.user_data.fullname}</p></div>
                            <div ><p>E-mail:</p><p>{user.account_data.mail}</p></div>
                            <div ><p>Identification Number:</p><p>{user.user_data.dni}</p></div>
                            <div ><p>Birth Date:</p><p>{user.user_data.birth}</p></div>
                            <div ><p>Address:</p><p>{user.user_data.ubicacion}</p></div>
                                                        
                            <div ><p>Cards:</p><p>{user.account_data.cards.length > 0 ? user.account_data.cards.length : "No cards available"}</p></div>
                            
                            </div>
                    <div><label>CVU:</label>
                    <form>
                        <input
                            ref={textAreaRef}
                            value={user.account_data.cvu}
                        />
                        {
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
                    <button className='' onClick={ () => toggleEditProfile()}> Edit Profile </button>
                            { editProfile? <div> <UpdateDetailAccount close={toggleEditProfile}/> </div>:null }
                    </div>
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

