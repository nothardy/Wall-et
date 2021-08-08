import React from 'react';
import v from './view.module.css';

export const viewTransaction = ({ from, amount, state, transactionDate}) => {
    return (
        <div className={v.containerView}>
            <div className={v.left}>
                <h4 id={v.titleView}>{from}</h4>
                <span>{state}</span>
            </div>

            <div className={v.right}>
                <h5 id={v.amountView}>${amount}</h5>
                {/* <span>{transactionDate.split('/',2).join('/')}</span> */}
            </div>

        </div>
    )
}
export default viewTransaction;