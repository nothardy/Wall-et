<<<<<<< HEAD
import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
    const token = localStorage.getItem('token') // funcion de windows, no de react, ni de redux
    return (
        <Route {...rest} render={props => (
            token?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;
=======
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token"); // funcion de windows, no de react, ni de redux
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
