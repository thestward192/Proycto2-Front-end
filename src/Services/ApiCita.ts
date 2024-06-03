import { Cita } from "../Types/Types";

const API_URL = 'https://localhost:7080/api/Cita';

export const getCitas = async (): Promise<Cita[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error fetching citas');
  }
  return response.json();
};

export const addCita = async (newCita: Cita) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCita)
  });

  if (!response.ok) {
    const errorDetail = await response.text(); // Leer el cuerpo de la respuesta de error
    throw new Error(`Error adding cita: ${response.status} ${response.statusText} - ${errorDetail}`);
  }

  return response.json();
};


// Services/ApiCita.ts
export const cancelarCita = async (citaId: number) => {
  const response = await fetch(`https://localhost:7080/api/Cita/cancelar/${citaId}`, {
    method: 'PATCH',
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to cancel cita');
  }
};

