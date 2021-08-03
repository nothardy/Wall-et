import React from 'react';
import { useSelector } from 'react-redux';

import s from './index.module.css'

const TransactionHistory = () =>{
    const store = useSelector(state => state.Transactions)
    return(
        <div className={s.container}>
            <div className={s.header}>
                <span id={s.title}>Transactions</span>
                <span id={s.recents}>Recents</span>
                <span id={s.history}>History</span>
            </div>
            <div className={s.body}>
                
                {
                    store?(store.map(el => <div>{el} </div>))
                    :<h3>Historial</h3>
                }
                
            </div>
        </div>
    )
}
export default TransactionHistory;