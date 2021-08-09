import React from "react"
import transf from './Transactions.module.css'
import ViewTransaction from '../Home/Transactions/Views/view'
import { useSelector } from "react-redux"

export const Transactions = () => {
const store = useSelector(state => state.homeReducer.User);

    return(
        <>
        <div className={transf.transactions}>
        <div className={transf.title}>
            <span id={transf.titleTransaction}>Transactions</span>
            <span id={transf.recentsTransaction}>Recents</span>
            <span id={transf.historyTransaction}>History</span>
        </div>
         { 
        <div className={transf.bodyTransaction}>
            {
                store && store.account_data.transactions.length > 0
                ?(store.account_data.transactions.splice(0,5).map(el => <ViewTransaction 
                    key={el.id} from={el.to} amount={el.amount} 
                    state={el.state} transactionDate={el.transaction_date} />))
                : <h3> --- </h3>
            }  
        </div> 
        } 
    </div>
        </>


)
}

export default Transactions