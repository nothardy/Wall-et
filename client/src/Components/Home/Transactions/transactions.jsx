import React from 'react';
import { useSelector } from 'react-redux';
import ViewTransaction from './Views/view';
import t from './transaction.module.css'

const TransactionHistory = () =>{
    const store = useSelector(state => state.homeReducer.User);
   
    return(
        <div className={t.containerTransaction}>
            <div className={t.headerTransaction}>
                <h2 id={t.titleTransaction}>Transactions</h2>
                <span id={t.recentsTransaction}>Recents</span>
                <span id={t.historyTransaction}>History</span>
            </div>
            <div className={t.bodyTransaction}>
                {
                    store && store.account_data.transactions.length > 0?(store.account_data.transactions.map(el => <ViewTransaction 
                        key={el.id} from={el.to} amount={el.amount} 
                        state={el.state} transactionDate={el.transaction_date} />))
                    : <h3> --- </h3>
                }  
            </div>
        </div>
    )
}
export default TransactionHistory;