import React, { useEffect, useState } from 'react';
import { getCitas } from '../../../Services/ApiCita';
import { Cita, Sucursal } from '../../../Types/Types';
import { getSucursales } from '../../../Services/ApiEntities';

const CitaList: React.FC = () => {
  const [citas, setCitas] = useState<Cita[]>([]);
  const [sucursales, setSucursales] = useState<Sucursal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedCitas, fetchedSucursales] = await Promise.all([getCitas(), getSucursales()]);
        setCitas(fetchedCitas);
        setSucursales(fetchedSucursales);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getSucursalNombre = (sucursalId: number) => {
    const sucursal = sucursales.find(s => s.sucursalId === sucursalId);
    return sucursal ? sucursal.nombre : 'Desconocida';
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Lista de Citas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {citas.map(cita => (
          <div key={cita.citaId} className="border rounded-md p-4">
            <p>Fecha y Hora: {new Date(cita.fechaHora).toLocaleString()}</p>
            <p>Sucursal: {getSucursalNombre(cita.sucursalId)}</p>
            <p>Status: {cita.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitaList;
