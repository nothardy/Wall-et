import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { adminGetDateUsers } from '../../../../Redux/Actions/Home';
//import f from './filter.module.css'

const Filter = () => {
    let [status, setStatus] = useState("");/* Porque no se me marca el status */
    const dispatch = useDispatch();
    const handleChange = (e) =>{ setStatus(status = e.target.value) };
    useEffect( () =>{
        if(status){ dispatch(adminGetDateUsers(status)) };
    },[status, dispatch]);

    return(
        <div className='{f.containerFilter}'>
           <label>Frozen status <input name="status" type="radio" value="Frozen" onClick={ (e) => handleChange(e)}/></label> 
           <label>Debtor status <input name="status" type="radio" value="Debtor" onClick={ (e) => handleChange(e)}/></label>
           <label>Approved status <input name="status" type="radio" value="Approved" onClick={ (e) => handleChange(e)}/></label>
        </div>
    )
}
export default Filter; 