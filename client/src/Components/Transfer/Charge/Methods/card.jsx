import React from 'react'
import Tilt from 'react-vanilla-tilt'

import cd from './card.module.css'

const Card = () => {
    return (
        
        <Tilt options={{  }}>
            <div className={cd.container}>
                You can put whatever you want inside this
            </div>
        </Tilt>

    )
}

export default Card;
