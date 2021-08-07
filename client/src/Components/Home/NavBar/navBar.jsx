import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* import Menu from './menu.png'; */
import n from './navBar.module.css'
//import "/navBar.css"

const NavBar = () => {
    let [closed, setClosed] = useState(true);
    const toggleNavBar = () =>{setClosed(closed = !closed)}

    return(
        
        <div className={n.containerNavBar}>
           {/*  <button id={n.btn__menuNavBar} onClick={() => toggleNavBar()}>X</button> */}
            <Link to='/mywallet'>Home</Link>
            <Link to='/account'>Account</Link>
            <Link to='/balance'>Balance</Link>
            <Link to='/payments'>Payments</Link>
            <Link to='/contacts'>Contacts</Link>
            <Link to='/transfers'>Transfers</Link>
            <Link to='/faq'>Help</Link>
            <Link to='/falta'>Log out</Link>
        </div>
    )
}
export default NavBar;