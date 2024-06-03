import React from 'react'
import UseUser from '../../../Hooks/UseUser'

const CitaList = () => {
    const {citas} = UseUser();
  return (
    <div className="w-3/4 p-4">
    <h2 className="text-2xl font-bold mb-4">Tus citas</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {citas && Array.isArray(citas) && citas.map((item: any) => (
            <div key={item.citaId} className="bg-white border rounded-lg shadow-md p-4 cursor-pointer transition-transform transform hover:scale-105">
                <p className="text-lg font-bold mb-2">Cita #{item.citaId}</p>
                <p><span className="font-bold">Fecha:</span> {item.fechaHora}</p>
                <p><span className="font-bold">Estado:</span> {item.status}</p>
                <p><span className="font-bold">Sucursal:</span> {item.sucursalId}</p>
                <p><span className="font-bold">Tipo Cita:</span> {item.tipoCitaId}</p>
                <div className="mt-4 flex justify-between">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg" onClick={() => handleCancelarCita(item.citaId)}>Cancelar Cita</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={() => handleModificarCita(item.citaId)}>Modificar Cita</button>
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

export default CitaList