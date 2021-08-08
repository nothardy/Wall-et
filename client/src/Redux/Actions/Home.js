import axios from 'axios';

export const GET_DATE_USER = 'GET_DATE_USER';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const ADMIN_GET_USER = 'ADMIN_GET_USER';
export const ADMIN_GET_DATE_USERS = 'ADMIN_GET_DATE_USERS';

const testInfo =  [
    {
      email:'TonyElTucu@gmail.com',
      id:1
    } ,
    {
      email:'LaMartu@gmail.com',
      id:2
    },
    {
      email:'GonzaloEmanuel@gmail.com',
      id:3
    },
    {
      email:'Georgina@gmail.com',
      id:4
    },
    {
      email:'Milagros@gmail.com',
      id:5
    },
    {
      email:'Celeste@gmail.com',
      id:6
    },
    {
      email:'Camila@gmail.com',
      id:7
    },
    {
      email:'JulianWey@gmail.com',
      id:8
    },
    {
      email:'Walter@gmail.com',
      id:9
    }
  ]

export const getDateUser = (state, mail) =>{ 
    /* Trae la date de la cuenta del usuario logeado. */
    return async function dispatch(dispatch){
        try{
          const token = localStorage.getItem('token')
            const {data} = await axios.get(`http://localhost:3001/home`, { headers: { 'x-access-token': token }})
            return dispatch({type:GET_DATE_USER, payload:data})
        }
        catch(err){
            alert("error en getDateUser",err)
            /* Quitar esto cuando tenga rutas de back */ 
        }
    }  
}

export const adminGetUser = (email) =>{
    return async function dispatch(dispatch){
      /* Te machea por correo unico */
        try{
            const {data} = await axios.get(`http://localhost:3001/adminSearch?mail=${email}`)
            console.log(data)
            return dispatch({type:ADMIN_GET_USER, payload:[data]})/* ACA tendria que devolverme un array */
        }
        catch(err){
          alert('err, route admin', err)
          return dispatch({type:ADMIN_GET_USER, payload:[{email:'franco@gmail.com', id:10}]})
        }
    }
}

export const adminGetDateUsers = (status) => {
    /* Action la cual, filtra por status(aprobado, adeudor o congelador) */
    return async function dispatch(dispatch){
        try{
            const {data} = await axios.get(`http://localhost:3001/admin/${status}`)
            return dispatch({type:ADMIN_GET_DATE_USERS, payload: data})
        }
        catch(err){
          alert("chipiendo admin",err)
          return dispatch({type:ADMIN_GET_DATE_USERS, payload:testInfo})
        }
    }
}