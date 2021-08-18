/* eslint-disable */
import React from "react";
import style from "./view_contacts.module.css";
export const View = ({
  fullname,
  date_transaction,
  mail,
  toggleTransactions,
}) => {
  const [renderContactTransactions, setRenderContactTransactions] =
    React.useState(true);

  const handleOnClick = () => {
    if (renderContactTransactions === true) toggleTransactions(mail);
    //setRenderContactTransactions(!renderContactTransactions);
  };

  return (
    <div>
      <div className={style.todo}>
        <div className={style.container}>
          <button className={style.button} onClick={handleOnClick}>
            <div>Name: {fullname}</div>
            <div>
              Last Transaction:
              {date_transaction && date_transaction.slice(5, 10)}
            </div>
            <div>Email: {mail}</div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default View;

/*
<NavLink to="/transfers" className={style.todo}>
        
      </NavLink>
*/