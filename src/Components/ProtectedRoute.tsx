import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './ComponentsPages/AuthContext';


interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    // Si no hay un token, redirige al usuario a la página de inicio de sesión
    return <Navigate to="/login" replace />;
  }

  // Si hay un token, renderiza los hijos (el componente protegido)
  return children;
};

export default ProtectedRoute;
