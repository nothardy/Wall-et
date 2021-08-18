<<<<<<< HEAD
import { combineReducers } from 'redux';
import homeReducer from './Home';
import loginReducer  from '../Reducer/loginState';
import transactionsReducer from '../Reducer/Transactions_Reducer'

export default combineReducers({
  homeReducer,
  loginReducer,
=======
import { combineReducers } from "redux";
import homeReducer from "./Home";
import loginReducer from "../Reducer/loginState";
import contactsReducer from "./Contacts_Reducer";
import transactionsReducer from "../Reducer/Transactions_Reducer";
export default combineReducers({
  homeReducer,
  loginReducer,
  contactsReducer,
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
  transactionsReducer,
});
