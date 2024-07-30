// src/components/PublicRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from 'src/auth/auth-provider';

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return <Navigate to="/" />; // Redirect to the dashboard if already logged in
  }

  return children;
};

export default PublicRoute;
