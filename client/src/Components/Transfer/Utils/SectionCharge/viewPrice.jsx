import React from 'react';

import vp from './viewPrice.module.css';

const ViewPrice = ({ price, changePrice}) => {
    return (
        <button type='button' name="amount" className={vp.btnContainer} value={price} onClick={ (e) => changePrice(e)}> 
            ${price} 
        </button>
    )
}

export default ViewPrice;
