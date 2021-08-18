<<<<<<< HEAD
//import ruta_balance
import axios from "axios";
export const USER_INFO = "USER_INFO";

export const getUserInfo = () => {
  return async (dispatch) => {
    const userInfo = await axios.get();
    dispatch({
      type: USER_INFO,
      payload: userInfo.data,
    });
  };
};
/*  export function getGames() {
        return (dispatch) => {
          axios.get(/videogames).then((response) => {
            dispatch({ type: GET_GAMES, payload: response.data });
          });
        };
      } */
=======

>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
