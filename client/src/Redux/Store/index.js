import { applyMiddleware, compose, createStore } from "redux";
import {reducer} from "../reducer/reducer";
import thunk from 'redux-thunk'
import {composeWithDevTools } from 'redux-devtools-extension'


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store