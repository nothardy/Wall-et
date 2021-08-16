import React, { useState, useEffect } from "react";
import DefaultText from "./SectionDefaultText/defaultText";
import Transfer from "./SectionTransfer/index";
import Charge from "./SectionCharge/index";
import TransactionHistory from "./SectionTransactionHistory";
import BackImg from "./backButton.png";
import nt from "./NavTransaction.module.css";
import {useDispatch} from 'react-redux';
import {getDateUser} from '../../../Redux/Actions/Home.js'
import {useHistory} from 'react-router'

const NavTransaction = (props) => {
  let [section, setSection] = useState(props.section || "0");
const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDateUser());
  }, [dispatch]);

  const handleChange = (e) => {
    setSection((section = e.target.value));
    if(parseInt(e.target.value)===1)history.push("1");
    else if(parseInt(e.target.value)===2)history.push("2");
    else if(parseInt(e.target.value)===3)history.push("3");
    else if(parseInt(e.target.value)===0)history.push("0");
  };

  return (
    <div className={nt.container}>
      <div className={nt.bar}>
        <button id={nt.btnBack} value="0" onClick={(e) => handleChange(e)}>
          {" "}
          <img src={BackImg} alt="back image" /> Back
        </button>
        <button
          className={nt.btnOptions}
          onClick={(e) => handleChange(e)}
          value="1"
        >
          Transfer
        </button>
        <button
          className={nt.btnOptions}
          onClick={(e) => handleChange(e)}
          value="2"
        >
          Add Money
        </button>
        <button
          className={nt.btnOptions}
          onClick={(e) => handleChange(e)}
          value="3"
        >
          Transactions History
        </button>
      </div>
      <div className={nt.body}>
        {section === "0" ? (
          <DefaultText />
        ) : section === "1" ? (
          <Transfer />
        ) : section === "2" ? (
          <Charge />
        ) : (
          <TransactionHistory />
        )}
      </div>
    </div>
  );
};

export default NavTransaction;
