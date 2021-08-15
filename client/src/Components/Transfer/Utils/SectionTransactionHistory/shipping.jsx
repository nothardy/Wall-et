import React from 'react'
import { useSelector } from 'react-redux';
import sg from './shipping.module.css'

const Shipping = ({widht, height}) => {

    const store = useSelector(state => state.homeReducer.User.account_data.transactions)
    const received = store.filter( el => el.main);

    return (
        <div style={{width:`${widht}`, height:`${height}`,backgroundColor: 'red'}}>

            <div className={sg.header}>
                <h3>Transactoins Shipping</h3>
            </div>
            
            <div className={sg.body}>
                {
                    received? received.map( el => <div>{el.to}</div> )
                    : <h3>Not Found</h3>
                }
            </div>

        </div>
    )
}


export default Shipping;
