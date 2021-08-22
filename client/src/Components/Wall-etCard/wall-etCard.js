import React, { useState } from "react";
import Cards from "react-credit-cards";
import 'react-credit-cards/es/styles-compiled.css';
import { addWalletCard } from "../../Redux/Actions/walletActions";
import { useDispatch } from "react-redux";

const WalletCard = () => {
    const [info, setInfo] = useState({
        number: '',
        name: '',
        cvc: '',
        expiry: '',
        focus: '',
    })

    const dispatch = useDispatch();

    function handleInputChange (e) {
        setInfo({
            ...info, 
            [e.target.name]: e.target.value
        })
    }

    function handleFocusChange (e) {
        setInfo({
            ...info, 
            focus : e.target.name
        })
    }
    
    function handleSubmit (e) {
        e.preventDefault();
        dispatch(addWalletCard(info))
    }
    return (
        <div>
          <div>
            <div>
              <Cards
                number={info.number}
                name={info.name}
                expiry={info.expiry}
                cvc={info.cvc}
                focused={info.focus}  
              />
    
              <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <div>
                    <label htmlFor="number">Number of credit or debit Card:</label>
                  </div>
                  <input
                    type="text" 
                    name="number"
                    id='number'
                    placeholder="Card Number"
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                    pattern="[\d| ]{15,22}"
                    minLength="15"
                    maxlength="22"
                    required
                  />
                </div>
                <div>
                  <div>
                    <label htmlFor="name">Cardholder's Name:</label>
                  </div>
                  <input
                    type="text"
                    name="name"
                    id='name'
                    placeholder="Name"
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                    required
                  />
                </div>
                <div>
                  <div>
                    <div>
                      <label htmlFor="expiry">Expiration date:</label>
                    </div>
                    <input
                      type="text"
                      name="expiry"
                      id="expiry"
                      placeholder="Valid Date"
                      data-date-split-input="true"
                      min="2021-08"
                      max="2026-12"
                      onChange={handleInputChange}
                      onFocus={handleFocusChange}
                      pattern="\d\d\d\d"
                      maxlength="4"
                      required
                    />
                  </div>
                  <div>
                    <div>
                      <label htmlFor="cvc">CVC</label>
                    </div>
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      placeholder="CVC"
                      onChange={handleInputChange}
                      onFocus={handleFocusChange}
                      pattern="\d{3,4}"
                      maxlength="4"
                      required
                    />
                  </div>
                </div>
                <button type="submit" >Add Wall-et Card</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
    
    export default WalletCard; 
