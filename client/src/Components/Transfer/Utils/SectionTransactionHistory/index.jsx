<<<<<<< HEAD
import React from 'react';
import Received from './received';
import Shipping from './shipping';
import th from './index.module.css';

const TransactionHistory = () => {
    return (
        <div className={th.container}>
            <Received widht="30rem" height="35rem"/>
            <Shipping widht="30rem" height="35rem"/>
        </div>
    )
}
=======
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
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9

export default TransactionHistory;
