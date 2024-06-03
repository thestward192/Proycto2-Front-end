
import { Role, Sucursal, TipoCita, User } from "../Types/Types";

export const getSucursales = async (): Promise<Sucursal[]> => {
  const response = await fetch('https://localhost:7080/api/Sucursal');
  if (!response.ok) {
    throw new Error('Error fetching sucursales');
  }
  return response.json();
};

export const getRoles = async (): Promise<Role[]> => {
  const response = await fetch('https://localhost:7080/api/Role');
  if (!response.ok) {
    throw new Error('Error fetching roles');
  }
  return response.json();
};

export const getTiposCita = async (): Promise<TipoCita[]> => {
  const response = await fetch('https://localhost:7080/api/TipoCita');
  if (!response.ok) {
    throw new Error('Error fetching tiposCita');
  }
  return response.json();
};

export const registerUser = async (userData: { nombre: string; email: string; telefono: string; password: string }) => {
  try {
      const response = await fetch('https://localhost:7080/api/User/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      });

      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Error al registrar usuario');
      }

      const data = await response.text();
      return data;
  } catch (error) {
      throw error;
  }
};



export const loginUser = async (userData: { email: string; password: string }) => {
  try {
    const response = await fetch('https://localhost:7080/api/User/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al iniciar sesión');
    }

    const token = await response.text();
    return token;
  } catch (error) {
    throw error;
  }
};
