import React, { useEffect, useState } from 'react';
import { Cita, Sucursal, TipoCita } from '../../../Types/Types';
import { getCitas, cancelarCita, } from '../../../Services/ApiCita';
import { getSucursales, getTiposCita } from '../../../Services/ApiEntities';
import { useAuth } from '../AuthContext';

const CitaList: React.FC = () => {
  const { user } = useAuth(); 
  const [citas, setCitas] = useState<Cita[]>([]);
  const [tiposCita, setTiposCita] = useState<TipoCita[]>([]);
  const [sucursales, setSucursales] = useState<Sucursal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCitas = async (userId: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCitas(userId);
      setCitas(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchTiposCita = async () => {
    try {
      const data = await getTiposCita();
      setTiposCita(data);
    } catch (error: any) {
      console.error('Error fetching tipos de cita:', error);
      setError(error.message);
    }
  };

  const fetchSucursales = async () => {
    try {
      const data = await getSucursales();
      setSucursales(data);
    } catch (error: any) {
      console.error('Error fetching sucursales:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchCitas(user.id);
      fetchTiposCita();
      fetchSucursales();
    }
  }, [user]);

  const handleCancelar = async (citaId: number) => {
    try {
      await cancelarCita(citaId);
      if (user) {
        fetchCitas(user.id);
      }
    } catch (error: any) {
      console.error('Error canceling cita:', error);
      setError(error.message);
    }
  };

  const getTipoCitaNombre = (id: number) => {
    const tipoCita = tiposCita.find(tc => tc.tipoCitaId === id);
    return tipoCita ? tipoCita.nombre : 'Desconocido';
  };

  const getSucursalNombre = (id: number) => {
    const sucursal = sucursales.find(s => s.sucursalId === id);
    return sucursal ? sucursal.nombre : 'Desconocido';
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Lista de Citas</h1>
      {loading ? (
        <div className="text-blue-500">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="flex flex-wrap -mx-2">
          {citas.map((cita) => (
            <div key={cita.citaId} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
              <div className="p-4 border rounded-md shadow-md">
                <p><strong>Fecha y Hora:</strong> {cita.fechaHora}</p>
                <p><strong>Status:</strong> {cita.status}</p>
                <p><strong>Tipo de Cita:</strong> {getTipoCitaNombre(cita.tipoCitaId)}</p>
                <p><strong>Sucursal:</strong> {getSucursalNombre(cita.sucursalId)}</p>
                <button
                  onClick={() => handleCancelar(cita.citaId)}
                  className="mt-2 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Cancelar Cita
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CitaList;
