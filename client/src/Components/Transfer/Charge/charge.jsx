import React, { useState } from 'react'
import TrasferOrCash from './transferOrCash';

import c from './charge.module.css'

const Charge = () => {
    let [transeferAndCash, setTranseferAndCash] = useState(false);

    const toggleTransferOrCash = () =>{ setTranseferAndCash(transeferAndCash = !transeferAndCash) }

    return (
        <div className={c.container}>

            <button onClick={ () => toggleTransferOrCash()} id={c.btn_charge} >Charge</button>
            { transeferAndCash? <div className={c.box_trasferOrCash}> <TrasferOrCash close={toggleTransferOrCash}/> </div>:null }

        </div>
    )
}

export default Charge;
