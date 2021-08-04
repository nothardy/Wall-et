import axios from 'axios';

export const GET_DATE_USER = 'GET_DATE_USER';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const ADMIN_GET_USER = 'ADMIN_GET_USER';
export const ADMIN_GET_DATE_USERS = 'ADMIN_GET_DATE_USERS';

const testInfo =  [
    {
      id: 100,
      from: "Julian",
      to: "user1",
      amount: 2000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "4/5/2021",
    } ,
    {
      id: 101,
      from: "Celeste",
      to: "user7",
      amount: 7000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "4/7/2021",
    },
    {
      id: 105,
      from: "Milagros",
      to: "user2",
      amount: 100,
      type_transaction: "Transfer",
      state: "done",
      transaction_date: "4/6/2021",
    },
    {
      id: 108,
      from: "Georgi",
      to: "myuser",
      amount: 7000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "4/7/2021",
    },
    {
      id: 104,
      from: "Camila",
      to: "user3",
      amount: 1000,
      type_transaction: "Transfer",
      state: "done",
      transaction_date: "4/5/2021",
    },
    {
      id: 100,
      from: "Gonzalo",
      to: "user6",
      amount: 3000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "4/4/2021",
    },
    {
      id: 100,
      from: "Walter",
      to: "user6",
      amount: 10000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "4/3/2021",
    }
  ]

export const getDateUser = (name) =>{ 
    return async function dispatch(dispatch){
        try{
            const {data} = await axios.get(`http://localhost:3001/home/${name}`)
            return dispatch({type:GET_DATE_USER, payload:data})
        }
        catch(err){
            alert("primer error",err)
            return dispatch({type:GET_DATE_USER, payload:{name:"Frank Smile", amount:"785"}})/* Quitar esto cuando tenga rutas de back */
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
            return dispatch({type:GET_TRANSACTIONS, payload:testInfo})/* Quitar esto cuando tenga rutas de back */
        }
    }  
}

export const adminGetUser = (email) =>{
    return async function dispatch(dispatch){
        try{
            const {data} = await axios.post(`http://localhost:3001/admin`,email)
            return dispatch({type:ADMIN_GET_USER, payload:data})
        }
        catch(err){
            alert("error admin",err)
        }
    }
}

export const adminGetDateUsers = (status) => {
    return async function dispatch(dispatch){
        try{
            const {data} = await axios.get(`http://localhost:3001/admin/${status}`)
            return dispatch({type:ADMIN_GET_DATE_USERS, payload:data})
        }
        catch(err){
            alert('err, route admin', err)
        }
    }
}