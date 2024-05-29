import React from 'react';
import { useForm } from 'react-hook-form';
import Home from './LandingPage';

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data); // Submit form data here (e.g., send to server)
  };

  return (
   
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1em', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'Este campo es requerido', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Email no válido' } })}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            {...register('password', { required: 'Este campo es requerido' })}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>

        <div>
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
      <div>
        <p>¿No tienes una cuenta? <a href="/register">Regístrate</a></p>
        <p>Entrar al Home <a href="/Home">Home</a></p>
      </div>
    </div>
  );
};

export default Login;

