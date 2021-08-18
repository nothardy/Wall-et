<<<<<<< HEAD
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
=======
import React from "react";
import { useSelector } from "react-redux";
import estilo from "./Money.module.css";
import { Link } from "react-router-dom";

export const Money = () => {
  const store = useSelector((state) => state.homeReducer.User);

  return (
    <>
      <div className={estilo.money}>
        {store ? (
          <>
            <h2 className={estilo.name}>Balance</h2>
            <div className={estilo.saldo}>
              <h3>{`$ ${store.account_data.balance}`}</h3>
            </div>
            <div className={estilo.footerBalance}>
              <Link to="/transfers/1">
                <button className={estilo.btnBalance}>Send</button>
              </Link>
              <Link to="/transfers/2">
                <button className={estilo.btnBalance}>Charge</button>
              </Link>
            </div>
          </>
        ) : (
          <h3>Cargando... Balance</h3>
        )}
      </div>
    </>
  );
};

export default Money;
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
