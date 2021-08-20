import axios from "axios";
import swal from "sweetalert";
import Swal from 'sweetalert2'

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

//axios.defaults.baseURL = 'http://localhost:3001/';

export const login =
  ({
    mail,
    password
  }) =>
  async (dispatch) => {
    dispatch({
      type: USER_LOGIN_REQUEST,
      payload: {
        mail,
        password
      }
    });
    return axios
      .post("/auth/login", {
        mail,
        password
      })
      .then((response) => {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: response.data.user
        });
        if (!response.data.user.activated) Swal.fire({
          title: 'Please, verify your account',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        if (response.data.user.activated) {
          window.location.href = "/mywallet";
          localStorage.setItem("token", response.data.token);
        }
      })
      .catch((error) => swal("Invalid Email or Password", {
        icon: "error"
      }));
  };