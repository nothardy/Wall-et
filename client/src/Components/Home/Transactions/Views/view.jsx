import React from "react";
import v from "./view.module.css";

export const viewTransaction = ({
  to,
  from,
  amount,
  state,
  transactionDate,
}) => {
  return (
    <div className={v.containerView}>
      <div className={v.left}>
        <h4 id={v.titleView}>{from}</h4>
        <h4 id={v.titleView}>{to}</h4>
        <p id={v.status}>{transactionDate}</p>
        <p id={v.status}>{state}</p>
      </div>

      <div className={v.right}>
        <h5 id={v.amountView}>${amount}</h5>
        {/* <span>{transactionDate.split('/',2).join('/')}</span> */}
      </div>
    </div>
  );
};
export default viewTransaction;
