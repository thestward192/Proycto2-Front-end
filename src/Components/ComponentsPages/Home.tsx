import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AgregarCitaForm from '../ComponentsCita/AgregarCita';
import CitaList from '../ComponentsCita/CitaList';
import UseUser from '../../Hooks/UseUser';
import CustomModal from '../ComponentsUser/modalUser';


const Home = () => {
  const { userData } = UseUser();
  // Estado para controlar si el modal está abierto o cerrado
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
            {/* Div para el nombre del usuario */}
            <div className="mr-4 flex items-center bg-gray-800 rounded-lg p-2 cursor-pointer" onClick={() => setModalIsOpen(true)}>
  <img src="./src/assets/User.jpeg" alt="Profile Icon" className="w-8 h-8 rounded-full mr-2" /> {/* Icono de perfil */}
  <span className="ml-2 text-lg font-semibold text-white">{userData.nombre}</span> {/* Nombre del usuario */}
</div>
          </div>
        </div>
      </nav>
      <div className="flex">
        <CitaList />
        <div className="w-1/4 p-4">
          <AgregarCitaForm userId={userData.id} />
        </div>
      </div>
      {/* Modal personalizado */}
      <CustomModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        nombre={userData.nombre}
        email={userData.email}
        telefono={userData.telefono}
      />
    </>
  );
};

export default Home;
