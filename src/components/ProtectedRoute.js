import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isauth, ...rest }) => {
  return (
   isauth ? 
    <Route {...rest} component={Component} />
    :
   <Redirect to="/login" />
  );
};



export default ProtectedRoute;