import axios from 'axios';
import swal from 'sweetalert';

const USER_FORGOTPASSWORD_REQUEST;
const USER_FORGOTPASSWORD_SUCCESS;
const USER_CHANGEPASSWORD_REQUEST;
const USER_CHANGEPASSWORD_SUCCESS;

axios.defaults.baseURL = 'http://localhost:3001/';

export const forgot = (mail) => async (dispatch) => {
    dispatch({ USER_FORGOTPASSWORD_REQUEST, payload : mail });
    return axios.post('/resetPassword/reset_password', mail)
    .then(response => {
    dispatch({ USER_FORGOTPASSWORD_SUCCESS, payload: response.data });
    window.location.href = "/resetpassword"
    })
    .catch(error => swal('User Not Found', 'error'));
}

export const changePassword = ({id, password}) => async (dispatch) => {
    dispatch({ USER_CHANGEPASSWORD_REQUEST, payload : password });
    return axios.put(password)
    .then(response => {
    dispatch({ USER_CHANGEPASSWORD_SUCCESS, payload: response.data });
    window.location.href = '/login'
    })
    .catch(error => swal ("Passwords don't match", 'error'))
}