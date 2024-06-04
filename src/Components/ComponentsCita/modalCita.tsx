// ModalComponent.jsx
import React, { useEffect, useRef } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        maxWidth: '400px',
        width: '90%',
        height: 'auto',
        overflow: 'auto', // Para permitir el desplazamiento si el contenido es demasiado largo
        backgroundColor: '#fff'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
};

const ModalComponent = ({ modalIsOpen, closeModal, message }) => {
    // Usamos useRef para mantener una referencia al estado previo del modal
    const prevModalIsOpen = useRef();

    // Cuando el modal se cierra, y su estado previo era abierto, recargamos la página
    useEffect(() => {
        if (!modalIsOpen && prevModalIsOpen.current) {
            window.location.reload();
        }
        // Actualizamos el estado previo del modal
        prevModalIsOpen.current = modalIsOpen;
    }, [modalIsOpen]);

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Message Modal"
        >
            <div>
                <h2 className="text-xl font-bold mb-4">Notificación</h2>
                <p className="mb-2">{message}</p> {/* Reducimos el margen inferior del párrafo */}
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                    onClick={closeModal}
                >
                    Cerrar
                </button>
            </div>
        </Modal>
    );
};

export default ModalComponent;
