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
import { useSelector, useDispatch } from "react-redux";
import { eraseContactFilters } from "../../Redux/Actions/Contacts_Action";
function Contacts() {
  const user = testInfo.transactions;
  const select = contactsHard.contacts;
  const dispatch = useDispatch();
  let contacts = useSelector((store) => store.contactsReducer.contacts),
    searchedContact = useSelector(
      (store) => store.contactsReducer.searchedContact
    ),
    orderedContacts = useSelector(
      (store) => store.contactsReducer.orderedContacts
    );
  const [shownContacts, setShownContacts] = useState(select);
  const [search, setSearch] = useState(false);

  // hacer una logica para que primero busque si existen los orderedContacts, si no existen es por que
  // nadie apreto ordenamientos, entonces por defecto busco los contacts
  useEffect(async () => {
    if (searchedContact.length > 0) setShownContacts(searchedContact);
    else if (orderedContacts.length > 0) setShownContacts(orderedContacts);
    else setShownContacts(contacts);
  }, [contacts, searchedContact, orderedContacts]);

  const funSearch = () => {
    if (search === true) dispatch(eraseContactFilters());
    setSearch(!search);
  };

  const renderButton =
    search === true ? 
    <button onClick={funSearch} className={c.button} type="button" class="w3-button w3-red">X</button> : null;
  return (
    <div>
      
      <Bar />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <div className={c.container}>
        <div className={c.left}>
          <NavBar />
        </div>
        <div className={c.right}>
         <div id={c.tittle}>
            <h1 className={c.tittle}>Contacts</h1> 
         </div>
          <Filter />
          <div className={c.contactos}>
            {renderButton}
            <Search funSearch={funSearch} />
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
              <div className={c.button}>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
