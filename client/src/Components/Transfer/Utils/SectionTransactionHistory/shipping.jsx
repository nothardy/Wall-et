import React from "react";
import { useSelector } from "react-redux";
import ViewContainer from "./viewContainer";
import sg from "./shipping.module.css";

const Shipping = ({ widht, height, borderRadius }) => {
  const store = useSelector(
    (state) => state.homeReducer.User.account_data.transactions
  );
  const received = store.filter((el) => el.main);

  return (
    <div
      className={sg.container}
      style={{
        width: `${widht}`,
        height: `${height}`,
        borderRadius: `${borderRadius}`,
      }}
    >
      <div className={sg.header}>
        <h1>Transactions Sent</h1>
      </div>

      <div className={sg.body}>
        {received ? (
          received.map((el) => (
            <ViewContainer
              key={el.id}
              name={el.to}
              amount={el.amount}
              type_transaction={el.type_transaction}
              state={el.state}
            />
          ))
        ) : (
          <h3>Not Found</h3>
        )}
      </div>
    </div>
  );
};

export default Shipping;
