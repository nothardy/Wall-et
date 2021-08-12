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
      fullname: "Gonzalo",
      mail: "juarezgonzalo2@gmail.com",
      date_transaction: "2021-08-05T15:19:28.986",
    },
    {
      id: 2,
      fullname: "Julian",
      mail: "julianpiñel2@gmail.com",
      date_transaction: "2021-04-09T15:19:28.986",
    },
    {
      id: 3,
      fullname: "Franco",
      mail: "francoaguero08@gmail.com",
      date_transaction: "2021-05-03T15:19:28.986",
    },
    {
      id: 4,
      fullname: "walter",
      mail: "walterrodriguez7@gmail.com",
      date_transaction: "2021-09-01T15:19:28.986",
    },
    {
      id: 5,
      fullname: "Camila",
      mail: "camilajure1@gmail.com",
      date_transaction: "2021-01-23T15:19:28.986",
    },
    {
      id: 6,
      fullname: "Celeste",
      mail: "celestedubini@gmail.com",
      date_transaction: "2021-03-02T15:19:28.986",
    },
    {
      id: 7,
      fullname: "Georgina",
      mail: "georgina4@gmail.com",
      date_transaction: "2021-02-05T15:19:28.986",
    },
    {
      id: 8,
      fullname: "Milagros",
      mail: "milagros21@gmail.com",
      date_transaction: "2021-10-05T15:19:28.986",
    },
    {
      id: 9,
      fullname: "Nicolas",
      mail: "leandronicolau03@gmail.com",
      date_transaction: "2021-20-10T15:19:28.986",
    },
  ],
};

const initialState = {
  contacts: [
    {
      id: 1,
      fullname: "Gonzalo",
      mail: "juarezgonzalo2@gmail.com",
      date_transaction: "2021-08-10T15:19:28.986",
    },
    {
      id: 2,
      fullname: "Julian",
      mail: "julianpiñel2@gmail.com",
      date_transaction: "2021-04-09T15:19:28.986",
    },
    {
      id: 3,
      fullname: "Franco",
      mail: "francoaguero08@gmail.com",
      date_transaction: "2021-05-03T15:19:28.986",
    },
    {
      id: 4,
      fullname: "walter",
      mail: "walterrodriguez7@gmail.com",
      date_transaction: "2021-07-01T15:19:28.986",
    },
    {
      id: 5,
      fullname: "Camila",
      mail: "camilajure1@gmail.com",
      date_transaction: "2021-01-23T15:19:28.986",
    },
    {
      id: 6,
      fullname: "Celeste",
      mail: "celestedubini@gmail.com",
      date_transaction: "2021-03-02T15:19:28.986",
    },
    {
      id: 7,
      fullname: "Georgina",
      mail: "georgina4@gmail.com",
      date_transaction: "2021-02-05T15:19:28.986",
    },
    {
      id: 8,
      fullname: "Milagros",
      mail: "milagros21@gmail.com",
      date_transaction: "2021-02-08T15:19:28.986",
    },
    {
      id: 9,
      fullname: "Nicolas",
      mail: "leandronicolau03@gmail.com",
      date_transaction: "2021-03-10T15:19:28.986",
    },
  ],
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
        orderedContacts: getType(action.payload, state.contacts).map(
          (contact) => contact
        ),
      };
    default:
      return state;
  }
};

export default contactsReducer;
