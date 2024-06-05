import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { ProtectedRouteProps } from '../../Types/Types';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, allowedRoles }) => {
    const token = localStorage.getItem('token');
    let isAuthorized = false;
    let userRoleId = null;

    if (token) {
        try {
            console.log(token);
            const decodedToken: any = jwtDecode(token);
                        isAuthorized = !!decodedToken;
            userRoleId = decodedToken.RoleId;
        } catch (error) {
            console.error('Error al decodificar el token:', error);
        }
    }

    const location = useLocation();

    if (!isAuthorized) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!allowedRoles.includes(Number(userRoleId))) {
        // Si el usuario no tiene el rol permitido, mostramos la página de error solo si intenta acceder a la página de administración
        if (location.pathname === '/admin') {
            return <Navigate to="/404" state={{ from: location }} replace />;
        }
        // Para cualquier otra página no permitida, redirigimos al inicio o a una página de error general
        return <Navigate to="/admin" state={{ from: location }} replace />;
    }

    return element;
};

export default ProtectedRoute;
