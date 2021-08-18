import React, { useState } from 'react'
import Card from './card'
import Cash from './cash'

import c from './index.module.css'


const Charge = () => {
    let [cashOrCard, setCashOrCard] = useState('1')
    
    const handleChange = (e) => {
        setCashOrCard(cashOrCard = e.target.value)
    }
    return (
        <div className={c.container}>
            <div className={c.left}>
                <Card/>
            </div>
            <div className={c.right}>
                <h3>Enter cash</h3>
                <Cash/>
            </div>
        </div>
    )
}

export default Charge;
