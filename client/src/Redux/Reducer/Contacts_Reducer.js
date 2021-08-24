import { getType } from "../../Components/Contacts/Filter";
import { filterContacts, searchContact } from "../../utils/FilterContacts";
import {
  ERASE_CONTACT_FILTERS,
  GET_CONTACTS,
  SEARCH_CONTACT,
  SET_ORDER,
  FAVORITE_CONTACT,
  ERASE_FAVORITE_CONTACT,
  GET_FAVORITES,
} from "../Actions/Contacts_Action";

const initialState = {
  contacts: [],
  searchedContact: [],
  orderedContacts: [],
  transactions: [],
  favorites: [],
  favoritesdelget: [],
};
//ordenar por prioridad
const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: filterContacts(action.payload).slice(),
        transactions: action.payload,
      };
    case SEARCH_CONTACT:
      return {
        ...state,
        searchedContact: searchContact(state.contacts, action.payload),
      };
    case ERASE_CONTACT_FILTERS:
      return {
        ...state,
        searchedContact: [],
        orderedContacts: [],
      };
    case SET_ORDER:
      return {
        ...state,
        orderedContacts: getType(action.payload, state.contacts).slice(),
      };
    case FAVORITE_CONTACT:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    
    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload.favorites,
      };
    case ERASE_FAVORITE_CONTACT:
      return {
        ...state,
        favorites: state.favorites.filter(
          (id) => id.mail !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default contactsReducer;
