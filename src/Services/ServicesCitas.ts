// services/apiService.ts
import { Cita } from "../Types/Types";

const API_URL = 'https://664d3369ede9a2b55652e99e.mockapi.io/Citas';

// Fetch all citas
export const fetchCitas = async (): Promise<Cita[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error fetching citas');
  }
  const data = await response.json();
  return data.Citas || data;
};

// Fetch a single cita by ID
export const fetchCitaById = async (id: number): Promise<Cita> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Error fetching cita');
  }
  const data = await response.json();
  return data;
};

// Create a new cita
export const createCita = async (newCita: Omit<Cita, 'Id'>): Promise<Cita> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCita),
  });
  if (!response.ok) {
    throw new Error('Error creating cita');
  }
  const data = await response.json();
  return data;
};

// Update an existing cita
export const updateCita = async (id: number, updatedCita: Partial<Cita>): Promise<Cita> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedCita),
  });
  if (!response.ok) {
    throw new Error('Error updating cita');
  }
  const data = await response.json();
  return data;
};

// Delete a cita
export const deleteCita = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error deleting cita');
  }
};
