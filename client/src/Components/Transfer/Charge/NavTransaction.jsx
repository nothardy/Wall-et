import React, { useState } from 'react'
import DefaultText from './Methods/defaultText'
import Card from './Methods/card';
import Transfer from './Methods/transfer';
import Cash from './Methods/cash';

import Charge from './charge';

import nt from './NavTransaction.module.css'

const NavTransaction = () => {
    let [section, setSection] = useState('4')
    
    const handleChange = (e) => {
        setSection(section = e.target.value)
    }

    return (
        <div className={nt.container}>

            <div className={nt.bar}>
                <button className={nt.btnTransfer} onClick={ (e) => handleChange(e)} value='1'>Transfer</button>
                <button className={nt.btnTransfer} onClick={ (e) => handleChange(e)} value='2'>Charge</button>
                <button className={nt.btnTransfer} onClick={ (e) => handleChange(e)} value='3'>History of Trasactions</button>  
            </div>
            <div className={nt.body}>
                { section === '0'? <DefaultText/> : section === '1'? <Transfer/> : section === '2'? <Charge/>: 'hola'/* <Cash/> */}
            </div>
        </div>
    )
}

export default NavTransaction;
