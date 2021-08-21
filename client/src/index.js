import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/Store";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

<<<<<<< HEAD

//axios.defaults.baseURL =  process.env.REACT_APP_API || "http://localhost:3001";
=======
 //axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001/"; 
>>>>>>> 5a574fd29b5cb532199718e22a67ffb9437dc599
axios.defaults.baseURL = "http://localhost:3001/";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
