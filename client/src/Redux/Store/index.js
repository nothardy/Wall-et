import rootReducer from "../Reducer/index";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
