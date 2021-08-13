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
                                Adding a credit card.
                            </p>
                            <p>After linking your credit cards through Wall-et, credentials are encrypted.  Your privacy is important for us. </p>
                            <img src={image1} />
                        </div>
                        <div>
                            <p className={f.section1gridtitle}>
                                Checking out with Wall-et.
                            </p>
                            <p>All you need to know is your email and password so
                                you can forget all your credit card numbers and
                                secret codes.</p><br />
                            <img src={image2} />
                        </div>
                        <div className={f.section1grid}>
                            <p className={f.section1gridtitle}>
                                Shopping securely.
                            </p>
                            <p>When you pay with Wall-et, you don’t expose your
                                financial information to sellers. All you need to pay is
                                your login and password–your sensitive information is
                                never shared with sellers.</p><br />
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
                            {show.q2? <p>Wall-et is the safer way to pay because we keep your financial information private. It isn’t <br/>
                                shared with anyone else when you shop, so you don't have to worry about paying businesses <br/>
                                and people you don't know.</p> : null}
                        </div>
                    <div className={f.section2grid}>
                        <p className={f.section2gridtitle}>
                            Do I need a balance in my account to use it? 
                            <button className={f.button} onClick={()=> setShow({...show, q3: !show.q3})}>
                            {show.q3? '-' : '+' }
                            </button>
                            </p>
                            {show.q3? <p>You do not need to have any balance in your account to use Wall-et. Similar to a physical wallet, <br/>
                                when you are making a purchase, you can choose to pay for your items with any of the credit <br/>
                                cards that are attached to your account. There is no need to pre-fund your account.</p> : null}
                        </div>
                        <div className={f.section2grid}>
                        <p className={f.section2gridtitle}> 
                        How can I recover my password?  
                        <button className={f.button} onClick={()=> setShow({...show, q1: !show.q1})}>
                            {show.q1? '-' : '+' }
                            </button>
                        </p> 
                            {show.q1? <p>If you are having issues signing into your account because you forgot password,<br/>
                                 we can help you recover this information <a href="/recoverpassword">here</a>.</p> : null}
                        </div>
                    </div>
                </div>
                <footer className={f.footer}> <p> Copyright© 2021 Wall-et</p></footer>
        </div>

    )
}

// jejeje

export default Frecuentlyquestions
