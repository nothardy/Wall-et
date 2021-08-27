import { combineReducers } from "redux";
import homeReducer from "./Home";
import loginReducer from "../Reducer/loginState";
import contactsReducer from "./Contacts_Reducer";
import transactionsReducer from "../Reducer/Transactions_Reducer";
import faceReducer from "./FaceRecognition_Reducer";
export default combineReducers({
  homeReducer,
  loginReducer,
  contactsReducer,
  transactionsReducer,
  faceReducer
});
