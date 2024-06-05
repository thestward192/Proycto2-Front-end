import { Cita } from "../Types/Types";

const API_URL = 'https://localhost:7080/api/Cita';

export const getCitas = async (): Promise<Cita[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error fetching citas');
  }
  return response.json();
};

export const obtenerCitasPorUsuario = async (userId : any) => {
  const response = await fetch(`https://localhost:7080/api/Cita/user/${userId}`);
  if (!response.ok) {
      throw new Error('Failed to fetch citas');
  }
  return await response.json();
};

// ApiCita.ts
export const agregarCita = async (cita: any, userId: number) => {
  try {
    const response = await fetch(`https://localhost:7080/api/Cita`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Incluye el token de autenticación en el encabezado
      },
      body: JSON.stringify({ ...cita, userId }), // Agrega userId a los datos de la cita
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to add cita');
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(error.message || 'Failed to add cita');
  }
};


// Services/ApiCita.ts
export const cancelarCita = async (citaId : any) => {
  const response = await fetch(`https://localhost:7080/api/Cita/cancelar/${citaId}`, {
    method: 'PATCH',
  });

  if (!response.ok) {
    // Intenta analizar la respuesta como JSON
    let errorMessage = 'Failed to cancel cita';
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch (error) {
      // Si la respuesta no es JSON, usa el texto plano
      errorMessage = await response.text();
    }
    throw new Error(errorMessage);
  }
};

// Services/ApiCita.js
export const actualizarCita = async (cita : any) => {
  const response = await fetch(`https://localhost:7080/api/Cita`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cita),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to update cita');
  }

  return await response.json();
};

// ApiCita.ts

export const eliminarCita = async (citaId: number) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token de autenticación no encontrado');
    }

    const response = await fetch(`https://localhost:7080/api/Cita/${citaId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Incluye el token de autenticación en el encabezado
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete cita');
    }

    console.log("Cita eliminada correctamente");
  } catch (error: any) {
    console.error('Error al eliminar la cita:', error.message);
    throw new Error(error.message || 'Failed to delete cita');
  }
};


