import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold text-red-600 mb-4">404 - Página no encontrada</h1>
            <p className="text-xl text-gray-700">Lo siento, no tienes permiso para acceder a esta página.</p>
        </div>
    );
};

export default NotFoundPage;
