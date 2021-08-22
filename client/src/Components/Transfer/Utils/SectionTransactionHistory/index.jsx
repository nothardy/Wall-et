import React from "react";
import Received from "./received";
import Shipping from "./shipping";
import th from "./index.module.css";

const TransactionHistory = () => {
  return (
    <div className={th.container}>
      <Received widht="30rem" height="35rem" borderRadius="15px" />
      <Shipping widht="30rem" height="35rem" borderRadius="15px" />
    </div>
  );
};

export default TransactionHistory;
