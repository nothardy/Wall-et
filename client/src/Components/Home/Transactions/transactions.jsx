import React from 'react';
import { useSelector } from 'react-redux';
import ViewTransaction from './Views/view';
import t from './transaction.module.css';
import {Link} from 'react-router-dom';

const TransactionHistory = () =>{
    const store = useSelector(state => state.homeReducer.User);

   
    return(
        <div className={t.containerTransaction}>
            <div className={t.headerTransaction}>
                <h2 id={t.titleTransaction}>Transactions</h2>
                <span id={t.recentsTransaction}>Recents</span>
                <Link to="/transfers/3" >
                <span id={t.historyTransaction}>History</span>
                </Link>
            </div>
            <div className={t.bodyTransaction}>
                {
                    store && store.account_data.transactions.length > 0?(store.account_data.transactions.slice(0, 12).map(el => 
                    <ViewTransaction 
                        key={el.id} 
                        from={el.from}
                        to={el.to} 
                        amount={el.amount} 
                        state={el.state} 
                        transactionDate={el.transaction_date}
                        main={el.main} 
                    />))
                    : <div></div>
                }  
            </div>
        </div>
    )
}
export default TransactionHistory;