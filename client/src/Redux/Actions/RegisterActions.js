import axios from "axios";
import swal from "sweetalert";

const USER_CONFIRMREGISTER_REQUEST = "USER_CONFIRMREGISTER_REQUEST",
USER_CONFIRMREGISTER_SUCCESS = "USER_CONFIRMREGISTER_SUCCESS";


//axios.defaults.baseURL = "http://localhost:3001/";

export const confirmRegister = (mail) => async (dispatch) => {
  dispatch({ type: USER_CONFIRMREGISTER_REQUEST, payload: mail });
  return axios
    .post("/register", { mail }, {
      headers: { "Content-Type": "application/json" }},)
    .then((response) => {
      dispatch({ type: USER_CONFIRMREGISTER_SUCCESS, payload: response.data });
      swal(
        "We have sent you a link confirmation  to your e-mail. Please, check your SPAM folder also",
        { icon: "success" }
      );
    })
    .catch((error) => swal("User Not Found", { icon: "error" }));
}