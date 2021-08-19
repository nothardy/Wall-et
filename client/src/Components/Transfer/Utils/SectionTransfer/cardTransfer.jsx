/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import form from "react-vanilla-tilt";
import { resetStore } from "../../../../Redux/Actions/Transactions";
import SignoPeso from "./peso.png";
import { useHistory } from "react-router";
import swal from "sweetalert";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import cf from "./cardTransfer.module.css";

import { addContact } from "../../../../Redux/Actions/Contacts_Action";

const CardTransfer = () => {
  const store = useSelector((state) => state.transactionsReducer);
  const dataUser = useSelector((state) => state.homeReducer.User);
  const { fullname, cvu, mail, id } = store.dataByCBU;
  const dispatch = useDispatch();
  const history = useHistory();
  

  useEffect(() => {
    return () => {
      dispatch(resetStore());
    };
  }, [dispatch]);

  let [securityLayer, setSecurityLayer] = useState({
    toglePassSecurity:false,
    show:false
  });
  const [dataTransaction, setDataTransaction] = useState({
    from: dataUser.id,
    to: id,
    amount: "",
    key:""
  });

  const handleChange = (e) => { setDataTransaction({ ...dataTransaction, [e.target.name]: e.target.value }) };
  const toggleShow = () => { setSecurityLayer({...securityLayer, show:!securityLayer.show}) }
  const handleSubmitSecurity = async (e) => {
    e.preventDefault();
    if (dataTransaction.amount.length < 1)
      return await swal("error!", "incomplete field!", "error");
      setSecurityLayer({...securityLayer, toglePassSecurity: !securityLayer.toglePassSecurity});
  };

  const handleSubmitData = async(e) =>{
    e.preventDefault();
    if (dataTransaction.key.length < 1)
    return await swal("error!", "incomplete field!", "error");
    try {
      const { data } = await axios.post(
        "/transaction/transfer",
        dataTransaction
      );
      await swal(
        "Congratulations!",
        "Your transaction has been sent successfully!",
        "success"
      );
      history.push("/mywallet");
    } catch (err) {
      if(err.response.data !== 'Key invalid'){ 
        await swal("We are sorry!", `${err.response.data}!`, "error");
        setDataTransaction({...dataTransaction, key:""})
        return await setSecurityLayer({...securityLayer, toglePassSecurity:!securityLayer.toglePassSecurity, show: false});
      }
      
      await swal("We are sorry!", `${err.response.data}!`, "error");
    }
  }

  return (
    <div className={cf.container}>
       {
        !securityLayer.toglePassSecurity? 

          <form onSubmit={(e) => handleSubmitSecurity(e)}>
            <h3>
              How much money do you want to send <br /> to {fullname} ?
            </h3>
            <span>Mail: {mail}</span>
            <div className={cf.moldAmount}>
              <img src="https://image.flaticon.com/icons/png/512/991/991952.png" alt="signo peso" />
              <input
                type="number"
                name="amount"
                id={cf.inputAmount}
                min="1"
               /*  max={`${dataUser.account_data.balance}`} */
                onChange={handleChange}
                autoComplete="off"
                placeholder="0,00"
              />
            </div>
            <span style={{ fontSize: "1rem" }}>
              In your Wall-et you have $
              {dataUser ? dataUser.account_data.balance : "nou money"}
            </span>
            <button className={cf.buttonsend} type="submit">Send</button>
          </form>

        :
          <form className={cf.formSecurity} onSubmit={ (e) => handleSubmitData(e)}>
            <h3 className={cf.textSecurity}>Coloca el DNI de tu cuenta para <br /> seguir con la transaccion. </h3>

            <div className={cf.containerInputAndIcon}>
              <input type={!securityLayer.show?"password": "text"} className={cf.inputKey} name="key" value={dataTransaction.key} onChange={(e) => handleChange(e)} placeholder="Coloca key" />
              {securityLayer.show ? (
                    <FontAwesomeIcon
                      onClick={toggleShow}
                      icon={faEye}
                      className={cf.icon}
                      id="show_hide"
                    />
                  ) : (
                    <FontAwesomeIcon
                      onClick={toggleShow}
                      icon={faEyeSlash}
                      className={cf.icon}
                      id="show_hide"
                    />
                  )
              }
            </div>
            
            <button className={cf.btnSubmitKey} type="submit" >Send</button>
          </form>
        }
      
    </div>
  );
};

export default CardTransfer;