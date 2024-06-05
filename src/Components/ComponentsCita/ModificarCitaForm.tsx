import React, { useState } from 'react';
import { CitaM, modificarCita } from '../../Hooks/Modificarcitas';

interface ModificarCitaListFormProps {
  cita: CitaM; // Corrige el tipo de cita para que coincida con CitaM
  onClose: () => void; // Añade la función onClose para cerrar el formulario después de modificar la cita
}

const ModificarCitaListForm: React.FC<ModificarCitaListFormProps> = ({ cita, onClose }) => { // Pasa onClose como prop
  const [fechaHora, setFechaHora] = useState(cita.fechaHora);
  const [tipoCitaId, setTipoCitaId] = useState(cita.tipoCitaId);
  const [sucursalId, setSucursalId] = useState(cita.sucursalId);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    const updatedCita: CitaM = {
      ...cita,
      fechaHora: new Date(fechaHora).toISOString(), // Convierte la fecha a formato ISO
      tipoCitaId: tipoCitaId,
      sucursalId: sucursalId
    };
  
    try {
      await modificarCita(updatedCita);
      setSuccess('Cita modificada exitosamente');
      setError(null);
      onClose();
      window.location.reload();
    } catch (err: any) {
      setError('Error al modificar la cita');
      setSuccess(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Modificar Cita</h2>
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
        Modificar Cita
      </button>
    </form>
  );
};

export default ModificarCitaListForm;
