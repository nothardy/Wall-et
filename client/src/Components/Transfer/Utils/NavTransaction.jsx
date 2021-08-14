import React, { useState } from 'react'
import DefaultText from './SectionDefaultText/defaultText'
import Transfer from './SectionTransfer/index';
import Charge from './SectionCharge/index';

import nt from './NavTransaction.module.css'

const NavTransaction = () => {
    let [section, setSection] = useState('0')
    
    const handleChange = (e) => {
        setSection(section = e.target.value)
    }

    return (
        <div className={nt.container}>

            <div className={nt.bar}>
                <button className={nt.btnTransfer} onClick={ (e) => handleChange(e)} value='1'>Transfer</button>
                <button className={nt.btnTransfer} onClick={ (e) => handleChange(e)} value='2'>Charge</button>
                <button className={nt.btnTransfer} onClick={ (e) => handleChange(e)} value='3'>History of Transactions</button>  
            </div>
            <div className={nt.body}>
                { section === '0'? <DefaultText/> : section === '1'? <Transfer returnDefault={handleChange}/> : section === '2'? <Charge/>: 'holisss'/* <Cash/> */}
            </div>
        </div>
    )
}

export default NavTransaction;
