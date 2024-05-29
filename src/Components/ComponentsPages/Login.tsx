import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { User } from '../../Types/Types';


const Login: React.FC = () => {

const Navigate = useNavigate();

  const performLogin = async (email: string, password: string): Promise<void> => {
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
      // Llamar a otra función para obtener la información del usuario usando el token
      const user = await fetchUserInfo(token);
      login(token, user);
      navigate('/home'); // Redirigir al usuario a la página de inicio
    } catch (error) {
      console.error('Error logging in:', error);
      // Manejar el error de inicio de sesión
    }
  };
  
  // Otra función para obtener la información del usuario usando el token de acceso
  const fetchUserInfo = async (token: string): Promise<User> => {
    try {
      const response = await fetch('https://localhost:7284/api/User', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Incluir el token en el encabezado de autorización
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user information');
      }
  
      const userData = await response.json();
      // Aquí puedes mapear los datos de usuario del backend a tu interfaz User
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
  
  const HandleCancel = () => {
    Navigate("/");
  }
  // En el componente Login, llamar a performLogin al enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await performLogin(email, password);
  };
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();


  return (
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
      <button onClick={HandleCancel} type="submit" className="w-full bg-red-500 text-white py-2 rounded">Cancelar</button>
      </div>
    </form>
  );
};
 
export default Login;
