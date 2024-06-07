import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AgregarCitaForm from '../ComponentsCita/AgregarCita';
import CitaList from '../ComponentsCita/CitaList';
import UseUser from '../../Hooks/UseUser';
import CustomModal from '../ComponentsUser/modalUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const { userData } = UseUser();
  // Estado para controlar si el modal está abierto o cerrado
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-6">
        <div className="flex items-center flex-shrink-0 text-gray-700 mr-6">
          <img className="h-12 w-auto mr-4 rounded-full" src="./src/assets/logo_clinica.jpg" alt="Clinica San Martin Logo" />
          <span className="font-semibold text-xl tracking-tight">Choco Clinica</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div className="flex items-center text-gray-700">
            {/* Div para el nombre del usuario */}
            <div className="mr-4 flex items-center bg-gray-800 rounded-lg p-2 cursor-pointer" onClick={() => setModalIsOpen(true)}>
              <img src="./src/assets/User.jpeg" alt="Profile Icon" className="w-8 h-8 rounded-full mr-2" /> {/* Icono de perfil */}
              <span className="ml-2 text-lg font-semibold text-white">{userData.nombre}</span> {/* Nombre del usuario */}
            </div>
          </div>
        </div>
      </nav>
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(./src/assets/vecteezy_banner-background-of-professional-surgical-doctor-team-are_6832219.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay oscuro */}
        <div className="flex flex-col justify-center items-center relative z-10">
          <div className="flex">
           <CitaList/>
            <div className="w-1/4 p-4 min-w-[450px]">
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
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-200 text-gray-900 py-12 px-8 flex justify-center items-center rounded-lg shadow-md mt-4">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="card w-72 bg-white rounded-md shadow-md p-4 flex flex-col items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 text-4xl mb-4" />
            <h3 className="text-gray-700 font-bold">Contáctanos</h3>
            <p className="text-gray-500 break-line">Dirección: Santa Cruz, Guanacaste</p>
            <p className="text-gray-500 break-line">Teléfono: 26801334</p>
            <p className="text-gray-500 break-line">Email: Clinica@gmail.com</p>
          </div>
          <div className="card w-72 bg-white rounded-md shadow-md p-4 flex flex-col items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 text-4xl mb-4" />
            <h3 className="text-gray-700 font-bold">Sucursales</h3>
            <p className="text-gray-500 break-line">Santa Cruz</p>
            <p className="text-gray-500 break-line">Liberia</p>
            <p className="text-gray-500 break-line">Nicoya</p>
          </div>
          <div className="card w-72 bg-white rounded-md shadow-md p-4 flex flex-col items-center">
            <FontAwesomeIcon icon={faClock} className="text-gray-400 text-4xl mb-4" />
            <h3 className="text-gray-700 font-bold">Horarios</h3>
            <p className="text-gray-500 break-line">Lunes a Viernes: 7am a 5pm</p>
            <p className="text-gray-500 break-line">Sábados: 7pm a 12md</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
