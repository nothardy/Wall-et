import React, { useState }  from 'react'
import f from "./frecuentlyquestions.module.css"
import image1 from "./faq1.png"
import image2 from "./faq2.png"
import image3 from "./faq3.png"
import Bar from '../Bar/bar'

function Frecuentlyquestions() {
    let [show, setShow] = React.useState({
        q1: false,
        q2: false,
        q3: false
    })

    return (
        <div className={f.container}>
            <Bar />
                <div>
                    <h1 className={f.title}> Frequently Asked Questions </h1>
                    <div className={f.section1}>
                        <div className={f.section1grid}>
                            <p className={f.section1gridtitle}>
                                Add a credit card.
                            </p>
                            <p>When you add a credit card, all the information that you stored in the App is encrypted together with your password. Your personal data is important for us.</p>
                            <img src={image1} />
                        </div>
                        <div>
                            <p className={f.section1gridtitle}>
                                Set up Wall-et.
                            </p>
                            <p>All you need to enter is your email and password. When you shop online, your information should automatically populate.</p><br />
                            <img src={image2} />
                        </div>
                        <div className={f.section1grid}>
                            <p className={f.section1gridtitle}>
                                Make purchases in a secure way.
                            </p>
                            <p>One of the benefits of carrying out purchases with 'Wall-et' is that your card number is never provided and makes it nearly impossible for a fraudster to take your card information.</p><br />
                            <img src={image3} />
                        </div>
                    </div> <br/>
                    <div className={f.section2}>
                        <div className={f.section2grid}>
                        <p className={f.section2gridtitle}> 
                        Is it secure? 
                        <button className={f.button} onClick={()=> setShow({...show, q2: !show.q2})}>
                        {show.q2? '-' : '+' }
                        </button>
                        </p>
                            {show.q2? <p>Yes. 'Wall-et' uses security features that are build into your device to protect <br />
                            your transactions. Additionally, you will be required to authenticate yourself before loging in.
                            <br />One of the authentication steps that 'Wall-et' employs is facial recognition.<br />
                            We don't have access to your full account number.
                            </p> : null}
                        </div>
                    <div className={f.section2grid}>
                        <p className={f.section2gridtitle}>
                            What if my credit/debit card is lost or stolen?
                            <button className={f.button} onClick={()=> setShow({...show, q3: !show.q3})}>
                            {show.q3? '-' : '+' }
                            </button>
                            </p>
                            {show.q3? <p>If your card is lost or stolen, please notify us immediately at +54 411154545444<br />
                            We will cancel your card. When the bank issue you a new card and the new card is activated, you <br />
                            will need to enroll it again in 'Wall-et'.</p> : null}
                        </div>
                        <div className={f.section2grid}>
                        <p className={f.section2gridtitle}> 
                        How do I reset my password?  
                        <button className={f.button} onClick={()=> setShow({...show, q1: !show.q1})}>
                            {show.q1? '-' : '+' }
                            </button>
                        </p> 
                            {show.q1? <p>You can reset your password yourself by following our automated procedure.<br />
                            Click <a href="/recoverpassword">here</a>.Enter the e-mail address registered on your<br />
                            'Wall-et' account, and hit 'Submit'. You will then receive an e-mail from us instructing <br />
                            you how to reset your password.</p> : null}
                        </div>
                    </div>
                </div>
                <footer className={f.footer}> <p> Copyright© 2021 Wall-et</p></footer>
        </div>

    )
}

// jejeje

export default Frecuentlyquestions
