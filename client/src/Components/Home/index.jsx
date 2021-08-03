import React, { useEffect } from 'react';
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
    useEffect(() => {
        dispatch(getAmount());
        dispatch(getTransactions())
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