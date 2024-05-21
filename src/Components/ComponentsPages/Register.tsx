import React from 'react';
import { useForm } from 'react-hook-form';

interface RegisterFormInputs {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormInputs>();
  const password = watch('password');

  const onSubmit = (data: RegisterFormInputs) => {
    // Aquí puedes agregar la lógica para manejar el registro
    // Por ejemplo, llamar a una API para registrar al usuario
    console.log(data);
    // Si el registro es exitoso, redirigir a la página de login
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1em', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            id="name"
            {...register('name', { required: 'Este campo es requerido' })}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>

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
          <label htmlFor="phone">Teléfono:</label>
          <input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Este campo es requerido', pattern: { value: /^[0-9]{10}$/, message: 'Teléfono no válido, deben ser 10 dígitos' } })}
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            {...register('password', { required: 'Este campo es requerido', minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' } })}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', { 
              required: 'Este campo es requerido', 
              validate: value => value === password || 'Las contraseñas no coinciden' 
            })}
          />
          {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}
        </div>

        <div>
          <button type="submit">Registrar</button>
        </div>
      </form>
      <div>
        <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></p>
      </div>
    </div>
  );
};

export default Register;



