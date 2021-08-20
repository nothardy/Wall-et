import React from 'react'
//import { Link } from 'react-router-dom'
import cm from './checkMail.module.css'

function checkMail() {
    return (
        <div className={cm.body}>
            
        <div >
            <div className={cm.container}>
           <p className={cm.text}>  Please check your email and spam box to verify the account</p>
            </div>
            


            {/* <div >    

<div className={cm.margeninferior}>
      <div className={cm.contactus}>
        <div className={cm.faqLanding}>
        <Link to="/faq">
            <p>FAQ</p>
          </Link>
          </div>
        <p>
          Contact Us <br></br>+54 411154545444 <br></br>
          wall-et@wmail.com
        </p>
        </div>
      <footer className={cm.footer}>
        {" "}
        <p> Copyright© 2021 Wall-et</p>
      </footer>
      </div>
      </div> */}
        </div>
        </div>
    )
}

export default checkMail
