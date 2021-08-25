/* eslint-disable */
import React, { useState, useEffect } from "react";
//import Working from '../Working/Working'
import c from "./Contacts.module.css";
import Bar from "../Bar/bar";
import NavBar from "../Home/NavBar/navBar";
import Search from "./Search";
import Filter from "./Filter.jsx";
import View from "./views/view_contacts";
import { useSelector, useDispatch } from "react-redux";
import {
  eraseContactFilters,
  getContacts,
  getFavorites,
} from "../../Redux/Actions/Contacts_Action";
import Transactions from "./Transactions";
import Favorites from "./Favorites";
import ViewTransaction from "./views/view_transactions";
import View_favorite from "./views/view_favorite";

function Contacts() {
  const dispatch = useDispatch();
  let contacts = useSelector((store) => store.contactsReducer.contacts),
    searchedContact = useSelector(
      (store) => store.contactsReducer.searchedContact
    ),
    orderedContacts = useSelector(
      (store) => store.contactsReducer.orderedContacts
    ),
    transactions = useSelector((store) => store.contactsReducer.transactions),
    fav = useSelector((store) => store.contactsReducer.favorites);
  const [firstRender, setFirstRender] = useState(true);
  const [shownContacts, setShownContacts] = useState(contacts);
  const [search, setSearch] = useState(false);
  //favoritos
  const [favorites, setFavorites] = useState(fav);
  /* console.log(favorites) */
  //const [renderTransactions, setRenderTransactions] = useState(true);
  const [transactionUser, setTransactionUser] = useState("");
  // hacer una logica para que primero busque si existen los orderedContacts, si no existen es por que
  // nadie apreto ordenamientos, entonces por defecto busco los contacts

  useEffect(async () => {
    if (firstRender === true) {
      setFirstRender(false);
      dispatch(getContacts());
      dispatch(getFavorites());
    }

    if (searchedContact.length > 0) setShownContacts(searchedContact);
    else if (orderedContacts.length > 0) setShownContacts(orderedContacts);
    else setShownContacts(contacts);
  }, [contacts, searchedContact, orderedContacts, firstRender]);

  const funSearch = () => {
    if (search === true) dispatch(eraseContactFilters());
    setSearch(!search);
  };

  const toggleTransactions = (userMail) => {
    setTransactionUser(userMail);
  };

  const renderButton =
    search === true ? (
      <button
        onClick={funSearch}
        className={c.buton}
        type="button"
        className="w3-button w3-red"
      >
        X
      </button>
    ) : null;

  return (
    <div>
      <Bar />
      {/* <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" /> */}
      <div className={c.container}>
        <div className={c.left}>
          <NavBar />
        </div>
        <div className={c.right}>
          <div id={c.tittle}></div>
          <div className={c.contactos}>
            {renderButton}
            <h2 className={c.tittle}>Contacts</h2>
            <Filter />
            <Search funSearch={funSearch} />
            {shownContacts &&
              shownContacts.map((contact, i) => {
                return (
                  <View
                    toggleTransactions={toggleTransactions}
                    key={i}
                    fullname={contact.fullname}
                    mail={contact.mail}
                    date_transaction={contact.date_transaction}
                  />
                );
              })}
            {/* <div className={c.button}>x</div> */}
          </div>
          <div className={c.transactions}>
            <Transactions
              transactionList={transactions}
              mail={transactionUser}
            />
            <Favorites
              toggleTransactions={toggleTransactions}
              funSearch={funSearch}
            />
          </div>
          <div className={c.transactions}>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
