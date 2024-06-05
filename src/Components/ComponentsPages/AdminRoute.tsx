import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token');
    let isAuthorized = false;

    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            isAuthorized = decodedToken.RoleId === 1; // Verifica si el usuario es administrador
        } catch (error) {
            console.error('Error al decodificar el token:', error);
        }
    }

    return (
        <Route
            {...rest}
            render={props =>
                isAuthorized ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default AdminRoute;
