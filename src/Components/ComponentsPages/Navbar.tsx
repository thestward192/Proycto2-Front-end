import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="h-12 w-auto mr-4" src="./src/assets/logo_clinica.jpg" alt="Clinica San Martin Logo" /> {/* Aquí se muestra la imagen del logo */}
        <span className="font-semibold text-xl tracking-tight">Choco Clinica</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            About
          </Link>
          {/* Añade más enlaces aquí si es necesario */}
        </div>
        <Link 
          to='/login'
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200"
        >
          Iniciar sesion 
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
