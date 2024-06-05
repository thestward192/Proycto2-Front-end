import React, { useState } from 'react';
import ModalComponent from './modalCita';
import { useCita } from '../../Hooks/UseCita';
import ErrorModal from './modalDeleteCita';
import ModificarCitaForm from './ModificarCitaForm'; // Importa el componente de modificación de cita
import { CitaM } from '../../Hooks/Modificarcitas';

const CitaList = () => {
    const { citas, loading, closeModal, handleCancelarCita, modalIsOpen, message, handleDeleteCita, errorMessage, errorModalIsOpen, setErrorModalIsOpen } = useCita();
    const [selectedCita, setSelectedCita] = useState<CitaM | null>(null); // Estado para almacenar la cita seleccionada para modificar

    // Función para manejar la selección de una cita para modificar
    const handleModificarCita = (citaId: number) => {
        const selectedCita = citas.find((cita) => cita.citaId === citaId);
        setSelectedCita(selectedCita || null); // Asegurarse de manejar el caso donde no se encuentra ninguna cita
    };

    return (
        <div className="w-3/4 p-4">
            {loading && <p>Is loading...</p>}
            <h2 className="text-2xl font-bold mb-4">Tus citas</h2>
            <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal} message={message} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {citas.length === 0 && !loading ? (
                    <p>No hay citas.</p>
                ) : (
                    citas.map((item) => (
                        <div key={item.citaId} className="bg-white border rounded-lg shadow-md p-4 cursor-pointer transition-transform transform hover:scale-105">
                            <p className="text-lg font-bold mb-2">Cita #{item.citaId}</p>
                            <p><span className="font-bold">Fecha:</span> {new Date(item.fechaHora).toLocaleString()}</p>
                            <p><span className="font-bold">Estado:</span> {item.status}</p>
                            <p><span className="font-bold">Sucursal:</span> {item.sucursalNombre}</p>
                            <p><span className="font-bold">Tipo Cita:</span> {item.tipoCitaNombre}</p>
                            <div className="mt-4 flex justify-between">
                                <button
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-lg"
                                    onClick={() => handleCancelarCita(item.citaId)}
                                >
                                    Cancelar Cita
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg ml-2"
                                    onClick={() => handleDeleteCita(item.citaId)}
                                >
                                    Eliminar Cita
                                </button>
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-lg ml-2"
                                    onClick={() => handleModificarCita(item.citaId)} // Cuando se hace clic, guarda la cita seleccionada
                                >
                                    Modificar Cita
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {selectedCita && ( // Si hay una cita seleccionada para modificar, muestra el formulario de modificación
                <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <ModificarCitaForm cita={selectedCita} onClose={() => setSelectedCita(null)} />
                    </div>
                </div>
            )}
            {errorModalIsOpen && (
                <ErrorModal
                    isOpen={errorModalIsOpen}
                    onRequestClose={() => setErrorModalIsOpen(false)}
                    errorMessage={errorMessage}
                />
            )}
        </div>
    );
};

export default CitaList;
