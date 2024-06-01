import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AgregarCitaForm from './ComponentApi/AgregarCita';


const Home = () => {
    const [userData, setUserData] = useState({});
    const [citas, setCitas] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUserData({
                  id: decodedToken.nameid,
                  email: decodedToken.email,
                  telefono: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone'],
                  nombre: decodedToken.unique_name
              });              
              
                console.log(decodedToken)

                if (userData.id) {
                    fetch(`https://localhost:7284/api/Cita/user/${userData.id}`)

                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Error al obtener citas del usuario');
                        }
                        return response.json();
                    })
                    .then(data => {
                        setCitas(data);
                        console.log(userData)
                    })
                    .catch(error => {
                        console.error('Error al obtener citas del usuario:', error);
                    });
                }
            } catch (error) {
                console.error('Error al decodificar el token:', error);
            }
        }

        
    }, [userData.id]); 


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
  <div className="w-3/4 p-4">
    <h2 className="text-2xl font-bold mb-4">Tus citas</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {citas && Array.isArray(citas) && citas.map((item: any) => (
            <div key={item.citaId} className="bg-white border rounded-lg shadow-md p-4 cursor-pointer transition-transform transform hover:scale-105">
                <p className="text-lg font-bold mb-2">Cita #{item.citaId}</p>
                <p><span className="font-bold">Fecha:</span> {item.fechaHora}</p>
                <p><span className="font-bold">Estado:</span> {item.status}</p>
                <p><span className="font-bold">Sucursal:</span> {item.sucursalId}</p>
                <p><span className="font-bold">Tipo Cita:</span> {item.tipoCitaId}</p>
                <div className="mt-4 flex justify-between">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg" onClick={() => handleCancelarCita(item.citaId)}>Cancelar Cita</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={() => handleModificarCita(item.citaId)}>Modificar Cita</button>
                </div>
            </div>
        ))}
    </div>
</div>

    <div className="w-1/4 p-4">
    <AgregarCitaForm userId={userData.id} />
    </div>
  </div>
</>

    );
};

export default Home;
