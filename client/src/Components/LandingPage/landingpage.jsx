import React from 'react';
import Login from '../Login/login';
import { Link } from 'react-router-dom';
import l from './landingpage.module.css';

function Landingpage() {
    return (

        <div className={l.landingPage}>
                {/* <img src='https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80' alt='Landing Photo' className={l.pictureLanding} /> */}
                <Login />
                
        </div>


    )
}

export default Landingpage;
