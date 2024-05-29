// AuthContext.js
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { User } from '../../Types/Types';

interface AuthContextType {
  token: string | null;
  user: User | null; // Add the user property
  login: (newToken: string, newUser: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null); // Initialize user state

  const login = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser); // Set the user when logging in
    // Other logic (e.g., storing token in localStorage)...
  };

  const logout = () => {
    setToken(null);
    setUser(null); // Clear the user when logging out
    // Other logic (e.g., removing token from localStorage)...
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
