import axios from 'axios';
import swal from 'sweetalert';

const USER_FORGOTPASSWORD_REQUEST;
const USER_FORGOTPASSWORD_SUCCESS;

axios.defaults.baseURL = 'http://localhost:3001/';

export const forgot = (mail) => async (dispatch) => {
    dispatch({ USER_FORGOTPASSWORD_REQUEST, payload : mail });
    return axios.post(mail)
    .then(response => {
    dispatch({ USER_FORGOTPASSWORD_SUCCESS, payload: response.data });
    window.location.href = "/resetpassword"
    })
    .catch(error => swal('User Not Found', 'error'));
}