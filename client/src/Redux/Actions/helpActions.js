import axios from 'axios';
import swal from 'sweetalert';

const USER_HELP_REQUEST = 'USER_HELP_REQUEST';
const USER_HELP_SUCCESS = 'USER_HELP_SUCCESS';

axios.defaults.baseURL = 'http://localhost:3001/';

export const help = ({ mail, mailSubject, mailBody }) => (dispatch) => {
    dispatch({ type: USER_HELP_REQUEST, payload: { mail, mailSubject, mailBody }});
   return axios.post('http://localhost:3001/help', { mail, mailSubject, mailBody })
   .then(response => {
     dispatch({ type: USER_HELP_SUCCESS, payload: response.data });
     swal('Message sent', { icon : 'success' })
    })
   
   .catch(error => swal('Maintenance problems', { icon: 'warning'}));
};

