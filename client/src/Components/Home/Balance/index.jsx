import React from 'react';
import {  useSelector } from 'react-redux';  
import s from './index.module.css';

const Balance = () =>{
    const store = useSelector(state => state.User)/* CUANDO TENGA LA RUTA, VER COMO OBTENER AMOUNT */
    
    return(
        store ?
        <div className={s.container}>
            <h2 id={s.title}>Balance</h2> 

            <h3>{`$ ${store.amount || '****'}`}</h3>{/* ACA PONDRIA AMOUNT */}

            <div className={s.footer}>
                <button className={s.btn}>Send</button>
                <button className={s.btn}>Charge</button>
            </div>
        </div>
        : <h3>Cargando... Balance</h3>
    )
}
export default Balance;