import axios from 'axios';
import swal from 'sweetalert';

const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });

      const data = await axios.post('http://localhost:3001/login', {
        email,
        password,

      });
      switch (data.request.status) {
        case 200:
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data.data,
          });
          localStorage.setItem("userInfo", JSON.stringify(data));
          window.location.href = "/home";
          break;
        case 401:
          dispatch({
            type: USER_LOGIN_ERROR,
            payload: data.error,
          });
          swal("Not allow", { icon: "warning" });
          break;
        case 500:
          dispatch({
            type: USER_LOGIN_ERROR,
            payload: data.error,
          });
          swal("Internal server error", { icon: "warning" });
          break;
        default:
          break;
      }
    } catch (error) {
      swal("Credenciales Incorrectas", { icon: "warning" });
      dispatch({
        type: USER_LOGIN_ERROR,
        payload: error,
      });
    }
  };