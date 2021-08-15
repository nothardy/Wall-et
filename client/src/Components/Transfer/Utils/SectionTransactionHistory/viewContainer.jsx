import React from 'react'

import vc from './viewContainer.module.css'

const ViewContainer = ({name, amount, type_transaction, state}) => {
    return (
        <div className={vc.container}>
            <h2 id={vc.name}>{name}</h2>
            <h4 id={vc.amount}>{amount}</h4>
            <span id={vc.typeTransaction}>Type: {type_transaction}</span>
            <span id={vc.state}>Status: {state}</span>
        </div>
    )
}

export default ViewContainer;
