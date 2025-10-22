import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/useUser';

// Ruta privada: si no hay token, redirige a /login
export const PrivateRoute = ({ children }) => {
  const { token } = useUser();
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

// Ruta solo pública: si hay token, redirige al home
export const PublicOnlyRoute = ({ children }) => {
  const { token } = useUser();
  if (token) return <Navigate to="/" replace />;
  return children;
};

export default PrivateRoute;
