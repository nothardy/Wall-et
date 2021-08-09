import React from "react"
import tb from './Transactions.module.css'
import ViewTransaction from '../Home/Transactions/Views/view'
import { useSelector } from "react-redux"

export const Transactions = () => {
const store = useSelector(state => state.homeReducer.User);

    return(
        <div className={tb.containerTransaction}>
            <div className={tb.headerTransaction}>
                <h2 id={tb.titleTransaction}>Transactions</h2>
                <span id={tb.recentsTransaction}>Recents</span>
                <span id={tb.historyTransaction}>History</span>
            </div>
            <div className={tb.bodyTransaction}>
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

export default Transactions