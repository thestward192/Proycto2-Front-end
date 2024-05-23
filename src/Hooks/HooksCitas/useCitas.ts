// hooks/useCitas.ts
import { useState, useEffect } from 'react';
import { fetchCitas, createCita, updateCita, deleteCita } from '../../Services/ServicesCitas';
import { Cita } from '../../Types/Types';

const useCitas = () => {
  const [citas, setCitas] = useState<Cita[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newCita, setNewCita] = useState<Omit<Cita, 'Id'>>({
    FechaHora: '',
    Lugar: '',
    Status: '',
    UserId: 1,
    TipoCitaId: 1,
    SucursalId: 1,
  });
  const [editingCita, setEditingCita] = useState<number | null>(null);

  useEffect(() => {
    const loadCitas = async () => {
      try {
        setLoading(true);
        const data = await fetchCitas();
        setCitas(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCitas();
  }, []);

  const addCita = async () => {
    try {
      const createdCita = await createCita(newCita);
      setCitas((prevCitas) => [...prevCitas, createdCita]);
      setNewCita({
        FechaHora: '',
        Lugar: '',
        Status: '',
        UserId: 1,
        TipoCitaId: 1,
        SucursalId: 1,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const editCita = async (id: number) => {
    try {
      const updated = await updateCita(id, newCita);
      setCitas((prevCitas) =>
        prevCitas.map((cita) => (cita.Id === id ? updated : cita))
      );
      setEditingCita(null);
      setNewCita({
        FechaHora: '',
        Lugar: '',
        Status: '',
        UserId: 1,
        TipoCitaId: 1,
        SucursalId: 1,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const removeCita = async (id: number) => {
    try {
      await deleteCita(id);
      setCitas((prevCitas) => prevCitas.filter((cita) => cita.Id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return { citas, loading, error, newCita, setNewCita, addCita, editCita, removeCita, editingCita, setEditingCita };
};

export default useCitas;
