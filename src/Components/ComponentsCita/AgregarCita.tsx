// AgregarCitaForm.tsx
import React, { useState } from 'react';
import { AgregarCitaFormProps, Cita, Sucursal, TipoCita } from '../../Types/Types';
import { agregarCita } from '../../Services/ApiCita';
import useAddCita from '../../Hooks/useAddCita';


const AgregarCitaForm: React.FC<AgregarCitaFormProps> = ({ userId }) => {

  const {tipoCitaId, setTipoCitaId, sucursalId, setSucursalId, tiposCita, sucursales} = useAddCita();

  const [fechaHora, setFechaHora] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    const newCita: Cita = {
      citaId: 0,
      fechaHora: new Date(fechaHora),
      status: 'ACTIVA',
      tipoCitaId: tipoCitaId,
      sucursalId: sucursalId
    };
  
    try {
      await agregarCita(newCita, userId);
      setSuccess('Cita agregada exitosamente');
      setError(null);
      
      // Recargar la página después de agregar la cita
      window.location.reload();
    } catch (err: any) {
      setError('Error al agregar la cita');
      setSuccess(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Agregar Cita</h2>
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
        {error && <p className="text-red-500">{error}</p>}
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
