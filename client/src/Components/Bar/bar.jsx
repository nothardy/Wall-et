import React from "react";
import b from "./bar.module.css";
import { Link } from "react-router-dom";


export const Bar = () => {
  
  return (
    <div className={b.containerBar}>
      <Link to="/mywallet">
        <h3>Wall-et</h3>
      </Link>
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
