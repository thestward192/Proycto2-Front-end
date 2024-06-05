// services.js

export const fetchCitasPorFecha = async (fecha : any) => {
    try {
      // Construir la URL con la fecha como parámetro de consulta
      const url = `https://localhost:7080/api/Cita/fecha?fecha=${fecha}`;
    
      // Realizar la solicitud al endpoint
      const response = await fetch(url);
    
      // Verificar si la solicitud fue exitosa
      if (!response.ok) {
        // Si la respuesta no es exitosa, lanzar un error con el mensaje de error correspondiente
        throw new Error('No se pudo obtener la información de citas por fecha');
      }
    
      // Parsear la respuesta a formato JSON
      const data = await response.json();
    
      // Devolver los datos obtenidos
      return data;
    } catch (error) {
      // Capturar cualquier error y lanzarlo nuevamente para que pueda ser manejado en el componente que llama a esta función
      throw new Error(`Error al obtener citas por fecha: ${error.message}`);
    }
  };
  