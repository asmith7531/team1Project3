import React from "react";
import {
    Route,
    Redirect
} from "react-router-dom";



const ProtectedRoute = ({ component: Comp, loggedIn, name, path, ...rest }) => {
    return (
        <Route
            path={path}
            {...rest}
            render={props => {
                if (loggedIn) {
                    console.log(props);
                    return <Comp {...props} name={name} />
                } else {
                    alert("Please Login or Create an Account");
                    return < Redirect to='/login' />
                };
            }}
        />
    );
};

export default ProtectedRoute;