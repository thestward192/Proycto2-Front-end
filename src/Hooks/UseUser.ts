import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../Services/ApiEntities';
import { jwtDecode } from 'jwt-decode';
import { RegisterFormInputs } from '../Types/Types';

const UseUser = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [userData, setUserData] = useState({});
    const [citas, setCitas] = useState(null);
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
                  id: decodedToken.nameid,
                  email: decodedToken.email,
                  telefono: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone'],
                  nombre: decodedToken.unique_name
              });              
              
                console.log(decodedToken)

                if (userData.id) {
                    fetch(`https://localhost:7080/api/Cita/user/${userData.id}`)

                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Error al obtener citas del usuario');
                        }
                        return response.json();
                    })
                    .then(data => {
                        setCitas(data);
                        console.log(userData)
                    })
                    .catch(error => {
                        console.error('Error al obtener citas del usuario:', error);
                    });
                }
            } catch (error) {
                console.error('Error al decodificar el token:', error);
            }
        }

        
    }, [userData.id]); 

    const handleRegister = async (e : any) => {
        e.preventDefault();

        try {
            const responseMessage = await registerUser({ nombre, email, telefono, password });
            setMessage(responseMessage);
        } catch (error) {
            setMessage(error.message);
        }
    };

  return {
    email, setEmail, setPassword, password, message, handleLogin, handleCancel, citas, userData, handleRegister, telefono, nombre, setNombre, setTelefono
  }
}

export default UseUser