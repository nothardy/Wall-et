import axios from 'axios';
import swal from 'sweetalert';

const ADD_WALLETCARD_REQUEST='ADD_WALLETCARD_REQUEST';
const ADD_WALLETCARD_SUCCESS='ADD_WALLETCARD_SUCCESS';

axios.defaults.baseURL = 'http://localhost:3001/';

export const addWalletCard = () => async (dispatch) => {
    //dispatch({ type: ADD_WALLETCARD_REQUEST, payload: { cardNumber, codeSecurity, expirationDate }});
    return axios.get('/mycard')
    .then(response => {
      dispatch({ type: ADD_WALLETCARD_SUCCESS, payload: response.data });
      //swal('Wall-et Card added succesfully!', { icon: 'success'});
     })
    .catch(error => swal("We couldn't add the Wall-et Card. Please try again", { icon: 'error'}));
 };