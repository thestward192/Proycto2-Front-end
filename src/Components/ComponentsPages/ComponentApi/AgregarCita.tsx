import React, { useState } from 'react';
import { useAddCita } from '../../../Hooks/UseCita';
import { Cita } from '../../../Types/Types';

const AddCitaForm: React.FC = () => {
  const [newCita, setNewCita] = useState<Cita>({
    citaId: 0,
    fechaHora: '',
    status: '',
    userId: 0,
    tipoCitaId: 0,
    sucursalId: 0
  });
  const { addCita, loading, error } = useAddCita();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCita({ ...newCita, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addCita(newCita);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Fecha y Hora:</label>
        <input type="datetime-local" name="fechaHora" value={newCita.fechaHora} onChange={handleChange} required />
      </div>
      <div>
        <label>Status:</label>
        <input type="text" name="status" value={newCita.status} onChange={handleChange} required />
      </div>
      <div>
        <label>User ID:</label>
        <input type="number" name="userId" value={newCita.userId} onChange={handleChange} required />
      </div>
      <div>
        <label>Tipo Cita ID:</label>
        <input type="number" name="tipoCitaId" value={newCita.tipoCitaId} onChange={handleChange} required />
      </div>
      <div>
        <label>Sucursal:</label>
        <input type="number" name="sucursalId" value={newCita.sucursalId} onChange={handleChange} required />
      </div>
      <button type="submit">Agregar Cita</button>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </form>
  );
};

export default AddCitaForm;