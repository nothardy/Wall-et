import React from 'react';

import s from './index.module.css'
const viewTransaction = ({ from, amount, state, transactionDate}) => {
    return (
        <div className={s.container}>
            <div className={s.left}>
                <h4 id={s.title}>{from}</h4>
                <span>{state}</span>
            </div>

            <div className={s.right}>
                <h5 id={s.amount}>${amount}</h5>
                <span>{transactionDate.split('/',2).join('/')}</span>
            </div>

        </div>
    )
}
export default viewTransaction;