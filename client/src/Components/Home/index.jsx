import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Bar from '../Bar/index';
import NavBar from './NavBar/index';
import TransactionHistory from './Transactions';
import Balance from './Balance';
import s from './index.module.css'
import { getAmount, getTransactions } from '../../Redux/Actions/Home';

const Home = () =>{
    const store = useSelector(state => state)
    const dispatch = useDispatch();
    let [firstRender, setFirstRender] = useState(true)
    useEffect(() => {
        if(firstRender=== true){
            dispatch(getAmount());
            dispatch(getTransactions())
            setFirstRender(firstRender = !firstRender)
        }
        
      }, [dispatch]);

    return(
        <div className={s.container}>
            <Bar/>
            <NavBar/>
            <TransactionHistory /* id={s.TransactionHistory} */ />
            <Balance/>
        </div>
    )
}
export default Home;