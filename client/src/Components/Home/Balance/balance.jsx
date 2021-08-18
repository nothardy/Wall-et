import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ba from "./balance.module.css";
export const Balance = () => {
  const store = useSelector((state) => state.homeReducer.User);

  return (
    <div className={ba.containerBalance}>
      {store ? (
        <>
          <h2 id={ba.titleBalance}>Balance</h2>
          <h2 id={ba.cashBalance}>{`$ ${store.account_data.balance}`}</h2>
          <div className={ba.footerBalance}>
            <Link to="/transfers/1">
              <button className={ba.btnBalance}>Send</button>
            </Link>
            <Link to="/transfers/2">
              <button className={ba.btnBalance}>Charge</button>
            </Link>
          </div>
        </>
      ) : (
        <h3>Cargando... Balance</h3>
      )}
    </div>
  );
};
export default Balance;