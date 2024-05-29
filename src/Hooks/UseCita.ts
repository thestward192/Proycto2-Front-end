import {  useState } from 'react';
import { addCita as sendCita } from '../Services/ApiCita';
import { Cita } from '../Types/Types';

export const useAddCita = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addCita = async (newCita: Cita) => {
    setLoading(true);
    setError(null);

    try {
      await sendCita(newCita);
      setLoading(false);
    } catch (error) {
      setError('Error adding cita');
      setLoading(false);
    }
  };

  return { addCita, loading, error };
};
﻿
