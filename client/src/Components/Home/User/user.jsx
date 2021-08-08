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
            { store ? <h1>Welcome {store.user_data.fullname} !</h1> : <h3>Cargando...Name</h3> }
            <div className={u.graphic}>
                <h2>Graphic of spend</h2> 
                <LineBalance userInfo={testInfo}/>

                <TransactionHistory id='{u.TransactionHistory}' />
                <Balance/> 
            </div>
           
            
        </div>
    )
}
export default User;