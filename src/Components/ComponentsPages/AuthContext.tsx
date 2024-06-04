import React, { ReactNode, createContext, useContext, useState } from 'react';
import { User } from '../../Types/Types';

// Define el tipo de contexto de autenticación
interface AuthContextType {
  token: string | null;
  user: User | null;
  login: (newToken: string, newUser: User) => void;
  logout: () => void;
}

// Crea el contexto de autenticación
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  // Función para iniciar sesión
  const login = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);
    // Podrías agregar lógica aquí para almacenar el token en localStorage
  };

  // Función para cerrar sesión
  const logout = () => {
    setToken(null);
    setUser(null);
    // Podrías agregar lógica aquí para eliminar el token de localStorage
  };

  // Define el valor del contexto de autenticación
  const authContextValue: AuthContextType = {
    token,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
