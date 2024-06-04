// AgregarCitaForm.tsx
import React, { useEffect, useState } from 'react';
import { Cita } from '../../Types/Types';
import { agregarCita, getTipoCitaId, getSucursalId } from '../../Services/ApiCita';

interface AgregarCitaFormProps {
  userId: number;
}

interface TipoCita {
  tipoCitaId: number;
  nombre: string;
}

interface Sucursal {
  sucursalId: number;
  nombre: string;
}

const AgregarCitaForm: React.FC<AgregarCitaFormProps> = ({ userId }) => {
  const [fechaHora, setFechaHora] = useState('');
  const [tipoCitaId, setTipoCitaId] = useState(0);
  const [sucursalId, setSucursalId] = useState(0);
  const [tiposCita, setTiposCita] = useState<TipoCita[]>([]);
  const [sucursales, setSucursales] = useState<Sucursal[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchTiposCita = async () => {
      const response = await fetch('https://localhost:7080/api/TipoCita');
      const data = await response.json();
      setTiposCita(data);
    };

    const fetchSucursales = async () => {
      const response = await fetch('https://localhost:7080/api/Sucursal');
      const data = await response.json();
      setSucursales(data);
    };

    fetchTiposCita();
    fetchSucursales();
  }, []);

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
