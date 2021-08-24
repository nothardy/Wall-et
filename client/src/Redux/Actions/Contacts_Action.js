import axios from "axios";
import swal from 'sweetalert'
export const SEARCH_CONTACT = "SEARCH_CONTACT",
  SET_ORDER = "SET_ORDER",
  GET_CONTACTS = "GET_CONTACTS",
  ADD_CONTACT = "ADD_CONTACT",
  ERASE_CONTACT_FILTERS = "ERASE;CONTACT_FILTERS",
  FAVORITE_CONTACT = 'FAVORITE_CONTACT',
  ERASE_FAVORITE_CONTACT ='ERASE_FAVORITE_CONTACT',
  ADD_FAVORITE_CONTACT="ADD_FAVORITE_CONTACT",
  GET_FAVORITES="GET_DAVORITES";
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

export function addFavoriteContact(user) {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    axios
      .post("/contacts/favorites", user, {
        headers: { "Content-Type": "application/json" ,
        "x-access-token":token},
      })
      .then((response) => {
        dispatch({ type: ADD_FAVORITE_CONTACT, payload: response.data });
      });
  };
}

export function favoriteContact (favorite) {
  return (dispatch) => {
    
    dispatch({
      type:FAVORITE_CONTACT,
      payload: favorite,
    })
  }
}

export function getFavorites(){
  return (dispatch) => {
    const token = localStorage.getItem("token");
    axios
      .get(`/contacts/favorites`, {
        headers: { "x-access-token": token },
      })
      .then((response) => {
        dispatch({ type: GET_FAVORITES, payload: response.data });
      });
  };
}
export function eraseFavoriteContact (mail){
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try{
      const {data} = await axios.delete(`/deleteFav/favorites?mail=${mail}`,{
        headers: { "Content-Type": "application/json" , "x-access-token": token } 
      }
      )
        dispatch({ type: ERASE_FAVORITE_CONTACT, payload: data });
    }catch(err){
      alert("Error", err);
    }
  };
}

