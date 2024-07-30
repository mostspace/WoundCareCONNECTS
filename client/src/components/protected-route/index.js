import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from 'src/auth/auth-provider';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isLoggedIn, user } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (user && user.role !== requiredRole) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default ProtectedRoute;