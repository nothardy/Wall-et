import axios from "axios";
export const SEARCH_CONTACT = "SEARCH_CONTACT",
  SET_ORDER = "SET_ORDER",
  GET_CONTACTS = "GET_CONTACTS",
  ADD_CONTACT = "ADD_CONTACT";

/* export function searchGameByName(game) {
  return (dispatch) => {
    axios.get(`/videogames/?name=${game}`).then((response) => {
      dispatch({ type: SEARCH_GAME_BY_NAME, payload: response.data });
    });
  };
}
 */
//setear

export function getContacts() {
  return (dispatch) => {
    axios.get("https://localhost:3001/contacts").then((response) => {
      dispatch({ type: GET_CONTACTS, payload: response.data });
    });
  };
}

export function searchContact(email) {
  return (dispatch) => {
    axios
      .get(`https://localhost:3001/contacts?email=${email}`)
      .then((response) => {
        dispatch({ type: SEARCH_CONTACT, payload: response.data });
      });
  };
}

export function addContact(email) {
  return (dispatch) => {
    axios
      .post("https://localhost:3001/contacts", email, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        dispatch({ type: ADD_CONTACT, payload: response.data });
      });
  };
}

// export function postGame(game) {
//     return (dispatch) => {
//       axios
//         .post(`/videogames`, game, {
//           headers: { "Content-Type": "application/json" },
//         })
//         .then((response) => {
//           dispatch({ type: POST_GAME, payload: response.data.gameCreated });
//         });
//     };
//   }

export function setOrder(order) {
  return (dispatch) => {
    dispatch({
      type: SET_ORDER,
      payload: order,
    });
  };
}
