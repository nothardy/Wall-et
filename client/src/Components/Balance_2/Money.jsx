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
          <div>Loading</div>
        )}
      </div>
    </>
  );
};

export default Money;
