import axios from 'axios';

export const GET_AMOUNT = 'GET_AMOUNT';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';

export const getAmount = (name) =>{ 
    return async function dispatch(dispatch){
        try{
            const {data} = await axios.get(`http://localhost:3001/home/${name}`)
            return dispatch({type:GET_AMOUNT, payload:data})
        }
        catch(err){
            alert("primer error",err)
            return dispatch({type:GET_AMOUNT, payload:'785'})/* Quitar esto cuando tenga rutas de back */
        }
    }  
}

export const getTransactions = (name) =>{ 
    return async function dispatch(dispatch){
        try{
            const {data} = await axios.get(`http://localhost:3001/home/${name}`)
            return dispatch({type:GET_TRANSACTIONS, payload:data})
        }
        catch(err){
            alert("segundo error",err)
            return dispatch({type:GET_TRANSACTIONS, payload:null})/* Quitar esto cuando tenga rutas de back */
        }
    }  
}