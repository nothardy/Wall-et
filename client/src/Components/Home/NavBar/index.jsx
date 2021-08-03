import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu.png';
import s from './index.module.css'

const NavBar = () => {
    let [closed, setClosed] = useState(true);
    const toggleNavBar = () =>{setClosed(closed = !closed)}

    return(
        closed ? 
        <div> 
            <img id={s.img__menu} src={Menu} alt="Menu" onClick={() => toggleNavBar()}/>
        </div>
        :
        <div className={s.container}>
            <button id={s.btn__menu} onClick={() => toggleNavBar()}>X</button>
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