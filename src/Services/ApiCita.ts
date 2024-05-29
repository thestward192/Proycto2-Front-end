import { Cita } from "../Types/Types";

const API_URL = 'https://localhost:7284/api/Cita';

export const getCitas = async (): Promise<Cita[]> => {
  const response = await fetch(API_URL); // La URL ya es completa, no necesitas concatenar 'Cita'
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
    throw new Error('Error adding cita');
  }

  return response.json();
};
