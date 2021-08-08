import React from 'react';
import { useSelector } from 'react-redux';
import estilo from './Money.module.css'
export const Money = () => {
    const store = useSelector(state => state.homeReducer.User);

    return (
        <>
        <div className={estilo.money}>
            {
                store ? 
                <>
                <h2 className={estilo.name}>Balance</h2>
                   <div className={estilo.saldo}>
                        <h3>{`$ ${store.account_data.balance}`}</h3>
                    </div>
                    <div className={estilo.footerBalance}>
                        
                        <button className={estilo.btnBalance}>Send</button>
                        <button className={estilo.btnBalance}>Charge</button>
                    </div>
            </>
                : (<h3>Cargando... Balance</h3>)
            }
        </div>
        </>
    )
}

export default Money;