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

    const handleChange = (e) => { setDataTransaction({...dataTransaction, amount: e.target.value}) }
     
    async function handleSubmit (e){
        e.preventDefault()
        try{
            console.log(dataTransaction)
            const {data} = await axios.put('http://localhost:3001/transaction/transfer', {dataTransaction})
            alert("Se envio con exito su transaccion")
            history.push("./balance") /*REDIRECCIONA */
        }
        catch(err){
            console.log('SAlio un erro, trasferencia no realizada',err)
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
                    <input type="number" name="amount" id={cf.inputAmount} min="1" oninput="this.value=this.value.slice(0,this.maxLength||1/1);this.value=(this.value   < 1) ? (1/1) : this.value;" value={dataTransaction.amount} onChange={handleChange} autoComplete="off" placeholder="0,00"/>
                </div>
                <span style={{fontSize:'1rem'}}>In your Wall-et you have ${dataUser ?dataUser.account_data.balance : 'nou money'}</span>
                <button type='submit' >Send</button>
                </form>
            </Tilt>
        </div>
    )
}

export default CardTransfer;
