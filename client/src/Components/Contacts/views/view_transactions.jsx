import React from "react";
import v from "./transaction.module.css";
import { transformDate } from "../../../utils/FilterTransactions";

export const ViewTransaction = ({
  to,
  from,
  amount,
  state,
  transactionDate,
}) => {
  return (
    <div className={v.containerView}>
      <div className={v.left}>
        <p id={v.titleView}>From: {from}</p>
        <p id={v.titleView}>To: {to}</p>
        <p id={v.status}>Date: {transformDate(transactionDate)}</p>
        <p id={v.status}>Status: {state}</p>
        <p id={v.amountView}>Amount: ${amount}</p>
      </div>

      <div className={v.right}>
        {/* <span>{transactionDate.split('/',2).join('/')}</span> */}
      </div>
    </div>
  );
};
export default ViewTransaction;
