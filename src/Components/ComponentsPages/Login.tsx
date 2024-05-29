import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { User } from '../../Types/Types';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const performLogin = async () => {
    try {
      const response = await fetch('https://localhost:7284/api/User/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const token = await response.text();
      
      // Obtener la información del usuario después de iniciar sesión
      const user = await fetchUserInfo(token);
      
      // Llamar a la función login para almacenar el token y la información del usuario
      login(token, user);
      
      // Redirigir al usuario a la página de inicio
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  // Función para obtener la información del usuario utilizando el token
  const fetchUserInfo = async (token: string): Promise<User> => {
    try {
      const response = await fetch( 'https://localhost:7284/api/User/{id}', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user information');
      }
  
      const userData = await response.json();
      // Mapear los datos de usuario del backend a tu interfaz User
      const user: User = {
        id: userData.id,
        nombre: userData.nombre,
        email: userData.email,
        telefono: userData.telefono,
        password: userData.password,
        roleId: userData.roleId,
        role: userData.role,
        citas: userData.citas,
      };
  
      return user;
    } catch (error) {
      throw new Error('Error fetching user information: ' + error.message);
    }
  };
  
  // Función para manejar el envío del formulario de inicio de sesión
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await performLogin();
  };

  // Función para manejar el clic en el botón de cancelar
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Clinica San Martin</span>
          <Link to='/' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 ml-4">
            Home
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/registrarse" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200">
            Registrarse
          </Link>
        </div>
      </nav>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 border rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
          <button onClick={handleCancel} type="button" className="w-full bg-red-500 text-white py-2 rounded">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
