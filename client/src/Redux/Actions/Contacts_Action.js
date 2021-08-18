import axios from "axios";
export const SEARCH_CONTACT = "SEARCH_CONTACT",
  SET_ORDER = "SET_ORDER",
  GET_CONTACTS = "GET_CONTACTS",
  ADD_CONTACT = "ADD_CONTACT",
  ERASE_CONTACT_FILTERS = "ERASE;CONTACT_FILTERS";

// export function getContacts() {
//   return (dispatch) => {
//     // axios.get("/contacts").then((response) => {
//     //   dispatch({ type: GET_CONTACTS, payload: response.data });
//     // });
//     const token = localStorage.getItem("token");
//     axios
//       .get(`/contacts`, {
//         headers: { "x-access-token": token },
//       })
//       .then((response) => {
//         dispatch({ type: GET_CONTACTS, payload: response.data });
//       });
//   };
// }

export const getContacts = () => {
  /* Trae la date de la cuenta del usuario logeado. */
  return (dispatch) => {
    const token = localStorage.getItem("token");
    axios
      .get(`/contacts`, {
        headers: { "x-access-token": token },
      })
      .then((response) => {
        dispatch({ type: GET_CONTACTS, payload: response.data });
      });
  };
};

export function searchContact(mail) {
  return (dispatch) => {
    dispatch({ type: SEARCH_CONTACT, payload: mail });
  };
}

export function eraseContactFilters() {
  return (dispatch) => {
    dispatch({ type: ERASE_CONTACT_FILTERS });
  };
}

export function addContact(email) {
  return (dispatch) => {
    axios
      .post("/contacts", email, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        dispatch({ type: ADD_CONTACT, payload: response.data });
      });
  };
}

export function setOrder(order) {
  return (dispatch) => {
    dispatch({
      type: SET_ORDER,
      payload: order,
    });
  };
}