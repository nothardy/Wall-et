import React from 'react';
import Card from './Methods/card';
import Transfer from './Methods/transfer';
import Cash from './Methods/cash';

import tc from './trasferOrCash.module.css';


const TrasferOrCash = ({ close }) => {
    
    return (
        <div className={tc.container}>
            <div className={tc.header}>
                <button className={tc.btnTransfer}>Card</button>
                <button className={tc.btnTransfer}>Transfer</button>
                <button className={tc.btnTransfer}>Cash</button>
            </div>
            <div className={tc.body}>
                <Transfer/>
            </div>
            <button onClick={ () => close()} id={tc.btn_close}>X</button>
        </div>
    )
}


export default TrasferOrCash;
