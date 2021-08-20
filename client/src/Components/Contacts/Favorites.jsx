import React, {useEffect, useState}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Favorites.module.css';
import View_favorite from './views/view_favorite';


export const Favorites = () => {
    const favorito = useSelector(state => state.contactsReducer.favorites)
    /* const [transactionUser, setTransactionUser] = useState(""); */
    return(
        <div className={style.containerFavorites}>
            <h2 className={style.titleFavorites }>Your favorite contacts</h2>   
            <div className={style.body}>
            { 
                favorito && 
                favorito.map((contact, i) =>(
                    <View_favorite 
                    key={i}
                    fullname={contact.fullname}
                    mail={contact.mail}
                    date_transaction={contact.date_transaction}
                    />   
                    ))
                    
                } 
            </div> 
        </div>
    )


}

export default Favorites