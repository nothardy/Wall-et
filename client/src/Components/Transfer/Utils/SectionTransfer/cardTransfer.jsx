import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Tilt from 'react-vanilla-tilt'
import { resetStore } from '../../../../Redux/Actions/Transactions';
import SignoPeso from './peso.png'
import { useHistory } from "react-router";
import swal from 'sweetalert';

import cf from './cardTransfer.module.css'
import axios from 'axios';

const CardTransfer = () => {
    const store = useSelector(state => state.transactionsReducer);
    const dataUser = useSelector(state => state.homeReducer.User);
    const {fullname, cvu, mail, id} = store.dataByCBU;
    const dispatch = useDispatch();

    var history = useHistory();

    useEffect( () =>{
        return () => { dispatch(resetStore()) } 
    },[dispatch])

    

    const [dataTransaction, setDataTransaction] = useState({
        from: dataUser.id,
        to: id,
        amount:""
    })

    const handleChange = (e) => { setDataTransaction({...dataTransaction, amount: e.target.value }) }
     
    const handleSubmit = async(e) =>{
        e.preventDefault()
        if(dataTransaction.amount.length < 1)return await swal("error!", "incomplete field!", "error");
        try{
            
            const {data} = await axios.post('http://localhost:3001/transaction/transfer', dataTransaction)
            await swal("Felicitaciones!", "Se envio con exito su transaccion!", "success");
            history.push("./mywallet") /*REDIRECCIONA */
        }
        catch(err){
            await swal("Lo sentimos!", "Usted no cuenta con cuyo monto!", "error");
        }
    }
    return (
        <div className={cf.container}>
            <Tilt style={{ widht: '28rem', height: '28rem', display: 'flex', flexDirection:'column', borderRadius: '6px' ,padding: '20px', padding:'6px', backgroundColor: 'white' }}> 
                <form onSubmit={ (e) => handleSubmit(e)}>
                <h3>How much money do you want to send <br /> to {fullname} ?</h3>
                <span>Mail: {mail}</span>
                <div className={cf.moldAmount}>
                    <img src={SignoPeso} alt="signo peso" />
                    <input type="number" name="amount" id={cf.inputAmount} min="1" onChange={handleChange} autoComplete="off" placeholder="0,00"/>
                </div>
                <span style={{fontSize:'1rem'}}>In your Wall-et you have ${dataUser ?dataUser.account_data.balance : 'nou money'}</span>
                <button type='submit' >Send</button>
                </form>
            </Tilt>
        </div>
    )
}

export default CardTransfer;
