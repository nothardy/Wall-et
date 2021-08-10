import axios from 'axios';
import swal from 'sweetalert';

<<<<<<< HEAD
const USER_FORGOTPASSWORD_REQUEST='USER_FORGOTPASSWORD_REQUEST';
const USER_FORGOTPASSWORD_SUCCESS='USER_FORGOTPASSWORD_SUCCESS';
const USER_CHANGEPASSWORD_REQUEST='USER_CHANGEPASSWORD_REQUEST';
const USER_CHANGEPASSWORD_SUCCESS='USER_CHANGEPASSWORD_SUCCESS';
=======
const USER_FORGOTPASSWORD_REQUEST = 'USER_FORGOTPASSWORD_REQUEST';
const USER_FORGOTPASSWORD_SUCCESS = 'USER_FORGOTPASSWORD_SUCCESS';
const USER_CHANGEPASSWORD_REQUEST = 'USER_CHANGEPASSWORD_REQUEST';
const USER_CHANGEPASSWORD_SUCCESS = 'USER_CHANGEPASSWORD_SUCCESS';
>>>>>>> 37bde7c92c3d1d6ee9a30f173c3972989bb9e90c

axios.defaults.baseURL = 'http://localhost:3001/';

export const forgot = (mail) => async (dispatch) => {
    dispatch({ type: USER_FORGOTPASSWORD_REQUEST, payload : mail });
    return axios.post('/resetPassword/reset_password', mail)
    .then(response => {
    dispatch({ type: USER_FORGOTPASSWORD_SUCCESS, payload: response.data });
    })
    .catch(error => swal('User Not Found', 'error'));
}

export const changePassword = ({userid, password}) => async (dispatch) => {
    dispatch({ type: USER_CHANGEPASSWORD_REQUEST, payload : password });
    return axios.post('/resetPassword/update_password?userid='+ userid, password)
    .then(response => {
    dispatch({ type: USER_CHANGEPASSWORD_SUCCESS, payload: response.data });
    window.location.href = '/login'
    })
    .catch(error => swal ("Passwords don't match", 'error'))
}