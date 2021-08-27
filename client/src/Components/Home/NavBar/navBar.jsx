import React from "react";
import { Link } from "react-router-dom";
import Home from "./home.png";
import Account from "./account.png";
import Balance from "./balance.png";
import Contacts from "./contact.png";
import Trasnfers from "./transfer1.png";
import LogOut from "./logout.png";
import Help from "./support1.png";
import CreditCard from "./3037247.png";
import '../../../App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBalanceScaleLeft, faExchangeAlt, faAddressBook, faHeadset, faWallet, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import n from "./navBar.module.css";

export const NavBar = () => {
  return (
    <div className={n.containerNavBar}>
      <Link to="/mywallet">
        <FontAwesomeIcon
					icon={faHome}		
          className={n.iconNav}			
				/>
        {/* <img src={Home} alt="home" /> */} Home
      </Link>
      <Link to="/account">
        <FontAwesomeIcon
					icon={faUser}		
          className={n.iconNav}			
				/>
        {/* <img src={Account} alt="account" /> */} Account
      </Link>
      <Link to="/balance">
        <FontAwesomeIcon
					icon={faBalanceScaleLeft}		
          className={n.iconNav}			
				/>
        {/* <img src={Balance} alt="balance" />  */}Balance
      </Link>

      <Link to="/contacts">
        <FontAwesomeIcon
					icon={faAddressBook}		
          className={n.iconNav}			
				/>
        {/* <img src={Contacts} alt="contacts" /> */} Contacts
      </Link>
      <Link to="/transfers/0">
        <FontAwesomeIcon
					icon={faExchangeAlt}		
          className={n.iconNav}			
				/>
        {/* <img src={Trasnfers} alt="transfers" /> */} Transfers
      </Link>
      <Link to="/help">
        <FontAwesomeIcon
					icon={faHeadset}		
          className={n.iconNav}			
				/>
        {/* <img src={Help} alt="help" /> */} Help
      </Link>
      <Link to="/walletcard">
        <FontAwesomeIcon
					icon={faWallet}	
          className={n.iconNav}				
				/>
        {/* <img className={n.imgen}src={CreditCard }alt="img" /> */} Wallet Card
      </Link>
      
      
      <div className={n.botonluna}>
      <Link to="/logout">
        <FontAwesomeIcon
					icon={faSignOutAlt}
          className={n.iconNav}					
				/>
        {/* <img src={LogOut} alt="log out" />  */}Log out
      </Link>
      </div>
    </div>
  );
};
export default NavBar;
