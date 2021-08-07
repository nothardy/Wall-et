import React from 'react';
import TransactionHistory from '../Transactions/transactions';
import Balance from '../Balance/balance';
import { useSelector } from 'react-redux';

import LineBalance from '../../Balance_2/LineBalance'
import {testInfo} from '../../../Redux/Reducer/Balance_Reducer'

import u from './user.module.css'
export const User = () => {
    const store = useSelector(state => state.homeReducer.User)

    return(
        <div className={u.containerUser}>
            { store ? <h3>Hellou {store.user_data.fullname}!</h3> : <h3>Cargando...Name</h3> }
            <div className={u.graphic}>
                <h3>Graphic of spend</h3> 
                <LineBalance userInfo={testInfo}/>
            </div>
           
            <TransactionHistory id='{u.TransactionHistory}' />
            <Balance/> 
        </div>
    )
}
export default User;