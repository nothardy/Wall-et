import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Add from './add.png';
import div from 'react-vanilla-tilt'
import { getUserByCVU, resetStore } from '../../../../Redux/Actions/Transactions';
import CardTransfer from './cardTransfer';
import t from './transfer.module.css'


const Transfer = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state.transactionsReducer)
    let [trasaction , setTrasaction] = useState(false);
    const [codeCVU , setCodeCVU] = useState({
        cvu: "",
    });
    const toggleTransaction = () =>{
        setTrasaction(trasaction = !trasaction)
    }

    const handleChange = (e) => {
        setCodeCVU({...codeCVU,cvu : e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(getUserByCVU(codeCVU))
        alert('se envio', codeCVU.cvu)
        setCodeCVU({...codeCVU, cvu : ""})

    }
    return (
        <div className={t.container}>
            <div className={t.header} onClick={ () => toggleTransaction()}>
                <img src={Add} alt="add" />
                <div className={t.left}>
                    <h2>Trasnferir</h2>
                    <span>con CBU/CVU</span>
                </div>
            </div>
            {
                trasaction && <div className={t.container_CVU}>
                    {!store.dataByCBU ? 
                        <div>{/* CAMBIAR/MAQUETEAR UN DIV */}
                            <form onSubmit={ (e) => handleSubmit(e)}>
                                <input type="text" name="codeCVU" id={t.input__codeCVU} value={codeCVU.cvu} onChange={ (e) => handleChange(e)}/>
                                <button type='submit' id={t.btnSubmit}>Continue</button>
                            </form>
                        </div>
                    : <CardTransfer/> /* <div className={t.senes}><h3>ACA IRIA NEW COMPONET</h3></div> */
                    }
                </div>
            }
        </div>
    )
}

export default Transfer;