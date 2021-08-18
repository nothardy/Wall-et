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
