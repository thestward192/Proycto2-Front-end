

import { Cita, Sucursal } from "../Types/Types";

const API_URL = 'https://localhost:7284/api/';

export const getCitas = async (): Promise<Cita[]> => {
  const response = await fetch(API_URL + 'Cita');
  if (!response.ok) {
    throw new Error('Error fetching citas');
  }
  return response.json();
};

export const addCita = async (newCita: Cita) => {
  const response = await fetch(API_URL + 'Cita', {
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

export const getSucursales = async (): Promise<Sucursal[]> => {
  const response = await fetch(API_URL + 'Sucursal');
  if (!response.ok) {
    throw new Error('Error fetching sucursales');
  }
  return response.json();
};