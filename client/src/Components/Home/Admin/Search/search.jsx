import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adminGetUser } from '../../../../Redux/Actions/Home';
import Lupa from './lupa.png'
import swal from 'sweetalert';
import s from './search.module.css'

const Search = () => {
    const dispatch = useDispatch();
    let [input, setInput] = useState("");
    const handleChange = (e) =>{ setInput(input = e.target.value) };
    const hadleSubmit = (e) =>{
        e.preventDefault()
        if(!input)return swal("mail is requerid"); ;
        dispatch(adminGetUser(input))
        setInput(input = "")
    }

    return(
        <div className={s.containerSearch}>
            <form className={s.formSearch} onSubmit={(e) => hadleSubmit(e)}>
                <input type="text" name="input" value={input} onChange={ (e) => handleChange(e)} placeholder="Search by mail..." id={s.inputSearch}/>
                <img src={Lupa} alt="Lupa" id={s.btn__lupaSearch} onClick={ (e) => hadleSubmit(e)}/>
            </form>
        </div>
    )
}
export default Search;