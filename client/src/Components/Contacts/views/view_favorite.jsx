import React from 'react';
import { useState } from 'react';
import style from './view_favorites.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { eraseFavoriteContact } from '../../../Redux/Actions/Contacts_Action';
export const View_favorite =({id,fullname , mail, date_transaction, }) => {
    const dispatch = useDispatch();
    const [renderContactTransactions, setRenderContactTransactions] = useState(true);
    const fav = useSelector(state => state.contactsReducer.favorites)
    const [user, setUser] = useState(false)

    const handleClick = () => {
        if (user === true){
            dispatch(eraseFavoriteContact())};
        setUser(!user);
    }
   return(
        <div>
            <button className={style.button} /* onClick={handleOnClick} */>
            <div>{id}</div>
            <div>Name :{fullname}</div>
            <div>Last Transaction :{date_transaction && date_transaction.slice(5, 10)}</div>
            <div>Email :{mail}</div>
            </button>
            <button onClick={el => handleClick(el)}>x</button>
        </div>
    )
}
export default View_favorite;