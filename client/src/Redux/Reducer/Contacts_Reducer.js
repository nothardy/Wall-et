import { getType } from "../../Components/Contacts/Filter";
import {
  GET_CONTACTS,
  SEARCH_CONTACT,
  SET_ORDER,
} from "../Actions/Contacts_Action";


export const contactsHard = {
  contacts: [
    {
     id: 1, 
     email:'juarezgonzalo2@gmail.com',
     date_transaction: '2021-08-05T15:19:28.986',
    },
    {
      id :2,
      email:'julianpiñel2@gmail.com',
      date_transaction: '2021-08-05T15:19:28.986',
    },
    { 
      id :3,
      email:'francoaguero08@gmail.com',
      date_transaction: '2021-08-05T15:19:28.986',
    },
    {
      id :4,
      email:'walterrodriguez7@gmail.com',
      date_transaction: '2021-08-05T15:19:28.986',
    },
    {
      id :5,
      email:'camilajure1@gmail.com',
      date_transaction: '2021-08-05T15:19:28.986',
    },
    {
      id :6,
      email:'celestedubini@gmail.com',
      date_transaction: '2021-08-05T15:19:28.986' ,
    },
    {
      id :7,
      email:'georgina4@gmail.com',
      date_transaction: '2021-08-05T15:19:28.986',
    },
    {
      id :8,
      email:'milagros21@gmail.com',
      date_transaction: '2021-08-05T15:19:28.986',
    },
    {
      id :9,
      email:'leandronicolau03@gmail.com',
      date_transaction: '2021-08-05T15:19:28.986',
    },
  ],
  
};

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
