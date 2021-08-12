import React, { useState, useEffect } from "react";
//import Working from '../Working/Working'
import c from "./Contacts.module.css";
import Bar from "../Bar/bar";
import NavBar from "../Home/NavBar/navBar";
import Search from "./Search";
import Filter from "./Filter.jsx";
import View from "./views/view_contacts";
import {
  contactsReducer,
  contactsHard,
} from "../../Redux/Reducer/Contacts_Reducer";
import { testInfo } from "../../Redux/Reducer/Balance_Reducer";
import { useSelector } from "react-redux";
function Contacts() {
  const user = testInfo.transactions;
  const select = contactsHard.contacts;

  let contacts = useSelector((store) => store.contactsReducer.contacts),
    searchedContact = useSelector(
      (store) => store.contactsReducer.searchedContact
    ),
    orderedContacts = useSelector(
      (store) => store.contactsReducer.orderedContacts
    );
  const [shownContacts, setShownContacts] = useState(select);

  // hacer una logica para que primero busque si existen los orderedContacts, si no existen es por que
  // nadie apreto ordenamientos, entonces por defecto busco los contacts
  useEffect(async () => {
    if (searchedContact.length > 0) setShownContacts(searchedContact);
    else if (orderedContacts.length > 0) setShownContacts(orderedContacts);
    else setShownContacts(contacts);
  }, [contacts, searchedContact, orderedContacts]);

  return (
    <div>
      <Bar />
      <div className={c.container}>
        <div className={c.left}>
          <NavBar />
        </div>
        <div className={c.right}>
          <h1 className={c.tittle}>Contacts</h1>
          <Search />
          <Filter />
          <div className={c.contactos} >
            <h3 className={c.tittle2}>Contacts</h3>
            {shownContacts &&
              shownContacts.map((contact, i) => {
                return (
                  <View
                    key={i}
                    fullname={contact.fullname}
                    mail={contact.mail}
                    date_transaction={contact.date_transaction}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
