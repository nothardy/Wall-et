import { combineReducers } from 'redux';
import homeReducer from './Home';
import loginReducer  from '../Reducer/loginState';

export default combineReducers({
  homeReducer,
  loginReducer,
});
