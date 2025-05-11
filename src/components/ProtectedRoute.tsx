
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUser, UserRole } from '../context/UserContext';

interface ProtectedRouteProps {
  allowedRoles?: UserRole[];
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles,
  redirectPath = '/login',
}) => {
  const { isAuthenticated, hasRole } = useUser();
  const location = useLocation();

  // Check if user is authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  // If roles are specified, check if user has permission
  if (allowedRoles && !hasRole(allowedRoles)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // If user is authenticated and has the required role, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
