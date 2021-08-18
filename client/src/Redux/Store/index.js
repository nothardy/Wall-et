import { createStore, applyMiddleware } from "redux";
import rootReducers from "../Reducer/index";
import thunk from "redux-thunk";
<<<<<<< HEAD
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducers,
    composeWithDevTools(applyMiddleware(thunk)))

export default store;
=======
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
