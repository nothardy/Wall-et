/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Add from "./add.png";
import swal from "sweetalert";
import {
  getUserByCVU,
  resetStore,
} from "../../../../Redux/Actions/Transactions";
import CardTransfer from "./cardTransfer";
import Contact from "./contact";
import t from "./index.module.css";
import { getDateUser } from "../../../../Redux/Actions/Home.js";

const Transfer = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.transactionsReducer);
  const account = useSelector((state) => state.homeReducer);
  let [trasaction, setTrasaction] = useState(false);
  const [info, setInfo] = useState({
    data: "",
    cvuAccount: account.User ? account.User.account_data.cvu : "",
    mailAccount: account.User ? account.User.account_data.mail : "",
  });
  const toggleTransaction = () => {
    setTrasaction((trasaction = !trasaction));
  };

  useEffect(() => {
    dispatch(getDateUser());
  }, [dispatch]);

  const handleChange = (e) => {
    setInfo({ ...info, data: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (info.data.length < 1)
      return await swal("error!", "incomplete field!", "error");

    dispatch(getUserByCVU(info));
    setInfo({ ...info, data: "" });
  };

  return (
    <div className={t.container}>
      <div className={t.header} onClick={() => toggleTransaction()}>
        <img src={Add} alt="add" />
        <div className={t.left}>
          <h2>Transfer</h2>
          <span>with CBU/CVU</span>
        </div>
      </div>
      <Contact toggleTransaction={toggleTransaction} />

      {trasaction && (
        <div className={t.overexposedComponent}>
          {/* Este seria el que se va a sobre exponer al de arriba */}
          {!store.dataByCBU ? (
            <div className={t.containerCVU}>
              {/* <button value="0" onClick={(e)=> returnDefault(e)}></button>  Para volver al default*/}
              <h3>Enter CBU, CVU o mail.</h3>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="text"
                  name="data"
                  id={t.input__codeCVU}
                  value={info.data}
                  onChange={(e) => handleChange(e)}
                />
                <button type="submit" id={t.btnSubmit}>
                  Continue
                </button>
              </form>
            </div>
          ) : (
            <CardTransfer />
          )}
        </div>
      )}
    </div>
  );
};

export default Transfer;