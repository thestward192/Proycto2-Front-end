import { useEffect, useState } from 'react'
import { Sucursal, TipoCita } from '../Types/Types';

const useEditCita = () => {
    const [tipoCitaId, setTipoCitaId] = useState(0);
    const [sucursalId, setSucursalId] = useState(0);
    const [tiposCita, setTiposCita] = useState<TipoCita[]>([]);
    const [sucursales, setSucursales] = useState<Sucursal[]>([]);
    

    useEffect(() => {
        const fetchTiposCita = async () => {
          const response = await fetch('https://chocoproyecto-ii.onrender.com/api/TipoCita');
          const data = await response.json();
          setTiposCita(data);
        };
    
        const fetchSucursales = async () => {
          const response = await fetch('https://chocoproyecto-ii.onrender.com/api/Sucursal');
          const data = await response.json();
          setSucursales(data);
        };
    
        fetchTiposCita();
        fetchSucursales();
      }, []);
  return {
    tipoCitaId,
    sucursalId,
    sucursales,
    tiposCita,
    setTipoCitaId,
    setSucursalId
  }
}

export default useEditCita