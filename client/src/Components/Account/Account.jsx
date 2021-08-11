import React from 'react'
import Bar from '../Bar/bar';
import NavBar from '../Home/NavBar/navBar'
//import Working from '../Working/Working';
import a from './Account.module.css'
import DetailAccount from './DetailAccount';

function Account() {
    return (
        <div>
            <Bar />
            <div className={a.container}>
                <div className={a.left}>
                    <NavBar />
                </div>
                <div className={a.right}>
                    <DetailAccount/>
                </div>
            </div>
        </div>
    )
}

export default Account;
