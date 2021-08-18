/* eslint-disable */
import { React, useEffect, useState, useRef } from "react";
import { getDateUser } from "../../Redux/Actions/Home";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import a from "./DetailAccount.module.css";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import UpdateDetailAccount from "./UpdateDetailAccount";
import UpdatePassword from "./UpdatePassword";
import axios from "axios";
import AddCard from "./AddCard";
import "react-credit-cards/es/styles-compiled.css";
import UploadPhoto from "./UploadPhoto";

function DetailAccount() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.homeReducer.User);
  const [updateinfo, setUpdateInfo] = useState({
    id: "",
    fullname: "",
    mail: "",
    dni: "",
    birth_date: "",
    ubication: "",
    // cards:''
  });

  useEffect(() => {
    dispatch(getDateUser()); //Trae la DATA, no el date
  }, [dispatch]);
  // }, [firstRender, dispatch]);

  useEffect(() => {
    setUpdateInfo({
      ...updateinfo,
      id: user?.id || "",
      fullname: user?.user_data.fullname || "",
      mail: user?.account_data.mail || "",
      dni: user?.user_data.dni || "",
      birth_date: user?.user_data.birth || "",
      ubication: user?.user_data.ubicacion || "",
      // cards: user?.account_data.cards || ""
    });
  }, [user]);

  //COPY CVU
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    e.preventDefault();
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  }
  //botton que abre el edit
  let [editProfile, setEditProfile] = useState(false);
  const toggleEditProfile = () => {
    setEditProfile((editProfile = !editProfile));
  };
  //botton que abre el edit password
  let [editPassword, setEditPassword] = useState(false);
  const toggleEditPassword = () => {
    setEditPassword((editPassword = !editPassword));
  };

  //botton que agrega cards
  let [addCard, setAddCard] = useState(false);
  const toggleAddCard = () => {
    setAddCard((addCard = !addCard));
  };

  //botton que change photo
  let [changePhoto, setChangePhoto] = useState(false);
  const toggleChangePhoto = () => {
    setChangePhoto((changePhoto = !changePhoto));
  };

  //delete account
  function deleteUser(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover your Wall-et account!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`/deleteUser/${id}`) //o delete??
          .then((response) => console.log(response.data))
          .then((logout) => history.push("/logout"))
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
      .delete(`/deleteCard/${id}`)
      .then((response) => console.log(response.data))
      .then(async () => {
        await dispatch(getDateUser());
      })
      .then((logout) => { })
      .catch((error) => console.log(error));
    swal("The Card was deleted", { icon: "success" });
  }
  // var regex = new Regex("^[0-9]+$");

  return (
    <div className={a.containerProfile}>
      {user ? (
        <div className={a.containerDetailsProfile}>
          <div >
            <div className={a.seccionphoto}>
              <img className={a.image} src={`${user.account_data.photo}`} alt="" />
              <button className={a.buttonChangePhoto} onClick={() => toggleChangePhoto()} >
               
                Change Photo{" "}
              </button>
              {changePhoto ? (
                <div>
                  {" "}
                  <UploadPhoto close={toggleChangePhoto} />{" "}
                </div>
              ) : null}
            </div>
            <div className={a.datosAndCards}>
              <div className={a.secciondatos}>
                <div className={a.datospersonales}>
                  <p>Full Name:</p>
                  <p>{user.user_data.fullname}</p>
                </div>
                <div className={a.datospersonales}>
                  <p>E-mail:</p>
                  <p>{user.account_data.mail}</p>
                </div>
                <div className={a.datospersonales}>
                  <p>Identification Number:</p>
                  <p>{user.user_data.dni}</p>
                </div>
                <div className={a.datospersonales}>
                  <p >Birth Date:</p>
                  <p>{user.user_data.birth}</p>
                </div>
                <div className={a.datospersonales} >
                  <p>Address:</p>
                  <p>{user.user_data.ubicacion? user.user_data.ubicacion:"Not Available"}</p>
                </div>
                <div className={a.seccionCVU}>
                  <p>CVU:</p>
                  <form className={a.inputCVUCopy}>
                    <div className={a.inputAndIcon}>
                      <input ref={textAreaRef} value={user.account_data.cvu} className={a.inputCVU} />
                      {document.queryCommandSupported("copy") && (
                        <div>
                          <FontAwesomeIcon
                            onClick={copyToClipboard}
                            icon={faCopy}
                            // className={a.icon}
                            id="show_hide"
                            />
                          {copySuccess}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
                            <div className={a.buttonsCenteredAccount}>
                              <div>
                                <button className={a.buttoneditProfile} onClick={() => toggleEditProfile()}>
                                  {" "}
                                 {" "} Edit Profile 
                                </button>
                                {editProfile ? (
                                  <div>
                                    {" "}
                                    <UpdateDetailAccount close={toggleEditProfile} />{" "}
                                  </div>
                                ) : null}
                              </div>
                              <button className={a.buttoneditPassword} onClick={() => toggleEditPassword()}>
                                {" "}
                                 Change Password{" "}
                              </button>
                              {editPassword ? (
                                <div>
                                  {" "}
                                  <UpdatePassword close={toggleEditPassword} />{" "}
                                </div>
                              ) : null}
                              <div>
                                {/* <Link to='/logout'> */}
                                <button value={user.id} onClick={() => deleteUser(user.id)} className={a.buttonsDeleteA}>
                                  Delete Account
                                </button>
                                {/* </Link> */}
                                <Link to="/recoverpassword">
                                  <p className={a.forgotPasswordA}>Forgot Password?</p>
                                </Link>
                              </div>
                            </div>
              </div>
              <div className={a.seccioncardAndButtons}>
                <div className={a.seccionCard}>
                  <p>Cards: </p>
                  {user.account_data.cards.length > 0
                    ? user.account_data.cards.map((card) => (
                      <div key={card.id} className={a.singlecardContainer}>
                        {/* <Cards
                                    name={card.card_name}
                                    number={card.card_num.substring(0, card.card_num.length-4).replace(/[0-9]/g, "") + card.card_num.substring(card.card_num.length - 4, card.card_num.length)}
                                  /> */}
                        <ul>
                          <li>
                            Card ending in{" "}
                            {card.card_num.substring(
                              card.card_num.length - 4,
                              card.card_num.length
                              ) +
                              " " +
                              card.card_name}
                          </li>
                        </ul>
                        <button
                          value={card.id}
                          onClick={() => deleteCard(card.id)}
                          className={a.buttonsDeleteA}
                          >
                          Delete Card
                        </button>
                      </div>
                    ))
                    : "No cards available"}

                  <button className={a.buttonAddCard} onClick={() => toggleAddCard()}> 
                   Add Card
                  </button>
                  {addCard ? (
                    <div>
                      {" "}
                      <AddCard close={toggleAddCard} />{" "}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <h1>Loading</h1>
          <img
            src="https://media.giphy.com/media/cjnnH0h3cfBTORaUnp/giphy.gif"
            alt="LoadingGif"
            className="loadingGif"
          />
        </div>
      )}

    </div>
  );
}
export default DetailAccount;
