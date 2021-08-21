import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

import cd from "./card.module.css";

const promise = loadStripe("pk_test_51JQI2JCeyw6LldwN0d0nxUAzLjfHI3RjnvBOTVzOQyKlalz9abvQu82e2JoAzVzN99OxKZIHi5QQLKL0D0W8P5pb00jnDzx9Bb");

const Card = () => {
  return (
    <div className={cd.container}>
      <h1>Credit Card feature coming soon...</h1>
      {/* <img
          src={"https://media3.giphy.com/media/bAplZhiLAsNnG/giphy.gif"}
          alt=""
        /> */}
      <div>
        <Elements stripe={promise}>
          <CheckoutForm />
        </Elements>
      </div>
      
      {/* <img
        src={"https://media.giphy.com/media/cJHeQTbMltsjcCHiVs/giphy.gif"}
        alt=""
      /> */}
    </div>
  );
};

export default Card;
