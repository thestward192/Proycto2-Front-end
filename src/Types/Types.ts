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
  tipoCitaid: number;
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
sucursalId: number;
}

export interface RegisterFormInputs {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}
export interface JwtDecode {
  (token: string): any; // Aquí debes ajustar el tipo según la estructura de tus tokens JWT
}
