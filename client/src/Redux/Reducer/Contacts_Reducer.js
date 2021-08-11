import { getType } from "../../Components/Contacts/Filter";
import {
  GET_CONTACTS,
  SEARCH_CONTACT,
  SET_ORDER,
} from "../Actions/Contacts_Action";

const initialState = {
  contacts: [],
  searchedContact: [],
  orderedContacts: [],
};
//ordenar por prioridad
const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case SEARCH_CONTACT:
      return {
        ...state,
        searchedContact: action.payload,
      };

    case SET_ORDER:
      return {
        ...state,
        orderedContacts: getType(action.payload, state.contacts),
      };
    default:
      return state;
  }
};

export default contactsReducer;
