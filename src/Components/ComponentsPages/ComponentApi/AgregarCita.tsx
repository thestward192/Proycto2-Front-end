import React, { useState } from 'react';
import { Cita } from '../../../Types/Types';
import { addCita } from '../../../Services/ApiCita';


const AddCitaForm: React.FC = () => {
  const [newCita, setNewCita] = useState<Cita>({
    citaId: 0, // Este valor será ignorado por el servidor
    fechaHora: '',
    status: '',
    userId: 0,
    tipoCitaId: 0,
    sucursalId: 0
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCita({ ...newCita, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const addedCita = await addCita(newCita);
      console.log('Cita added successfully:', addedCita);
      // Aquí puedes agregar lógica para manejar la respuesta, como redirigir al usuario o mostrar un mensaje de éxito
    } catch (error: any) {
      console.error('Error adding cita:', error);
      setError(error.message); // Mostrar el mensaje de error detallado
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Fecha y Hora:</label>
        <input type="datetime-local" name="fechaHora" value={newCita.fechaHora} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Status:</label>
        <input type="text" name="status" value={newCita.status} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">User ID:</label>
        <input type="number" name="userId" value={newCita.userId} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Tipo Cita ID:</label>
        <input type="number" name="tipoCitaId" value={newCita.tipoCitaId} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Sucursal ID:</label>
        <input type="number" name="sucursalId" value={newCita.sucursalId} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Agregar Cita</button>
      {loading && <div className="mt-4 text-blue-500">Loading...</div>}
      {error && <div className="mt-4 text-red-500">{error}</div>}
    </form>
  );
};

export default AddCitaForm;
