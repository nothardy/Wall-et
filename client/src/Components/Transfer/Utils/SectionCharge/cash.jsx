import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tilt from "react-vanilla-tilt";
import PagoFacil from "./pagofacil.png";
import { getCodeCash } from "../../../../Redux/Actions/Transactions";
import ch from "./cash.module.css";

const Cash = () => {
  const storeOfUser = useSelector((state) => state.homeReducer.User);
  const code = useSelector((state) => state.transactionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    storeOfUser && dispatch(getCodeCash(storeOfUser.id));
  }, [dispatch, storeOfUser]);
  return (
    <Tilt>
      <div className={ch.container}>
        <p>
          Use this code whenever you want to fund your account. The minimum
          amount is $ 50.
        </p>
        <div id={ch.box_code}>
          {code.codePagofacil ? code.codePagofacil : "it has no code"}
        </div>
        <p>Show your code to the cashier at:</p>
        <img src={PagoFacil} alt="PagoFacil" />
      </div>
    </Tilt>
  );
};

export default Cash;
