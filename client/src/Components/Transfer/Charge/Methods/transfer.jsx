import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Add from './add.png';
import swal from 'sweetalert';
import { getUserByCVU, resetStore } from '../../../../Redux/Actions/Transactions';
import CardTransfer from './cardTransfer';
import t from './transfer.module.css'


const Transfer = ({returnDefault}) => {
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

    const handleSubmit = async(e) =>{
        e.preventDefault()
        if(codeCVU.cvu.length < 1)return await swal("error!", "incomplete field!", "error");

        dispatch(getUserByCVU(codeCVU))
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
            <button value="0" onClick={(e)=> returnDefault(e)}></button>
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
                    : <CardTransfer returnDefault={returnDefault}/>
                    }
                </div>
            }
        </div>
    )
}

export default Transfer;