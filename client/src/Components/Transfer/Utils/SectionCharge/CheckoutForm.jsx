import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios'
export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const { error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    
    if(!error){
      try{
        const { id } = paymentMethod;
        console.log(paymentMethod)
        const {data} = await axios.post('transaction/card',{
          id,
          amount: (parseInt(amount) * 100),
          accountId: 'f4619e01-7074-4e42-8b7c-266dc72b5e4e',
        })
        
        setAmount(amount="")
        elements.getElement(CardElement).clear()/* Clear input of Card  */
        /* var ho= document.getElementsByName("amount") INTENTATO TOMAR EL VALOR DEL INPUT PARA LUEGO AGREGAR DATA A GUSTO
        console.log(ho) */
        /* console.log("Yo Quesee", data) */
      }
      catch(err){
        console.log(err.response)
      }
      var to= document.querySelector(".InputElement is-complete Input");
    console.log(to)
    }
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>

      <input type="number" id="aca" class="amount" value={amount} placeholder="ingrese el monto que desea cargar" onChange={handleChangeAmout} />
{/* PREGUNTAR MAÑANA SI HAY OTRA FORMA DE QUE EL INPUT SEA OBLIGATORIO */}
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a
          href={`https://dashboard.stripe.com/test/payments`}
        >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
    </form>
  );
}
