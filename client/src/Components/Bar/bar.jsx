import React from "react";
import b from "./bar.module.css";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import wallet from './wallet.png'

export const Bar = () => {
  
  return (
    <div className={b.containerBar}>
      <Link to="/mywallet">
        {/* <img src={wallet}/> */}
        <h2>Wall-et</h2>
      </Link>
      <DarkMode />
      {/* <div >
      <button className={b.switch}>
      <span ><img src="https://image.flaticon.com/icons/png/512/997/997118.png" className={b.sunicon} alt=""/></span>
					<span ><img src="https://image.flaticon.com/icons/png/512/702/702471.png" className={b.moonicon} alt=""/></span>
      </button>
      </div> */}
      
    </div>
  );
};
export default Bar;
