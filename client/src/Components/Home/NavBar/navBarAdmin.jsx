<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom'
import Home from './home.png';
import Account from './account.png';
import LogOut from './logout.png';

import na from './navBarAdmin.module.css';

function navBarAdmi() {
    return (
        <div className={na.container}>
            <Link to='/mywallet'><img src={Home} alt="home" /> Home</Link>
            {/* <Link to='/account'><img src={Account} alt="account" /> Account</Link> */}
            <Link to='/logout'><img src={LogOut} alt="log out" /> Log out</Link>
        </div>
    )
=======
import React from "react";
import { Link } from "react-router-dom";
import Home from "./home.png";
import LogOut from "./logout.png";

import na from "./navBarAdmin.module.css";

function navBarAdmi() {
  return (
    <div className={na.container}>
      <Link to="/mywallet">
        <img src={Home} alt="home" /> Home
      </Link>
      {/* <Link to='/account'><img src={Account} alt="account" /> Account</Link> */}
      <Link to="/logout">
        <img src={LogOut} alt="log out" /> Log out
      </Link>
    </div>
  );
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
}

export default navBarAdmi;
