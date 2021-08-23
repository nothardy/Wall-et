import React from "react";
import { Link } from "react-router-dom";
import Home from "./home.png";
import Account from "./account.png";
import Balance from "./balance.png";
import Contacts from "./contact.png";
import Trasnfers from "./transfer1.png";
import LogOut from "./logout.png";
import Help from "./support1.png";
import '../../../App.css';

import n from "./navBar.module.css";
import DarkMode from "../../DarkMode/DarkMode";
export const NavBar = () => {
  return (
    <div className={n.containerNavBar}>
      <Link to="/mywallet">
        <img src={Home} alt="home" /> Home
      </Link>
      <Link to="/account">
        <img src={Account} alt="account" /> Account
      </Link>
      <Link to="/balance">
        <img src={Balance} alt="balance" /> Balance
      </Link>

      <Link to="/contacts">
        <img src={Contacts} alt="contacts" /> Contacts
      </Link>
      <Link to="/transfers/0">
        <img src={Trasnfers} alt="transfers" /> Transfers
      </Link>
      <Link to="/help">
        <img src={Help} alt="help" /> Help
      </Link>
      <DarkMode />
      <Link to="/logout">
        <img src={LogOut} alt="log out" /> Log out
      </Link>
      
    </div>
  );
};
export default NavBar;
