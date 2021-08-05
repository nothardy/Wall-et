import axios from 'axios';
import swal from 'sweetalert';


const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';


axios.defaults.baseURL = 'http://localhost:3001/';


export const login = ({ mail, password }) => async (dispatch) => {
    
   dispatch({ type: USER_LOGIN_REQUEST, payload: { mail, password }});
   return axios.post('/auth/login', { mail, password })
   .then(response => {
     dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
     window.location.href = "/home";
    })
   
   .catch(error => swal('Wrong Credentials', { icon: 'warning'}));
   };