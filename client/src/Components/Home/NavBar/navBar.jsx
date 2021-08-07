import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import n from './navBar.module.css'
//import "/navBar.css"
//arranquemos , vamos ahre
export const NavBar = () => {
    
    return(
        <div className={n.containerNavBar}>
            <Link to='/mywallet'>Home</Link>
            <Link to='/account'>Account</Link>
            <Link to='/balance'>Balance</Link>
            <Link to='/payments'>Payments</Link>
            <Link to='/contacts'>Contacts</Link>
            <Link to='/transfers'>Transfers</Link>
            <Link to='/faq'>Help</Link>
            <Link to='/logout'>Log out</Link> {/* CONSULTAR A WALTER Y FRANCO */}
         </div>
    )
}
export default NavBar;