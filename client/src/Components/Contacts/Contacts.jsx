import React from 'react'
//import Working from '../Working/Working'
import c from './Contacts.module.css'
import Bar from '../Bar/bar'
import NavBar from '../Home/NavBar/navBar'
import Working from '../Working/Working'

function Contacts() {
    return (
        <div>
            <Bar/>
            <div className={c.container}>
                <div className={c.left}>
                    <NavBar/>
                </div>
                <div className={c.right}>
                    <Working/>
                </div>
            </div>
        </div>
    )
}

export default Contacts
