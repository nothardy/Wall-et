import React from "react";
import Tilt from "react-vanilla-tilt";

import cd from "./card.module.css";

const Card = () => {
  return (
    <Tilt options={{}}>
      <div className={cd.container}>
        Credit Card feature coming soon...
        <img
          src={"https://media3.giphy.com/media/bAplZhiLAsNnG/giphy.gif"}
          alt=""
        />
      </div>
    </Tilt>
  );
};

export default Card;
