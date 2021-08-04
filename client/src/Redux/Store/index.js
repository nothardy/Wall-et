import { createStore, applyMiddleware } from 'redux';
import loginReducer  from '../Reducer/loginState';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(loginReducer,
    composeWithDevTools(applyMiddleware(thunk)))

export default store;