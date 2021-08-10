import React from 'react';
import NavBar from '../Home/NavBar/navBar';
import b from './bar.module.css'
import { Link } from 'react-router-dom';

export const Bar = () =>{
    return(
        <div className={b.containerBar}>
            <Link to='/mywallet'>
                <h3>Wall-et</h3>
            </Link>
            
             
        </div>
    )
}
export default Bar;