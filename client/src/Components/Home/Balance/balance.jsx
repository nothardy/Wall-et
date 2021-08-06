import React from 'react';
import {  useSelector } from 'react-redux';  
/* import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button } from 'react-bootstrap'*/
import ba from './balance.module.css';
const Balance = () =>{
    const store = useSelector(state => state.homeReducer.User);
    
    return(
        store ?
        <div className={ba.containerBalance}>
            <h2 id={ba.titleBalance}>Balance</h2> 
            <h3>{`$ ${store.account_data.balance || '****'}`}</h3>{/* ACA PONDRIA AMOUNT */}

            <div className={ba.footerBalance}>
                    {/* <div>
                        <Button variant="outline-warning">Send</Button>
                    </div> */}
                
                <button className={ba.btnBalance}>Send</button>
                <button className={ba.btnBalance}>Charge</button>
            </div>
        </div>
        : <h3>Cargando... Balance</h3>
    )
}
export default Balance;