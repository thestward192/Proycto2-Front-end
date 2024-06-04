// AgregarCitaForm.tsx
import React, { useState } from 'react';
import { Cita } from '../../Types/Types';
import { addCita } from '../../Services/ApiCita';


interface AgregarCitaFormProps {
  userId: number;
}

const AgregarCitaForm: React.FC<AgregarCitaFormProps> = ({ userId }) => {
  const [fechaHora, setFechaHora] = useState('');
  const [tipoCitaId, setTipoCitaId] = useState(0);
  const [sucursalId, setSucursalId] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    const newCita: Cita = {
      citaId: 0,
      fechaHora: new Date(fechaHora),
      status: 'ACTIVA',
      userId: userId, // Usa el ID del usuario logueado
      tipoCitaId: tipoCitaId,
      sucursalId: sucursalId
    };
  
    try {
      await addCita(newCita);
      setSuccess('Cita agregada exitosamente');
      setError(null);
      
      // Recargar la página después de agregar la cita
      window.location.reload();
    } catch (err) {
      setError('Error al agregar la cita');
      setSuccess(null);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Agregar Cita</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <div className="mb-4">
        <label className="block text-gray-700">Fecha y Hora:</label>
        <input
          type="datetime-local"
          value={fechaHora}
          onChange={(e) => setFechaHora(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Tipo de Cita:</label>
        <input
          type="number"
          value={tipoCitaId}
          onChange={(e) => setTipoCitaId(Number(e.target.value))}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Sucursal:</label>
        <input
          type="number"
          value={sucursalId}
          onChange={(e) => setSucursalId(Number(e.target.value))}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Agregar Cita
      </button>
    </form>
  );
};

export default AgregarCitaForm;
