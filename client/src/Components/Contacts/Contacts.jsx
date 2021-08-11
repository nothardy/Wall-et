import React from "react";
//import Working from '../Working/Working'
import c from "./Contacts.module.css";
import Bar from "../Bar/bar";
import NavBar from "../Home/NavBar/navBar";
import Working from "../Working/Working";
import Search from "./Search";
import Filter from "./Filter";
import { testInfo } from "../../Redux/Reducer/Balance_Reducer";
function Contacts() {
  const user = testInfo.transactions;
  // hacer una logica para que primero busque si existen los orderedContacts, si no existen es por que
  // nadie apreto ordenamientos, entonces por defecto busco los contacts
  return (
    <div>
      <Bar />
      <div className={c.container}>
        <div className={c.left}>
          <NavBar />
        </div>
        <div className={c.right}>
          <Search />
        </div>
        <div>
          <Filter />
        </div>
        <div className={style.lista}></div>
      </div>
    </div>
  );
}

export default Contacts;
