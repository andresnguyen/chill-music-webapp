import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export function PrivateRoute(props) {
  // Check if user is logged in
  // If yes, show route
  // Otherwise, redirect to login page
  const isLogin = Boolean(useSelector((state) => state.user.current._id))

  if (!isLogin) return <Redirect to="/auth/login" />;

  return <Route {...props} />;
}