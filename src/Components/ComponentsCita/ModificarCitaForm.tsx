import React, { useState } from 'react';
import { CitaM, ModificarCitaListFormProps } from '../../Types/Types';
import { modificarCita } from '../../Services/ApiCita';
import useEditCita from '../../Hooks/Modificarcitas';

const ModificarCitaListForm: React.FC<ModificarCitaListFormProps> = ({ cita, onClose }) => {
  const {tipoCitaId, setTipoCitaId, sucursalId, setSucursalId, tiposCita, sucursales} = useEditCita();

  const [fechaHora, setFechaHora] = useState(cita.fechaHora);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    const updatedCita: CitaM = {
      ...cita,
      fechaHora: new Date(fechaHora).toISOString(), 
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
        <select
          value={tipoCitaId}
          onChange={(e) => setTipoCitaId(Number(e.target.value))}
          className="w-full px-3 py-2 border rounded"
          required
        >
          <option value="">Seleccione un tipo de cita</option>
          {tiposCita.map((tipo) => (
            <option key={tipo.tipoCitaId} value={tipo.tipoCitaId}>
              {tipo.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Sucursal:</label>
        <select
          value={sucursalId}
          onChange={(e) => setSucursalId(Number(e.target.value))}
          className="w-full px-3 py-2 border rounded"
          required
        >
          <option value="">Seleccione una sucursal</option>
          {sucursales.map((sucursal) => (
            <option key={sucursal.sucursalId} value={sucursal.sucursalId}>
              {sucursal.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Modificar Cita
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ModificarCitaListForm;
