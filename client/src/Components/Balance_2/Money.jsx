import React from 'react';
import style from './Balance.module.css'


export const Money = () => {

    return (
        <>
        <div className={style.money}>
            <h1>Balance</h1>
        <div className={style.number}>
            <h3 >
                200$
            </h3>
        </div>
        </div>

        </>
    )
}

export default Money;