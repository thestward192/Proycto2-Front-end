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
