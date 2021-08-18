import React from 'react'
import Bar from '../Bar/bar';
import NavBar from '../Home/NavBar/navBar'
//import Working from '../Working/Working';
import a from './Account.module.css'
import DetailAccount from './DetailAccount';

<<<<<<< HEAD
=======

>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
function Account() {
    return (
        <div>
            <Bar />
            <div className={a.container}>
                <div className={a.left}>
                    <NavBar />
                </div>
                <div className={a.right}>
<<<<<<< HEAD
                    <DetailAccount />
=======
                    <DetailAccount/>
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
                </div>
            </div>
        </div>
    )
}

export default Account;
