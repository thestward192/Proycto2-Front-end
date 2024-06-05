import {  useEffect, useState } from 'react';
import {  agregarCita, cancelarCita, eliminarCita, getCitas, obtenerCitasPorUsuario } from '../Services/ApiCita';
import UseUser from './UseUser';

export const useCita = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [citas, setCitas] = useState([]);
  const [message, setMessage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [selectedCita, setSelectedCita] = useState(null);
    const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  const {userData} = UseUser();

  useEffect(() => {
      if (userData && userData.id) {
          const fetchCitas = async () => {
              try {
                  const data = await obtenerCitasPorUsuario(userData.id);
                  setCitas(data);
              } catch (error) {
                  console.error('Error fetching citas:', error);
                  setMessage('Error fetching citas');
                  setModalIsOpen(true);
              } 
              finally{
                  setLoading(false);
              }
          };

          fetchCitas();
      } else {
          setLoading(false);
      }
  }, [userData]);

  const handleCancelarCita = async (citaId : any) => {
      try {
          await cancelarCita(citaId);
          setMessage(`Cita #${citaId} cancelada exitosamente`);
          setModalIsOpen(true);
          setCitas(citas.filter((cita) => cita.citaId !== citaId)); // Actualiza la lista de citas localmente
      } catch (error) {
          console.error('Error al cancelar la cita:', error);
          setMessage(`Error al cancelar la cita: ${error.message}`);
          setModalIsOpen(true);
      }
  };

  const closeModal = () => {
      setModalIsOpen(false);
  };



  const GetCita = async () => {
    setLoading(true);
    setError(null);

    try {
      await getCitas();
      setLoading(false);
      
    } catch (error) {
      setError('Error adding cita');
      setLoading(false);
    }
  };

  const handleEditCita = (cita : any) => {
    setSelectedCita(cita);
    setEditModalIsOpen(true);
};


const handleDeleteCita = async (citaId: any) => {
  try {
      await eliminarCita(citaId);
      console.log("Cita eliminada correctamente");
      window.location.reload();
  } catch (error) {
      setErrorMessage(error.message || 'Error al eliminar la cita');
      setErrorModalIsOpen(true);
  }
};


  return { GetCita, 
    loading, 
    error, 
    closeModal,
    modalIsOpen,
    handleCancelarCita,
     citas,
     message, 
     handleEditCita,
     selectedCita, 
     setMessage,
     handleDeleteCita,
     errorMessage,
     errorModalIsOpen,
     setErrorModalIsOpen
  };
};
﻿
