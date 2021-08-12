import React from "react";
import { NavLink } from "react-router-dom";
import style from "./view_contacts.module.css";
export const View = ({ fullname, date_transaction, mail }) => {
  return (
    <div>
      <NavLink to="/transfers" className={style.todo}>
        <div className={style.container}>
          <div>{fullname}</div>
          <div>{date_transaction && date_transaction.slice(5, 10)}</div>
          <div>{mail}</div>
        </div>
      </NavLink>
    </div>
  );
};
export default View;
