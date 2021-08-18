import React from 'react'

import dt from './defaultText.module.css'

const DefaultText = () => {
    return (
        <div className={dt.container}>
            <h1>Wall-et</h1>
            <p className={dt.paragraph}>
                Here we commit ourselves so that you can have the best experience. 
            </p>

            <p className={dt.paragraph}>
                For this reason, we give you three ways to load money into your account. 
                Select the one you like the most!
            </p>
        </div>
    )
}

export default DefaultText;