import React from "react";
import M from "materialize-css";
import {
    Route,
    Redirect
  } from "react-router-dom";



const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
    return (
        <Route
            path={path}
            {...rest}
            render={props => {
                return loggedIn ? (
                    <Comp {...props} />
                ) : (
                        <Redirect to='/login' />
                    );
            }}
        />
    );
};

export default ProtectedRoute;