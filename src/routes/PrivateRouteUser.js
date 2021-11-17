import { Route, Redirect } from "react-router-dom";
import React from "react";

const PrivateRouteUser = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/SigninCand" />;
};

export default PrivateRouteUser;
