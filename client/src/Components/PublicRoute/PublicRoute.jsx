import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PublicRoute = ({component: Component, ...rest}) => {
    const token = localStorage.getItem('token') // funcion de windows, no de react, ni de redux
    return (
        <Route {...rest} render={props => (
            !token?
                <Component {...props} />
            : <Redirect to="/mywallet" />
        )} />
    );
};

export default PublicRoute;