export interface CitaM {
    citaId: number;
    fechaHora: string;
    userId: number;
    tipoCitaId: number;
    sucursalId: number;
  }
export const modificarCita = async (cita: CitaM): Promise<void> => {
  const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local o de donde lo tengas guardado
  try {
    const response = await fetch(`https://localhost:7080/api/Cita/${cita.citaId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Incluye el token en los headers
      },
      body: JSON.stringify(cita)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al modificar la cita');
    }
  } catch (error) {
    throw new Error('Error al modificar la cita');
  }
};
