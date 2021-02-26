import React from "react";
import { Redirect, Route } from "react-router-dom";

//Task List:

import { Component } from "react";

//1. Build a PrivateRoute component that redirects if user is not logged in
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return localStorage.getItem("token")?(
                    <Component {...props} />
                ):(
                    <Redirect to="/" />
                )
            }} />
    )
}

export default PrivateRoute;