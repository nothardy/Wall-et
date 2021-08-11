import { combineReducers } from "redux";
import homeReducer from "./Home";
import loginReducer from "../Reducer/loginState";
import contactsReducer from "./Contacts_Reducer";
export default combineReducers({
  homeReducer,
  loginReducer,
  contactsReducer,
});
