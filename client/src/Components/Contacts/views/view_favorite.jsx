/* eslint-disable */

import React, {useEffect, useState} from "react";
import style from "./view_favorites.module.css";
import { eraseFavoriteContact, favoriteContact } from "../../../Redux/Actions/Contacts_Action";
import { useDispatch, useSelector} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";

export const View = ({ fullname, date_transaction, mail, toggleTransactions, userId }) => {
  const [renderContactTransactions, setRenderContactTransactions] =
    React.useState(true);
    //const [user, setUser] = useState(false);
  const dispatch = useDispatch();
  //
  const favorites = useSelector(state => state.contactsReducer.favorites);
  //
  /* const [fav, setFav] = useState(true) */
  const [user, setUser] = useState(
   {
   userId,
   fullname,
   mail,
   date_transaction,}
   )
  
 /*  useEffect((e) => {

      dispatch(favoriteContact(e.target.value))    
  },[dispatch]) */



  const handleOnClick = () => {
    if (renderContactTransactions === true) toggleTransactions(mail);
    //setRenderContactTransactions(!renderContactTransactions);
  };


    const eraseFavorite = (e) => {
		if (user) {
			dispatch(eraseFavoriteContact(mail));
			dispatch(getFavorites());
			updateFavorites();
		}
		setUser(e.target.value);
	};

  return (
    <div>
      <div className={style.todo}>
        <div className={style.container}>
          <button className={style.button} onClick={handleOnClick}>
            <div className={style.infocontact}>
            <div>Name: {fullname}</div>
            <div>
              Last Transaction:
              {date_transaction && date_transaction.slice(5, 10)}
            </div>
            <div>Email: {mail}</div>
            </div>
          </button>
          <button className={style.buttonX}onClick={eraseFavorite}>
            <FontAwesomeIcon
                 
                  icon={faTrash}
                  className={style.iconFavTrash}	
            />
          </button>
        </div>
      </div>
    </div>
  );

	
};
export default View;
