<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Tilt from 'react-vanilla-tilt'
import PagoFacil from './pagofacil.png'
import { getCodeCash } from '../../../../Redux/Actions/Transactions'
import ch from './cash.module.css'

const Cash = () => {
    const storeOfUser = useSelector(state => state.homeReducer.User)
    const code = useSelector(state => state.transactionsReducer)
    const dispatch = useDispatch()
    useEffect( () => {
        storeOfUser && dispatch(getCodeCash(storeOfUser.id))
    },[dispatch])
    return (
        <Tilt>
            <div className={ch.container}>
                <p>Use this code whenever you want to fund your account. The minimum amount is $ 50.</p>
                <div id={ch.box_code}>{code.codePagofacil? code.codePagofacil : 'it has no code'}</div>
                <p>Show your code to the cashier at:</p>
                <img src={PagoFacil} alt="PagoFacil" />
            </div>  
        </Tilt>

    )
}
=======
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
      <div className={ch.container}>
        <h1>Enter cash</h1>
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
  );
};
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9

export default Cash;
