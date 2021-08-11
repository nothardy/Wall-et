import React from "react";
//import Working from '../Working/Working'
import c from "./Contacts.module.css";
import Bar from "../Bar/bar";
import NavBar from "../Home/NavBar/navBar";
import Search from "./Search";
import Filter from "./Filter.jsx";
import {contactsReducer, contactsHard} from "../../Redux/Reducer/Contacts_Reducer";
import { testInfo } from "../../Redux/Reducer/Balance_Reducer";
import { useSelector } from "react-redux";
function Contacts() {
  const user = testInfo.transactions;
  const select = contactsHard.contacts
  console.log(select.splice(0,3));
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
      </div>
    </div>
  );
}

export default Contacts;
