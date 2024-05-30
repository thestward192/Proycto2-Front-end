import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CitaList from './ComponentApi/CitaList';


const Home = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUserData({
                  email: decodedToken.email,
                  telefono: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone'],
                  nombre: decodedToken.unique_name
              });
                console.log(decodedToken)
            } catch (error) {
                console.error('Error al decodificar el token:', error);
            }
        }
    }, []);

    return (
      <>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="h-12 w-auto mr-4" src="./src/assets/logo_clinica.jpg" alt="Clinica San Martin Logo" /> {/* Aquí se muestra la imagen del logo */}
        <span className="font-semibold text-xl tracking-tight">Clinica San Martin</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            About
          </Link>
        
          <p>Nombre: {userData.nombre}</p>
          <p>Email: {userData.email}</p>
          <p>Telefono: {userData.telefono}</p>
        </div>
        <Link 
          to='/login'
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200"
        >
          Cerrar sesion 
        </Link>
      </div>
    </nav>
    <CitaList/>
      </>
    );
};

export default Home;
