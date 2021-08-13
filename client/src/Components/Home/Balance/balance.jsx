import React from 'react';
import {  useSelector } from 'react-redux';  

import ba from './balance.module.css';
export const Balance = () =>{
    const store = useSelector(state => state.homeReducer.User);
    
    return(
        <div className={ba.containerBalance}>
           {
            store ? 
            <>
                <h2 id={ba.titleBalance}>Balance</h2> 
                    <h2 id={ba.cashBalance}>{`$ ${store.account_data.balance}`}</h2>
                    <div className={ba.footerBalance}>
                        
                        <button className={ba.btnBalance}>Send</button>
                        <button className={ba.btnBalance}>Charge</button>
                    </div>
            </>
                : (<h3>Cargando... Balance</h3>)
            }
        </div>
        
    )
}
export default Balance;