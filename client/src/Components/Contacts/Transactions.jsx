import React from "react";
import tb from "./Transactions.module.css";
import ViewTransaction from "./views/view_transactions";
import { filterTransactions } from "../../utils/FilterTransactions";

export const Transactions = (props) => {
  let transactions = props.transactionList;
  transactions = filterTransactions(transactions, props.mail);

  return (
    <div className={tb.containerTransaction}>
      <div className={tb.headerTransaction}>
        <h2 id={tb.titleTransaction}>{`Your transactions with ${
          props.mail.split("@")[0] || "all your contacts"
        }`}</h2>
      </div>
      <div className={tb.bodyTransaction}>
        {transactions && transactions.length > 0 ? (
          transactions.map((el) => (
            <ViewTransaction
              key={el.id}
              from={el.from}
              to={el.to}
              amount={el.amount}
              state={el.state}
              transactionDate={el.transaction_date}
            />
          ))
        ) : (
          <h3> --- </h3>
        )}
      </div>
    </div>
  );
};

export default Transactions;
