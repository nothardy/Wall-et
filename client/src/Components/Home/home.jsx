import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Admin from './Admin/admin';
import Bar from '../Bar/bar';
import User from './User/user';
/* import TransactionHistory from './Transactions';
import Balance from './Balance'; */
import { getDateUser } from '../../Redux/Actions/Home';


//import h from './home.module.css';

const Home = () =>{
    const store = useSelector(state => state.homeReducer.User);
    const dispatch = useDispatch();
    let [admin, setAdmin] = useState({
        status:false,
        mail:"walter@hotmail.com"
    });
    let [firstRender, setFirstRender] = useState(true);
    useEffect(() => {
        if(firstRender=== true){
            dispatch(getDateUser(admin.status, admin.mail));/* Aca tendria que ir true|| false dependiendo si es admi o user */
            setFirstRender(firstRender = !firstRender)
        }
    }, [firstRender, dispatch]);

    return(
        <div>
            <Bar/>
            
            {
                admin.status === true? <Admin/>
                : <User/>
            }
        </div>
    )
}
export default Home;