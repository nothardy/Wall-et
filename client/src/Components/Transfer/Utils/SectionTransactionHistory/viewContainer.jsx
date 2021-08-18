<<<<<<< HEAD
import React from 'react'

import vc from './viewContainer.module.css'

const ViewContainer = ({name, amount, type_transaction, state}) => {
    return (
        <div className={vc.container}>
            <h2 id={vc.name}>{name}</h2>
            <h4 id={vc.amount}>{amount}</h4>
            <span id={vc.typeTransaction}>Type: {type_transaction}</span>
            <span id={vc.state}>Status: {state}</span>
        </div>
    )
}
=======
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
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9

export default ViewContainer;
