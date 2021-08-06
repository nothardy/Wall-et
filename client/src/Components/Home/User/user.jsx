import React from 'react';
import TransactionHistory from '../Transactions/transactions';
import Balance from '../Balance/balance';
import { useSelector } from 'react-redux';

import u from './user.module.css'
const User = () => {
    const store = useSelector(state => state.User)
    return(
        <div className={u.containerUser}>
            { store ? <h3>Hellou {store.user_data.fullname}!</h3> : <h3>Cargando...Name</h3> }
            <TransactionHistory id={u.TransactionHistory} />
            <Balance/> 
        </div>
    )
}
export default User;