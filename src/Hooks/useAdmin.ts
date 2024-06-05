import React, { useEffect, useState } from 'react'
import { fetchCitasPorFecha } from '../Services/ApiAdmin';

const useAdmin = () => {
    const [citas, setCitas] = useState([]);

    useEffect(() => {
      // Función para obtener las citas por fecha cuando el componente se monta
      const obtenerCitasPorFecha = async () => {
        try {
          // Llamar al servicio para obtener las citas por fecha
          const citasData = await fetchCitasPorFecha(new Date().toISOString());
          // Actualizar el estado con las citas obtenidas
          setCitas(citasData);
          console.log(citas)
        } catch (error) {
          // Manejar cualquier error que ocurra durante la obtención de las citas
          console.error(error.message);
        }
      };
  
      // Llamar a la función para obtener las citas por fecha
      obtenerCitasPorFecha();
    }, []); 
  return {
citas
  }
}

export default useAdmin