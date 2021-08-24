import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements, cardNumberElement } from "@stripe/react-stripe-js";
import axios from 'axios'
import ViewPrice from "./viewPrice";
import cf from './CheckoutForm.module.css'

export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const listPrice = [50, 200, 500, 1000];
  let [amount, setAmount] = useState("")/* CONTROLA EL INPUT DE AMOUT */
  const handleChangeAmout = (e) =>{ setAmount(amount= e.target.value) }
  /* useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({items: [{ id: "xl-tshirt" }]})
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setClientSecret(data.clientSecret);
      });
  }, []); */

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };
  /* cardNumberElement.on('change', function(event) {
    event.elementType= "42424242424342";
    if (event.error) {
      // show validation to customer
    }
  }); */
 const handleChange = async (event) => {
  
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
 /* 
  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  }; */

  // Update an element with details collected elsewhere on your page
 /*  var myPostalCodeField = document.querySelector('input[name="postal"]');
  console.log(myPostalCodeField) */
  /* myPostalCodeField.addEventListener('change', function(event) {
    CardElement.update({value: {postalCode: event.target.value}});
  });
 */
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const { error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log(paymentMethod)
    
    if(!error){
      try{
        const { id } = paymentMethod;
        /* console.log(paymentMethod) */
        const {data} = await axios.post('transaction/card',{
          id,
          amount: amount/* (parseInt(amount) * 100) */,
          accountId: '7592edef-058b-40cc-8b97-ca11ee1e213c',
        })
        
        setAmount(amount="")
        
        elements.getElement(CardElement).clear()/* Clear input of Card  */
        /* var ho = CardElement.mount('.InputElement is-empty Input Input--empty');
        console.log(ho) */
        /* var ho= document.getElementsByName("postal")
        console.log(ho) */
        /* console.log("Yo Quesee", data) */
      }
      catch(err){
        console.log(err.response)
        /* var to= document.querySelector(".tarjeta");
        console.log(to.value) */
      }
      
    }
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit} className={cf.formContainer}>

      {/* <input type="number" id="aca" class="amount" required value={amount} placeholder="Choose the amount" onChange={handleChangeAmout}/> */}
      <div className={cf.containerTop}>
        <span className={cf.title}>Choose the amount to load</span>
        <div className={cf.moldAmount}>
                <img src="https://image.flaticon.com/icons/png/512/991/991952.png" alt="signo peso" />
                <input
                  type="number"
                  name="amount"
                  id={cf.inputAmount}
                  min="1"
                  required 
                  value={amount} 
                  onChange={handleChangeAmout}
                  autoComplete="off"
                  placeholder="0,00"
                />
        </div>

        <div className={cf.bottomListPrice}>
            {
              listPrice.map(el => <ViewPrice price={el} changePrice={handleChangeAmout} />)
            }
        </div>
        
      </div>
      


      <div className={cf.containerBottom}> 
        <div className={cf.top}>
          <CardElement id="card-element" className="tarjeta" options={cardStyle} onChange={handleChange} />

          {error && (
            <div className="card-error" role="alert">
              {error}
            </div>
          )}

        </div>

        <button id="submit" className={cf.bottomBtnSubmit}>Charge Now</button>
      </div>
      

        
     
      
        
      {/* <button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Charge now"
            )}
          </span>
        </button> */}
      
      {/* 
      Show a success message upon completion 
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a
          href={`https://dashboard.stripe.com/test/payments`}
        >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p> 
      */}
    </form>
  );
}
