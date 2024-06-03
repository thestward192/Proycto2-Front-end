import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AgregarCitaForm from './ComponentsCita/AgregarCita';
import CitaList from './ComponentsCita/CitaList';
import UseUser from '../../Hooks/UseUser';


const Home = () => {
  const {userData} = UseUser();
    return (
      <>
  <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <img className="h-12 w-auto mr-4" src="./src/assets/logo_clinica.jpg" alt="Clinica San Martin Logo" />
      <span className="font-semibold text-xl tracking-tight">Choco Clinica</span>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow"></div>
      <div className="flex items-center text-white">
        <div className="mr-4">
          <i className="fas fa-user-circle fa-lg"></i>
          <span className="ml-2">{userData.nombre}</span>
          <p>Email: {userData.email}</p>
          <p>Telefono: {userData.telefono}</p>
        </div>
        <Link
          to='/login'
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200">
          Cerrar sesion
        </Link>
      </div>
    </div>
  </nav>
  <div className="flex">
<CitaList/>
    <div className="w-1/4 p-4">
    <AgregarCitaForm userId={userData.id} />
    </div>
  </div>
</>

    );
};

export default Home;
