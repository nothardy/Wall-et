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
}

export default navBarAdmi;
