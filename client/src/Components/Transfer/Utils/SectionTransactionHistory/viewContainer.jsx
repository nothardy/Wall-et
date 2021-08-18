import React from "react";

import vc from "./viewContainer.module.css";

const ViewContainer = ({ name, amount, type_transaction, state }) => {
  return (
    <div className={vc.container}>
      <div className={vc.left}>
        <h3 id={vc.name}>{name}</h3>
        <span id={vc.typeTransaction}>
          <b>Type: </b>
          {type_transaction}
        </span>
      </div>

      <div className={vc.right}>
        <h3 id={vc.amount}>${amount}</h3>
        <span id={vc.state}>
          <b>Status: </b>
          {state}
        </span>
      </div>
    </div>
  );
};

export default ViewContainer;