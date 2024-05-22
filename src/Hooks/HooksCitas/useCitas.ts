// hooks/useCitas.ts
import { useState, useEffect } from 'react';
import { fetchCitas, createCita, updateCita, deleteCita } from '../../Services/ServicesCitas';
import { Cita } from '../../Types/Types';

const useCitas = () => {
  const [citas, setCitas] = useState<Cita[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  const addCita = async (newCita: Omit<Cita, 'Id'>) => {
    try {
      const createdCita = await createCita(newCita);
      setCitas((prevCitas) => [...prevCitas, createdCita]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editCita = async (id: number, updatedCita: Partial<Cita>) => {
    try {
      const updated = await updateCita(id, updatedCita);
      setCitas((prevCitas) =>
        prevCitas.map((cita) => (cita.Id === id ? updated : cita))
      );
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

  return { citas, loading, error, addCita, editCita, removeCita };
};

export default useCitas;
