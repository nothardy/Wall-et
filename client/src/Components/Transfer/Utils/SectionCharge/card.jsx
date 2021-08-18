<<<<<<< HEAD
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
=======
import React from "react";

import cd from "./card.module.css";

const Card = () => {
  return (
      <div className={cd.container}>
        <h1>Credit Card feature coming soon...</h1>
        {/* <img
          src={"https://media3.giphy.com/media/bAplZhiLAsNnG/giphy.gif"}
          alt=""
        /> */}
 <img
          src={"https://media.giphy.com/media/cJHeQTbMltsjcCHiVs/giphy.gif"}
          alt=""
        /> 

      </div>
  );
};
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9

export default Card;
