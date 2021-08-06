import React from 'react';
import NavBar from '../Home/NavBar/navBar';
//import b from './bar.module.css'

const Bar = () =>{
    return(
        <div className='{b.containerBar}'>
            <h3>Wall-et</h3>
            <div>
                <NavBar/>
            </div>
            
        </div>
    )
}
export default Bar;