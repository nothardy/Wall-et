<<<<<<< HEAD
import axios from 'axios';
import swal from 'sweetalert';
export const GET_CODE_CASH = 'GET_CODE_CASH';
export const SEND_INFO_CHARGE = 'SEND_INFO_CHARGE';
export const GET_USER_FOR_CVU = 'GET_USER_FOR_CVU';
export const SENDING_TRANSACTIONS = 'SENDING_TRANSACTIONS';
export const RESET_DATA = 'RESET_DATA';


export const getCodeCash = (id) =>{ /* TERMINADAAAAAA */
    return async function (dispatch){
       try{
           console.log(typeof id)
            const {data} = await axios.get(`http://localhost:3001/transaction/entry?id=${id}`)
            return dispatch({type:GET_CODE_CASH , payload: data})
        }
        catch(err){
            alert('error en getCodeCash', err)
        }
    } 
}

export const sendChargeByCard = ({method, status}) =>{/* NO ESTA EN USO, SERIA PARA CARGAR POR CARD */
    return async function (dispatch){
       try{
            const {data} = await axios.put(`http://localhost:3001/transaction/entry?method=${method}`, status)
            return dispatch({type: SEND_INFO_CHARGE , payload: data})
        }
        catch(err){
            alert('error en sendInfoCharge', err)
        }
    } 
}

export const getUserByCVU = ({cvu}) =>{/* Ya ESTA TERMINADA */
    return async function (dispatch){
       try{
            const {data} = await axios.post('http://localhost:3001/transaction/transfer/verifyCVU', {cvu})
            return dispatch({type: GET_USER_FOR_CVU , payload: data})
        }
        catch(err){
            return swal("error!", "The user has not been found!", "error")
        }
    } 
}

export const sendingTransactions = (data) =>{
    return async function (dispatch){
       try{
            const {data} = axios.put('ruta', {data})
            return dispatch({type: SENDING_TRANSACTIONS , payload: data})
        }
        catch(err){
            alert('error en sendingTransactions', err)
        }
    } 
}

export const resetStore = () =>{
    return async function (dispatch){
       try{
            return dispatch({type: RESET_DATA , payload: null})
        }
        catch(err){
            alert('error en getUserByCVU', err)
        }
    } 
}
=======
/* eslint-disable */
import axios from "axios";
import swal from "sweetalert";
export const GET_CODE_CASH = "GET_CODE_CASH",
  SEND_INFO_CHARGE = "SEND_INFO_CHARGE",
  GET_USER_FOR_CVU = "GET_USER_FOR_CVU",
  SENDING_TRANSACTIONS = "SENDING_TRANSACTIONS",
  RESET_DATA = "RESET_DATA";

export const getCodeCash = (id) => {
  /* TERMINADAAAAAA */
  return async function (dispatch) {
    try {
      console.log(typeof id);
      const { data } = await axios.get(`/transaction/entry?id=${id}`);
      return dispatch({ type: GET_CODE_CASH, payload: data });
    } catch (err) {
      alert("Error in getCodeCash", err);
    }
  };
};

export const sendChargeByCard = ({ method, status }) => {
  /* NO ESTA EN USO, SERIA PARA CARGAR POR CARD */
  return async function (dispatch) {
    try {
      const { data } = await axios.put(
        `/transaction/entry?method=${method}`,
        status
      );
      return dispatch({ type: SEND_INFO_CHARGE, payload: data });
    } catch (err) {
      alert("Error in sendInfoCharge", err);
    }
  };
};

export const getUserByCVU = (info) => {
  /* Ya ESTA TERMINADA */
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        "/transaction/transfer/verifyCVU",
        info
      );
      return dispatch({ type: GET_USER_FOR_CVU, payload: data });
    } catch (err) {
      return swal("error!", "The user has not been found!", "error");
    }
  };
};

export const sendingTransactions = (data) => {
  return async function (dispatch) {
    try {
      const { data } = axios.put("ruta", { data });
      return dispatch({ type: SENDING_TRANSACTIONS, payload: data });
    } catch (err) {
      alert("Error in sendingTransactions", err);
    }
  };
};

export const resetStore = () => {
  return async function (dispatch) {
    try {
      return dispatch({ type: RESET_DATA, payload: null });
    } catch (err) {
      alert("Error in getUserByCVU", err);
    }
  };
};
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
