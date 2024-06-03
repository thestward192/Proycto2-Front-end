
import { Role, Sucursal, TipoCita, User } from "../Types/Types";

export const getSucursales = async (): Promise<Sucursal[]> => {
  const response = await fetch('https://localhost:7080/api/Sucursal');
  if (!response.ok) {
    throw new Error('Error fetching sucursales');
  }
  return response.json();
};

// Simulación de una función que realiza una solicitud HTTP para obtener los detalles de un tipo de cita por su ID
export const getTipoCitaId = async (tipoCitaId: number): Promise<TipoCita | null> => {
  try {
    // Realiza la solicitud HTTP al backend para obtener los detalles del tipo de cita con el ID proporcionado
    const response = await fetch(`https://localhost:7080/api/TipoCita/${tipoCitaId}`); // Ajusta la URL según tu backend
    if (!response.ok) {
      throw new Error('Error al obtener los detalles del tipo de cita');
    }
    const data = await response.json();
    return data as TipoCita; // Devuelve los detalles del tipo de cita
  } catch (error) {
    console.error('Error en la función getTipoCita:', error);
    return null;
  }
};

// Simulación de una función que realiza una solicitud HTTP para obtener los detalles de una sucursal por su ID
export const getSucursalId = async (sucursalId: number): Promise<Sucursal | null> => {
  try {
    // Realiza la solicitud HTTP al backend para obtener los detalles de la sucursal con el ID proporcionado
    const response = await fetch(`https://localhost:7080/api/Sucursal/${sucursalId}`); // Ajusta la URL según tu backend
    if (!response.ok) {
      throw new Error('Error al obtener los detalles de la sucursal');
    }
    const data = await response.json();
    return data as Sucursal; // Devuelve los detalles de la sucursal
  } catch (error) {
    console.error('Error en la función getSucursal:', error);
    return null;
  }
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
