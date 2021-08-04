import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactions } from '../../../Redux/Actions/Home';
import ViewTransaction from './views';
import s from './index.module.css'

const TransactionHistory = () =>{
    const store = useSelector(state => state.Transactions);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTransactions())
    },[dispatch])
    return(
        <div className={s.container}>
            <div className={s.header}>
                <span id={s.title}>Transactions</span>
                <span id={s.recents}>Recents</span>
                <span id={s.history}>History</span>
            </div>
            <div className={s.body}>
                
                {
                    store?(store.map(el => <ViewTransaction key={el.id} from={el.from} amount={el.amount} state={el.state} transactionDate={el.transaction_date}/>))
                    :<h3>Historial</h3>
                }
                
            </div>
        </div>
    )
}
export default TransactionHistory;