import React from 'react';
import { useSelector } from 'react-redux';
import ViewContainer from './viewContainer';
import rd from './received.module.css'

const Received = ({widht, height}) => {

    const store = useSelector(state => state.homeReducer.User.account_data.transactions)
    const received = store.filter( el => !el.main);

    return (
        <div style={{width:`${widht}`, height:`${height}`, backgroundColor: 'green'}}>

            <div className={rd.header}>
                <h1>Transactions Recived</h1>
            </div>
            
            <div className={rd.body}>
                {
                    received? received.map( el => <ViewContainer 
                        key={el.id} name={el.from} amount={el.amount} 
                        type_transaction={el.type_transaction} state={el.state}
                        />)
                                            
                    : <h3>Not Found</h3>
                }
            </div>

        </div>
    )
}

export default Received;