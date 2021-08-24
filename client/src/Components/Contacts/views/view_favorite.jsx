/* eslint-disable */
import React, {useEffect, useState} from "react";
import style from "./view_contacts.module.css";
import { eraseFavoriteContact, favoriteContact } from "../../../Redux/Actions/Contacts_Action";
import { useDispatch, useSelector} from "react-redux";
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


    const eraseFavorite = () => {
      if(user)dispatch(eraseFavoriteContact(mail));
      setUser(!user);
    }

  return (
    <div>
      <div className={style.todo}>
        <div className={style.container}>
          <button className={style.button} onClick={handleOnClick}>
            <div>Name: {fullname}</div>
            <div>
              Last Transaction:
              {date_transaction && date_transaction.slice(5, 10)}
            </div>
            <div>Email: {mail}</div>
          </button>
          <button onClick={eraseFavorite}>x</button>
        </div>
      </div>
    </div>
  );
};
export default View;
