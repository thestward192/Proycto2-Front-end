
import { Role, Sucursal, TipoCita, User } from "../Types/Types";

export const getSucursales = async (): Promise<Sucursal[]> => {
  const response = await fetch('https://localhost:7284/api/Sucursal');
  if (!response.ok) {
    throw new Error('Error fetching sucursales');
  }
  return response.json();
};

export const getRoles = async (): Promise<Role[]> => {
  const response = await fetch('https://localhost:7284/api/Role');
  if (!response.ok) {
    throw new Error('Error fetching roles');
  }
  return response.json();
};

export const getTiposCita = async (): Promise<TipoCita[]> => {
  const response = await fetch('https://localhost:7284/api/TipoCita');
  if (!response.ok) {
    throw new Error('Error fetching tiposCita');
  }
  return response.json();
};

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch('https://localhost:7284/api/User');
  if (!response.ok) {
    throw new Error('Error fetching users');
  }
  return response.json();
};