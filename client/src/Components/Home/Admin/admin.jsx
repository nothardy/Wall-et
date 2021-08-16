import React, { useState } from 'react';
import Search from './Search/search';
import Filter from './Filter/filter';
import ArrowDown from './arrowDown.png';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import a from './admin.module.css'

export const Admin = () => {
    const store = useSelector( state => state.homeReducer);/* USAR store.User y store.AdminDateUser */
    let [filter, setFilter] = useState(false);
    const toggleFilter = () =>{ setFilter(filter = !filter) };
    
    return(
        store?
            <div className={a.containerAdmin}>
                { store.User ? <h1 className={a.titleAdmin}>Welcome {store.User.user_data.fullname} !</h1>: <h3>Cargando...Name</h3> }
                <div className={a.filtersAdmin}>
                    <Search/>
                    <button id={a.btn__filterAdmin} onClick={ () => toggleFilter() }>Filter <img src={ArrowDown} alt="Arrow Down" /></button>
                    { filter && <Filter/>} 
                </div>

                <div className={a.resultAdmin}>
                   {
                        store.AdminDateUser && Array.isArray(store.AdminDateUser) ?store.AdminDateUser.map(el => <Link to="/mywallet/hola" key={el.id}>{el.account_data.mail}</Link>) : null
                        
                   } 
                </div>
            </div>
        : <h3>Cargando...admin</h3>
        
    )
}
export default Admin;