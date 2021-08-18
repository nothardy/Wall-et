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
