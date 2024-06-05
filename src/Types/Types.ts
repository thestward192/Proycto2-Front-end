import { ReactElement } from 'react';
import { RouteProps } from 'react-router-dom';

export interface Role {
  roleId: number;
  nombre: string;
  users: string[];
}

export interface User {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  password: string;
  roleId: number;
  role: Role;
  citas: string[];
}

export interface TipoCita {
  tipoCitaId: number;
  nombre: string;
}

// Models/Sucursal.ts
export interface Sucursal {
sucursalId: number;
nombre: string;
}

// Models/Cita.ts
export interface Cita {
citaId: number;
fechaHora: string;
status: string;
userId: number;
tipoCitaId: number;
tipoCitaNombre: string;
sucursalId: number;
sucursalNombre: string;
}

export interface RegisterFormInputs {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface AgregarCitaFormProps {
  userId: number;
}

export interface ProtectedRouteProps {
  element: ReactElement;
  allowedRoles: number[];
}

export interface CitaM {
  citaId: number;
  fechaHora: string;
  userId: number;
  tipoCitaId: number;
  sucursalId: number;
}

export interface JwtDecode {
  (token: string): any; // Aquí debes ajustar el tipo según la estructura de tus tokens JWT
}

export interface ModificarCitaListFormProps {
  cita: CitaM; // Corrige el tipo de cita para que coincida con CitaM
  onClose: () => void; // Añade la función onClose para cerrar el formulario después de modificar la cita
}