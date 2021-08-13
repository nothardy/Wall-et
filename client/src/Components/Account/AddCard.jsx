import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import c from './AddCard.module.css';

function AddCard({ close }) {
    const history = useHistory();
    //const dispatch = useDispatch();
    const user = useSelector((state) => state.homeReducer.User);
    const [updateinfo, setUpdateInfo] = useState({
        card_num: '',
        card_name: '',
        card_expiration_data: '',
        card_security_num: ''
    })

    function handleInputChange(e) {
        setUpdateInfo({
            ...updateinfo,
            [e.target.name]: e.target.value
        });
    }
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await fetch('http://localhost:3001/cards',
                {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updateinfo),
                })
            swal('Card created succesfully!', "You clicked the button!", "success");
            history.push('/account');
        } catch (err) {
            swal('We could not add Card. Please try again.', "You clicked the button!", "error");
        }
    }


    return (
        <div className={c.container}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div ><p>Number of credit or debit Card:</p></div>
                <input className='' type="text" onChange={handleInputChange} placeholder={user.account_data.cards.card_num}
                    value={updateinfo.card_num} name="card_num" />
                <div ><p>Name in the Card:</p></div>
                <input className='' type="text" onChange={handleInputChange} placeholder={user.account_data.cards.card_name}
                    value={updateinfo.card_name} name="card_name" />
                <div ><p>Issue date:</p></div>
                <input className='' type="text" onChange={handleInputChange} placeholder={user.account_data.cards.card_expiration_data}
                    value={updateinfo.card_expiration_data} name="card_expiration_data" />
                <div ><p>Security code:</p></div>
                <input className='' type="password" placeholder={user.account_data.cards.card_security_num} name='card_security_num'
                    value={updateinfo.card_security_num} onChange={handleInputChange} />
                <button className='' type="submit" value="" name=""> Add New Card </button>
                <button className='' onClick={() => close()}>X</button>
            </form>
        </div>
    )
}

export default AddCard