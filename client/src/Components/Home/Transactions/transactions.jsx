import React from 'react';
import { useSelector } from 'react-redux';
import ViewTransaction from './Views/view';
<<<<<<< HEAD
import t from './transaction.module.css'

const TransactionHistory = () =>{
    const store = useSelector(state => state.homeReducer.User);
=======
import t from './transaction.module.css';
import {Link} from 'react-router-dom';

const TransactionHistory = () =>{
    const store = useSelector(state => state.homeReducer.User);

>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
   
    return(
        <div className={t.containerTransaction}>
            <div className={t.headerTransaction}>
                <h2 id={t.titleTransaction}>Transactions</h2>
                <span id={t.recentsTransaction}>Recents</span>
<<<<<<< HEAD
                <span id={t.historyTransaction}>History</span>
=======
                <Link to="/transfers/3" >
                <span id={t.historyTransaction}>History</span>
                </Link>
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
            </div>
            <div className={t.bodyTransaction}>
                {
                    store && store.account_data.transactions.length > 0?(store.account_data.transactions.slice(0, 5).map(el => 
                    <ViewTransaction 
                        key={el.id} 
                        from={el.from}
                        to={el.to} 
                        amount={el.amount} 
                        state={el.state} 
                        transactionDate={el.transaction_date}
                        main={el.main} 
                    />))
                    : <h3> --- </h3>
                }  
            </div>
        </div>
    )
}
export default TransactionHistory;