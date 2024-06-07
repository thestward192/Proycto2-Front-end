import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AgregarCitaFormProps, Cita, FormValues } from '../../Types/Types';
import { agregarCita } from '../../Services/ApiCita';
import useAddCita from '../../Hooks/useAddCita';

const AgregarCitaForm: React.FC<AgregarCitaFormProps> = ({ userId }) => {
  const { tipoCitaId, setTipoCitaId, sucursalId, setSucursalId, tiposCita, sucursales } = useAddCita();

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const newCita: Cita = {
      citaId: 0,
      fechaHora: new Date(data.fechaHora),
      status: 'ACTIVA',
      tipoCitaId: data.tipoCitaId,
      sucursalId: data.sucursalId
    };

    try {
      await agregarCita(newCita, userId);
      setSuccess('Cita agregada exitosamente');
      setError(null);
      window.location.reload();
    } catch (err: any) {
      setError('Error al agregar la cita');
      setSuccess(null);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Agregar Cita</h2>
      {success && <p className="text-green-500">{success}</p>}
      
      <div className="mb-4">
        <label className="block text-gray-700">Fecha y Hora:</label>
        <input
          type="datetime-local"
          {...register('fechaHora', { required: 'Este campo es obligatorio' })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.fechaHora && <p className="text-red-500">{errors.fechaHora.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Tipo de Cita:</label>
        <select
          {...register('tipoCitaId', { required: 'Este campo es obligatorio' })}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Seleccione un tipo de cita</option>
          {tiposCita.map((tipo) => (
            <option key={tipo.tipoCitaId} value={tipo.tipoCitaId}>
              {tipo.nombre}
            </option>
          ))}
        </select>
        {errors.tipoCitaId && <p className="text-red-500">{errors.tipoCitaId.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Sucursal:</label>
        <select
          {...register('sucursalId', { required: 'Este campo es obligatorio' })}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Seleccione una sucursal</option>
          {sucursales.map((sucursal) => (
            <option key={sucursal.sucursalId} value={sucursal.sucursalId}>
              {sucursal.nombre}
            </option>
          ))}
        </select>
        {errors.sucursalId && <p className="text-red-500">{errors.sucursalId.message}</p>}
        {error && <p className="text-red-500">{error}: No se pueden agendar 2 citas el mismo dia</p>}
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Agregar Cita
      </button>
    </form>
  );
};

export default AgregarCitaForm;
