import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  return allowedRoles.includes(user.role) ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
