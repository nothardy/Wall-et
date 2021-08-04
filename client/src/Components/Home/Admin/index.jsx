import React, { useState } from 'react';
import Search from './Search';
import Filter from './Filter';
import ArrowDown from './arrowDown.png';
import { useSelector } from 'react-redux';
import s from './index.module.css'

const Admin = () => {
    const store = useSelector( state => state.User);/* TENDRIA QUE USAR store.User y store.AdminDateUser */
    let [filter, setFilter] = useState(false);
    const toggleFilter = () =>{
        setFilter(filter = !filter)
    }
    
    return(
        store?
            <div className={s.container}>
                <h1 className={s.title}>{`¡Hellou ${store.name || "Frank smile"}!`}</h1>
                <div className={s.filters}>
                    <Search/>
                    <button id={s.btn__filter} onClick={ () => toggleFilter() }>Filter <img src={ArrowDown} alt="Arrow Down" /></button>
                    { filter && <Filter/>} 
                </div>

            </div>
        : <h3>Cargando...admin</h3>
        
    )
}
export default Admin;