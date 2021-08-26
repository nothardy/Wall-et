import React from "react";
import Received from "./received";
import Shipping from "./shipping";
import th from "./index.module.css";

const TransactionHistory = () => {
  return (
    <div className={th.container}>
      <Received widht="33rem" height="45rem" borderRadius="15px" />
      <Shipping widht="33rem" height="45rem" borderRadius="15px" />
    </div>
  );
};

export default TransactionHistory;
