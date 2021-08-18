<<<<<<< HEAD
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
=======
import React from "react";
import b from "./bar.module.css";
import { Link } from "react-router-dom";

export const Bar = () => {
  return (
    <div className={b.containerBar}>
      <Link to="/mywallet">
        <h3>Wall-et</h3>
      </Link>
    </div>
  );
};
export default Bar;
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
