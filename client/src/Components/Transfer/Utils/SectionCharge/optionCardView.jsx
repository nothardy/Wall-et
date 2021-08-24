import React from 'react'
import { nameCard } from "../../../../utils/NameBankCard";
import ocv from './optionCardView.module.css'

const OptionCardView = ({ values, chargeChange }) => {
    return (
        <div className={ocv.container} onClick={()=>chargeChange(values)}>
            <span className={ocv.span} >Headline: {values.card_name}</span>
            <br />
            <span className={ocv.span} >Data: {nameCard(values.card_num.split(""))} ending in <b>{values.card_num.slice((values.card_num.length -5), -1)}</b>
            </span>
            
        </div>
    )
}

export default OptionCardView;