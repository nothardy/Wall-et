import React from 'react';
import v from './view.module.css';

export const viewTransaction = ({ from, to, amount, state, transactionDate, main }) => {
    return (
        <div className={v.containerView}>
            <div className={v.left}>
                { main ? <h4 id={v.titleView}>{to}</h4> : <h4 id={v.titleView}>{from}</h4>}
                <span id={v.status}>{state}</span>
            </div>

            <div className={v.right}>
                <h5 id={v.amountView}>{main?'-':'+'}${amount}</h5>
                {/* <span>{transactionDate.split('/',2).join('/')}</span> */}
            </div>

        </div>
    )
}
export default viewTransaction;