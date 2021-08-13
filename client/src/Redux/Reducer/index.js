import { combineReducers } from 'redux';
import homeReducer from './Home';
import loginReducer  from '../Reducer/loginState';
import transactionsReducer from '../Reducer/Transactions_Reducer'

export default combineReducers({
  homeReducer,
  loginReducer,
  transactionsReducer,
});
