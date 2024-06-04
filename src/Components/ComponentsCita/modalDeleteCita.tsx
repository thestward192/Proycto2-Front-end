// ErrorModal.js

import React from 'react';

const ErrorModal = ({ isOpen, onRequestClose, errorMessage }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
            <div className="absolute w-full h-full bg-gray-900 opacity-50" onClick={onRequestClose}></div>
            <div className="bg-white rounded-lg p-4 z-10">
                <h2 className="text-xl font-bold mb-4">Error</h2>
                {errorMessage == 'Unauthorized' ? (
                    <p>No tienes permiso para realizar esta acción.</p>
                ) : (
                    <p>No tienes permiso para realizar esta acción</p>
                )}
                <button className="bg-red-500 text-white px-4 py-2 rounded mt-4" onClick={onRequestClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default ErrorModal;
