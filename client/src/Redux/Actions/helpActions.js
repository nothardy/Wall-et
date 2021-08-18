<<<<<<< HEAD
import axios from 'axios';
import swal from 'sweetalert';

const USER_HELP_REQUEST = 'USER_HELP_REQUEST';
const USER_HELP_SUCCESS = 'USER_HELP_SUCCESS';

axios.defaults.baseURL = 'http://localhost:3001/';


export const help = ({ mail, subject, message }) => (dispatch) => {
    dispatch({ type: USER_HELP_REQUEST, payload: { mail, subject, message }});
   return axios.post('/help', { mail, subject, message })

   .then(response => {
     dispatch({ type: USER_HELP_SUCCESS, payload: response.data });
     swal('Message sent', { icon : 'success' })
    })
   
   .catch(error => swal('Maintenance problems', { icon: 'warning'}));
};

=======
import axios from "axios";
import swal from "sweetalert";

const USER_HELP_REQUEST = "USER_HELP_REQUEST";
const USER_HELP_SUCCESS = "USER_HELP_SUCCESS";

//axios.defaults.baseURL = 'http://localhost:3001/';

export const help =
  ({ mail, subject, message }) =>
  (dispatch) => {
    dispatch({ type: USER_HELP_REQUEST, payload: { mail, subject, message } });
    return axios
      .post("/help", { mail, subject, message })

      .then((response) => {
        dispatch({ type: USER_HELP_SUCCESS, payload: response.data });
        swal("Message sent", { icon: "success" });
      })

      .catch((error) => swal("Maintenance problems", { icon: "warning" }));
  };
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
