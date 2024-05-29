
import { Cita, Role, Sucursal, TipoCita, User } from "../Types/Types";

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

export const getRoles = async (): Promise<Role[]> => {
  const response = await fetch(API_URL + 'Role');
  if (!response.ok) {
    throw new Error('Error fetching roles');
  }
  return response.json();
};

export const getTiposCita = async (): Promise<TipoCita[]> => {
  const response = await fetch(API_URL + 'TipoCita');
  if (!response.ok) {
    throw new Error('Error fetching tiposCita');
  }
  return response.json();
};

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(API_URL + 'User');
  if (!response.ok) {
    throw new Error('Error fetching users');
  }
  return response.json();
};