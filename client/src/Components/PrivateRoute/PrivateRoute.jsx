import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
    const token = localStorage.getItem('token')
    return (
        <Route {...rest} render={props => (
            token?
                <Component {...props} />
            : <Redirect to="/home" />
        )} />
    );
};

export default PrivateRoute;