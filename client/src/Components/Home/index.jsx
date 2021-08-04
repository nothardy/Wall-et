import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Admin from './Admin/index';
import Bar from '../Bar/index';
import NavBar from './NavBar/index';
import TransactionHistory from './Transactions';
import Balance from './Balance';
import { getDateUser } from '../../Redux/Actions/Home';

import s from './index.module.css'

const Home = () =>{
    /* const store = useSelector(state => state)  La onda es poder hacer el cargando*/
    const dispatch = useDispatch();
    
    let [firstRender, setFirstRender] = useState(true)
    useEffect(() => {
        if(firstRender=== true){
            dispatch(getDateUser());
            setFirstRender(firstRender = !firstRender)
        }
        
      }, [dispatch]);

    return(
       
        <div className={s.container}>
            <Bar/>
            {/* <Admin/> */}
            <NavBar/>
            <TransactionHistory id={s.TransactionHistory} />
            <Balance/>
        </div>
      
    )
}
export default Home;