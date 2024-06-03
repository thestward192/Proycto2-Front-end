import React, { useState } from 'react';
import UseUser from '../../../Hooks/UseUser';
import { cancelarCita } from '../../../Services/ApiCita';
import ModalComponent from './modalCita';
// Asegúrate de importar correctamente

const CitaList = () => {
    const { citasConNombres } = UseUser();
    const [message, setMessage] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleCancelarCita = async (citaId : any) => {
        try {
            await cancelarCita(citaId);
            setMessage(`Cita #${citaId} cancelada exitosamente`);
            openModal();
            // Aquí podrías actualizar la lista de citas si es necesario
        } catch (error) {
            console.error('Error al cancelar la cita:', error);
            setMessage(`Error al cancelar la cita: La cita debe ser cancelada con 24 horas de antelación`);
            openModal();
        }
    };

    return (
        <div className="w-3/4 p-4">
            <h2 className="text-2xl font-bold mb-4">Tus citas</h2>
            <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal} message={message} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {citasConNombres.map((item) => (
                    <div key={item.citaId} className="bg-white border rounded-lg shadow-md p-4 cursor-pointer transition-transform transform hover:scale-105">
                        <p className="text-lg font-bold mb-2">Cita #{item.citaId}</p>
                        <p><span className="font-bold">Fecha:</span> {item.fechaHora}</p>
                        <p><span className="font-bold">Estado:</span> {item.status}</p>
                        <p><span className="font-bold">Sucursal:</span> {item.sucursalNombre}</p>
                        <p><span className="font-bold">Tipo Cita:</span> {item.tipoCitaNombre}</p>
                        <div className="mt-4 flex justify-between">
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                                onClick={() => handleCancelarCita(item.citaId)}
                            >
                                Cancelar Cita
                            </button>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                                Modificar Cita
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CitaList;
