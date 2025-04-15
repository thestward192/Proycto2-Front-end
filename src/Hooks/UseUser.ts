import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  loginUser, registerUser } from '../Services/ApiEntities';
import {jwtDecode} from 'jwt-decode';

interface ExtendedJwtPayload {
  Id: string;
  Email: string;
  Telefono: string;
  Nombre: string;
  RoleId: string;
}

interface UserData {
    id: string;
    email: string;
    telefono: string;
    nombre: string;
    roleId: string; // Agrega el roleId aquí
}

const UseUser = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [userData, setUserData] = useState<UserData | null>(null);
    const [citas] = useState([]);
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const Navigate = useNavigate();

    const handleLogin = async (e : any) => {
        e.preventDefault();

        try {
            const token = await loginUser({ email, password });
            localStorage.setItem('token', token); // Guarda el token en el almacenamiento local
            setMessage('Login exitoso');
            Navigate('/home')
        } catch (error) {
            setMessage(message);
        }
    };

    const handleCancel = () => {
    };

    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode<ExtendedJwtPayload>(token);
                setUserData({
                    id: decodedToken.Id,
                    email: decodedToken.Email,
                    telefono: decodedToken.Telefono,
                    nombre: decodedToken.Nombre,
                    roleId: decodedToken.RoleId, // Agrega el roleId al estado del usuario
                });
              
            } catch (error) {
                console.error('Error al decodificar el token:', error);
            }
        }
    }, []);
    

    const handleRegister = async (e : any) => {
        e.preventDefault();

        try {
            const responseMessage = await registerUser({ nombre, email, telefono, password });
            setMessage(responseMessage);
            Navigate('/login')
        } catch (error) {
            setMessage(message);
        }
    }
    
  return {
    email, 
    setEmail, 
    setPassword, 
    password, 
    message, 
    handleLogin, 
    handleCancel, 
    citas, 
    userData, 
    handleRegister, 
    telefono,
    nombre, 
    setNombre,
     setTelefono
  }
}

export default UseUser