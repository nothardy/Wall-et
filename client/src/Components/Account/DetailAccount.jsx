import { React, useEffect, useState, useRef } from 'react'
import { getDateUser } from '../../Redux/Actions/Home';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import a from './DetailAccount.module.css';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import UpdateDetailAccount from './UpdateDetailAccount';
import UpdatePassword from './UpdatePassword';
import axios from 'axios';
import AddCard from './AddCard';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import UploadPhoto from './UploadPhoto';


function DetailAccount() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.homeReducer.User);
    const [updateinfo, setUpdateInfo] = useState({
        id: '',
        fullname: '',
        mail: '',
        dni: '',
        birth_date: '',
        ubication: '',
        // cards:''
    });


    useEffect(() => {
        dispatch(getDateUser()); //Trae la DATA, no el date
    }, []);
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
                // cards: user?.account_data.cards || ""
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
    const toggleEditProfile = () => { setEditProfile(editProfile = !editProfile) }
    //botton que abre el edit password
    let [editPassword, setEditPassword] = useState(false);
    const toggleEditPassword = () => { setEditPassword(editPassword = !editPassword) }

    //botton que agrega cards
    let [addCard, setAddCard] = useState(false);
    const toggleAddCard = () => { setAddCard(addCard = !addCard) }

     //botton que change photo
     let [changePhoto, setChangePhoto] = useState(false);
     const toggleChangePhoto = () => { setChangePhoto(changePhoto = !changePhoto) }
 

    //delete account
    function deleteUser(id) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover your Wall-et account!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios
                        .delete(`http://localhost:3001/deleteUser/${id}`)//o delete??
                        .then((response) => console.log(response.data))
                        .then((logout) => history.push('/logout'))
                        .catch((error) => console.log(error));
                    swal("Your Wall-et account was deleted", { icon: "success" });
                } else {
                    swal("Your Wall-et account is safe!");
                }
            });
    }

    //delete card
    function deleteCard(id) {
        axios
            .delete(`http://localhost:3001/deleteCard/${id}`)
            .then((response) => console.log(response.data))
            .then(async () => {
                await dispatch(getDateUser())
            })
            .then(logout => { })
            .catch((error) => console.log(error));
        swal("The Card was deleted", { icon: "success" });
    }
    // var regex = new Regex("^[0-9]+$");
    return (

        <div className={a.container} >
            {user ?
                <div>
                    <div >
                        <img className="image" src={user.account_data.photo} alt="" />
                        <button className='' onClick={() => toggleChangePhoto()}> Change Photo </button>
                    {changePhoto ? <div> <UploadPhoto close={toggleChangePhoto} /> </div> : null}
                        <div ><p>Full Name:</p><p>{user.user_data.fullname}</p></div>
                        <div ><p>E-mail:</p><p>{user.account_data.mail}</p></div>
                        <div ><p>Identification Number:</p><p>{user.user_data.dni}</p></div>
                        <div ><p>Birth Date:</p><p>{user.user_data.birth}</p></div>
                        <div ><p>Address:</p><p>{user.user_data.ubicacion}</p></div>
                        <div ><p>Cards: </p>{user.account_data.cards.length > 0 ? user.account_data.cards.map(card =>
                            <div key={card.id}>
                                {/* <Cards
                                    name={card.card_name}
                                    number={card.card_num.substring(0, card.card_num.length-4).replace(/[0-9]/g, "") + card.card_num.substring(card.card_num.length - 4, card.card_num.length)}
                                /> */}
                                <ul><li>Card ending in {card.card_num.substring(card.card_num.length - 4, card.card_num.length) + " " + card.card_name}</li>
                                </ul>
                                <button value={card.id} onClick={() => deleteCard(card.id)}>Delete Card</button>
                            </div>)


                            : "No cards available"}
                        </div>
                        <button className='' onClick={() => toggleAddCard()}> Add Card </button>
                        {addCard ? <div> <AddCard close={toggleAddCard} /> </div> : null}
                    </div>
                    <div><label>CVU:</label>
                        <form>
                            <input
                                ref={textAreaRef}
                                value={user.account_data.cvu} />
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
                        <button className='' onClick={() => toggleEditProfile()}> Edit Profile </button>
                        {editProfile ? <div> <UpdateDetailAccount close={toggleEditProfile} /> </div> : null}
                    </div>
                    <button className='' onClick={() => toggleEditPassword()}> Change Password </button>
                    {editPassword ? <div> <UpdatePassword close={toggleEditPassword} /> </div> : null}
                    <div>
                        {/* <Link to='/logout'> */}
                        <button value={user.id} onClick={() => deleteUser(user.id)}>Delete Account</button>
                        {/* </Link> */}
                    </div>
                </div> : <div> <h1>Loading</h1>
                    <img src="https://media.giphy.com/media/cjnnH0h3cfBTORaUnp/giphy.gif" alt="LoadingGif" className='loadingGif' />
                </div>
            }

            <Link to='/recoverpassword'>
                <p >Forgot Password?</p>
            </Link>

        </div>
    )
}
export default DetailAccount

