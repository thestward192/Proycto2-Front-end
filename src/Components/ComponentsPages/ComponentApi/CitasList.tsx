// components/CitasList.tsx
import React from 'react';
import useCitas from '../../../Hooks/HooksCitas/useCitas';

const CitasList: React.FC = () => {
  const { citas, newCita, setNewCita, addCita, editCita, removeCita, editingCita, setEditingCita } = useCitas();

 

  return (
    <div>
      <h1>Lista de Citas</h1>

      {/* Formulario para agregar citas */}
      <form onSubmit={(e) => { e.preventDefault(); addCita(); }}>
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
            <button onClick={() => removeCita(cita.Id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Formulario para editar citas */}
      {editingCita !== null && (
        <form onSubmit={(e) => { e.preventDefault(); editCita(editingCita); }}>
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
