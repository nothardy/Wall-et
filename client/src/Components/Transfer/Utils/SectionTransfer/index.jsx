import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Add from './add.png';
import swal from 'sweetalert';
import { getUserByCVU, resetStore } from '../../../../Redux/Actions/Transactions';
import CardTransfer from './cardTransfer';
import Contact from './contact';
import t from './index.module.css'


const Transfer = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state.transactionsReducer)
    let [trasaction , setTrasaction] = useState(false);
    const [codeCVU , setCodeCVU] = useState({ cvu: "",});
    const toggleTransaction = () => { setTrasaction(trasaction = !trasaction) };

    const handleChange = (e) => {
        setCodeCVU({...codeCVU,cvu : e.target.value})
    };

    const handleSubmit = async(e) =>{
        e.preventDefault()
        if(codeCVU.cvu.length < 1)return await swal("error!", "incomplete field!", "error");

        dispatch(getUserByCVU(codeCVU))
        setCodeCVU({...codeCVU, cvu : ""})
    };
    
    return (
        <div className={t.container}>
            <div className={t.header} onClick={ () => toggleTransaction()}>
                <img src={Add} alt="add" />
                <div className={t.left}>
                    <h2>Transferir</h2>
                    <span>con CBU/CVU</span>
                </div>
                
            </div>
            <Contact toggleTransaction={toggleTransaction} />
            
            {
                trasaction && <div className={t.overexposedComponent}>{/* Este seria el que se va a sobre exponer al de arriba */}
                    {!store.dataByCBU ? 
                        <div className={t.containerCVU} >
                        {/* <button value="0" onClick={(e)=> returnDefault(e)}></button>  Para volver al default*/}
                            <h3>Ingresá el CBU, CVU o mail.</h3>
                            <form onSubmit={ (e) => handleSubmit(e)}>
                                <input type="text" name="codeCVU" id={t.input__codeCVU} value={codeCVU.cvu} onChange={ (e) => handleChange(e)}/>
                                <button type='submit' id={t.btnSubmit}>Continue</button>
                            </form>
                        </div>
                    : <CardTransfer/>
                    }
                </div>
            }
        </div>
    )
}

export default Transfer;