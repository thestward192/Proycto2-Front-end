// components/CitasList.tsx
import React, { useState } from 'react';
import useCitas from '../../../Hooks/HooksCitas/useCitas';
import { Cita } from '../../../Types/Types';

const CitasList: React.FC = () => {
  const { citas, loading, error, addCita, editCita, removeCita } = useCitas();
  const [newCita, setNewCita] = useState<Omit<Cita, 'Id'>>({
    FechaHora: '',
    Lugar: '',
    Status: '',
    UserId: 1,
    TipoCitaId: 1,
    SucursalId: 1,
  });
  const [editingCita, setEditingCita] = useState<number | null>(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Manejar la adición de citas
  const handleAddCita = () => {
    addCita(newCita);
    // Limpiar el formulario después de agregar la cita
    setNewCita({
      FechaHora: '',
      Lugar: '',
      Status: '',
      UserId: 1,
      TipoCitaId: 1,
      SucursalId: 1,
    });
  };

  // Manejar la edición de citas
  const handleEditCita = (id: number, updatedCita: Partial<Cita>) => {
    editCita(id, updatedCita);
    // Limpiar el formulario después de editar la cita
    setEditingCita(null);
  };

  // Manejar la eliminación de citas
  const handleDeleteCita = (id: number) => {
    removeCita(id);
  };

  return (
    <div>
      <h1>Lista de Citas</h1>

      {/* Formulario para agregar citas */}
      <form onSubmit={(e) => { e.preventDefault(); handleAddCita(); }}>
        <div>
          <label>Fecha y Hora</label>
          <input type="datetime-local" value={newCita.FechaHora} onChange={(e) => setNewCita({ ...newCita, FechaHora: e.target.value })} />
        </div>
        <div>
          <label>Lugar</label>
          <input type="text" value={newCita.Lugar} onChange={(e) => setNewCita({ ...newCita, Lugar: e.target.value })} />
        </div>
        <div>
          <label>Status</label>
          <input type="text" value={newCita.Status} onChange={(e) => setNewCita({ ...newCita, Status: e.target.value })} />
        </div>
        <button type="submit">Agregar Cita</button>
      </form>

      {/* Lista de citas */}
      <ul>
        {citas.map((cita) => (
          <li key={cita.Id}>
            <p>Fecha y Hora: {new Date(cita.FechaHora).toLocaleString()}</p>
            <p>Lugar: {cita.Lugar}</p>
            <p>Status: {cita.Status}</p>
            {/* Botón para editar cita */}
            <button onClick={() => setEditingCita(cita.Id)}>Edit</button>
            {/* Botón para eliminar cita */}
            <button onClick={() => handleDeleteCita(cita.Id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Formulario para editar citas */}
      {editingCita !== null && (
        <form onSubmit={(e) => { e.preventDefault(); handleEditCita(editingCita!, newCita); }}>
          <div>
            <label>Fecha y Hora</label>
            <input type="datetime-local" value={newCita.FechaHora} onChange={(e) => setNewCita({ ...newCita, FechaHora: e.target.value })} />
          </div>
          <div>
            <label>Lugar</label>
            <input type="text" value={newCita.Lugar} onChange={(e) => setNewCita({ ...newCita, Lugar: e.target.value })} />
          </div>
          <div>
            <label>Status</label>
            <input type="text" value={newCita.Status} onChange={(e) => setNewCita({ ...newCita, Status: e.target.value })} />
          </div>
          <button type="submit">Editar Cita</button>
          <button type="button" onClick={() => setEditingCita(null)}>Cancelar</button>
        </form>
      )}
    </div>
  );
};

export default CitasList;
