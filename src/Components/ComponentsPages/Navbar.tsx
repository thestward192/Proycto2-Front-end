import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar: React.FC = () => {
  const { user } = useAuth();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Clinica San</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to='/' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            Home
          </Link>
          <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            About
          </Link>
          {/* Añade más enlaces aquí si es necesario */}
        </div>
        {user && (
          <div>
            <span className="text-white mr-4">Nombre: {user.nombre}</span>
            <span className="text-white mr-4">Email: {user.email}</span>
            <span className="text-white">Teléfono: {user.telefono}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
