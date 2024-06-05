import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseUser from '../../Hooks/UseUser';

const CustomModal = ({ isOpen, onClose, nombre, email, telefono }) => {
    const Navigate = useNavigate();
    const handleCloseModal = () => {
        onClose();
    };

    const handleLogout = () => {
        // Eliminar el token del localStorage
        localStorage.removeItem('token');

        // Redirigir al usuario a la página de login
        Navigate('/login');
    };

    return (
        <>
            {isOpen && (
                <div className="fixed top-0 right-0 z-50">
                    <div className="bg-gray-800 bg-opacity-50 w-screen h-screen" onClick={handleCloseModal}></div>
                    <div className="absolute top-0 right-0 m-4 bg-white rounded-lg p-8 max-w-md max-h-96 overflow-y-auto">
                        {/* max-h-96 limita la altura máxima del modal a 24rem (96px * 0.25 = 24rem) */}
                        <h2 className="text-2xl font-semibold mb-4">Detalles del Usuario</h2>
                        <div className="mb-4">
                            <p className="font-semibold">Nombre:</p>
                            <p>{nombre}</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold">Email:</p>
                            <p>{email}</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold">Teléfono:</p>
                            <p>{telefono}</p>
                        </div>
                        <div className="flex justify-between">
                            <button onClick={onClose} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2">
                                Cerrar
                            </button>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CustomModal;
