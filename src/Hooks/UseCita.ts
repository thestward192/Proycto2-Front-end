import {  useEffect, useState } from 'react';
import { getCitas } from '../Services/ApiCita';
import { getSucursalId, getTipoCitaId } from '../Services/ApiEntities';

export const useAddCita = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const GetCita = async () => {
    setLoading(true);
    setError(null);

    try {
      await getCitas();
      setLoading(false);
      
    } catch (error) {
      setError('Error adding cita');
      setLoading(false);
    }
  };


  return { GetCita, loading, error };
};
﻿
