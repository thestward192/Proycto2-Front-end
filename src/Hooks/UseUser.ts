import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getSucursalId, getTipoCitaId, loginUser, registerUser } from '../Services/ApiEntities';
import { jwtDecode } from 'jwt-decode';
import { RegisterFormInputs } from '../Types/Types';

const UseUser = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [userData, setUserData] = useState({});
    const [citas, setCitas] = useState([]);
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
            setMessage(error.message);
        }
    };

    const handleCancel = () => {
      Navigate('/')
    };

    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
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
            setMessage(error.message);
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