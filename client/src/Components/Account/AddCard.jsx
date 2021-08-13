import React, { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import c from './AddCard.module.css';
import { getDateUser } from '../../Redux/Actions/Home';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'

function AddCard({ close }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.homeReducer.User);
    const [updateinfo, setUpdateInfo] = useState({
        id:'',
        card_num: '',
        card_name: '',
        card_expiration_data: '',
        card_security_num: ''
    })

    useEffect(() => {
        dispatch(getDateUser()); //Trae la DATA, no el date
},[]);

    useEffect(() => {
        setUpdateInfo(
            {
                ...updateinfo, 
                id: user?.id || "",
                card_num: '',
                card_name: '',
                card_expiration_data: '',
                // card_security_num: '',
                cvc: '',
               
                // cards: user?.account_data.cards || ""
            }
        )
    }, [user])
  
    const handleFocus = (e) => {
        setUpdateInfo({ 
            ...updateinfo,
            focus: e.target.name,  
        });
    }

    function handleInputChange(e) {
        setUpdateInfo({
            ...updateinfo,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await fetch('http://localhost:3001/card',
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
        // console.log("name => " , updateinfo.card_name)
        // console.log("number => " , updateinfo.card_num)
        // console.log("expiry => " , updateinfo.card_expiration_data)
        // console.log("cvc => " , updateinfo.card_security_num)
        // alert(JSON.stringify(updateinfo))
    }



    return (
        <div className={c.container}>
            <div >
                <div >
                <Cards
                    cvc={updateinfo.card_security_num}
                    expiry={updateinfo.card_expiration_data}
                    focused={updateinfo.focus}
                    name={updateinfo.card_name}
                    number={updateinfo.card_num}
                />
            
            <form onSubmit={(e) => handleSubmit(e)}>
                <div >
                <div ><p htmlFor="number" >Number of credit or debit Card:</p></div>
                <input  type="text" onFocus={handleFocus} onChange={handleInputChange} placeholder="Número de tarjeta"
                    name="card_num" maxLength="16"/>
                    </div>
                    <div >
                <div ><p htmlFor="Name">Name in the Card:</p></div>
                <input  type="text" onChange={handleInputChange} onFocus={handleFocus} placeholder='Name in the Card'
                     name="card_name" maxLength="30" />
                    </div>
                    <div >
                    <div >
                <div ><p htmlFor="expiry">Expiration date:</p></div>
                <input  type="date" data-date-split-input="true" min="2021-08" max="2026-12" onChange={handleInputChange} placeholder={user.account_data.cards.card_expiration_data}
                     name="card_expiration_data" onFocus={handleFocus} />
                    </div>
                    <div >
                <div ><p htmlFor="cvc">Security code:</p></div>
                <input  type="text" placeholder='CVC' name='cvc'
                // name='card_security_num'
                     onChange={handleInputChange}  onFocus={handleFocus} maxLength="4"/>
                    </div>
                    </div>
                <button  type="submit" value="" name=""> Add New Card </button>
                <button className='' onClick={() => close()}>X</button>
            </form>
        </div>
        </div>
            </div>
    )
}

export default AddCard
