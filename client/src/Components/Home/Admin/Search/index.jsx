import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adminGetUser } from '../../../../Redux/Actions/Home';
import Lupa from './lupa.png'

import s from './index.module.css'

const Search = () => {
    const dispatch = useDispatch()
    let [input, setInput] = useState("");
    const handleChange = (e) =>{ setInput(input = e.target.value) }

    const hadleSubmit = (e) =>{
        e.preventDefault()
        /* alert("se ha enviado", input) */
        dispatch(adminGetUser(input))
        setInput(input = "")
    }
    return(
        <div className={s.container}>
            <form className={s.form} onSubmit={ (e) => hadleSubmit(e)}>
        
                <input type="text" name="input" value={input} onChange={ (e) => handleChange(e)} placeholder="Search by mail..." id={s.input}/>
                <img src={Lupa} alt="Lupa" id={s.btn__lupa} onClick={ (e) => hadleSubmit(e)}/>

            </form>
        </div>
        
    )
}
export default Search;