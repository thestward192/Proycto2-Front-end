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
      <ul>
        {citas.map(cita => (
          <li key={cita.citaId}>
            {new Date(cita.fechaHora).toLocaleString()} - {getSucursalNombre(cita.sucursalId)} - {cita.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitaList;
