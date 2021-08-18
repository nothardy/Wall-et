<<<<<<< HEAD
import axios from 'axios';
import swal from 'sweetalert';


const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';

axios.defaults.baseURL = 'http://localhost:3001/';


export const login = ({ mail, password }) => async (dispatch) => {
   dispatch({ type: USER_LOGIN_REQUEST, payload: { mail, password }});
   return axios.post('/auth/login', { mail, password })
   .then(response => {
     dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data.user });
     window.location.href = "/mywallet";
     localStorage.setItem('token', response.data.token); // CONSULTAR A GEORGI
    })
   .catch(error => swal('Invalid Email or Password', { icon: 'error'}));
};

=======
import axios from "axios";
import swal from "sweetalert";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

//axios.defaults.baseURL = 'http://localhost:3001/';

export const login =
  ({ mail, password }) =>
  async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { mail, password } });
    return axios
      .post("/auth/login", { mail, password })
      .then((response) => {
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data.user });
        window.location.href = "/mywallet";
        localStorage.setItem("token", response.data.token); // CONSULTAR A GEORGI
      })
      .catch((error) => swal("Invalid Email or Password", { icon: "error" }));
  };
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
