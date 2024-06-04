// EditCitaModal.jsx
import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
    },
};

Modal.setAppElement('#root');

const EditCitaModal = ({ cita, isOpen, onRequestClose, onSave }) => {
    const [fechaHora, setFechaHora] = useState(cita.fechaHora);
    const [status, setStatus] = useState(cita.status);
    const [tipoCitaId, setTipoCitaId] = useState(cita.tipoCitaId);
    const [sucursalId, setSucursalId] = useState(cita.sucursalId);

    const handleSubmit = () => {
        const updatedCita = {
            ...cita,
            fechaHora,
            status,
            tipoCitaId,
            sucursalId,
        };
        onSave(updatedCita);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Edit Cita Modal"
        >
            <h2>Editar Cita</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div>
                    <label>Fecha y Hora:</label>
                    <input
                        type="datetime-local"
                        value={new Date(fechaHora).toISOString().slice(0, 16)}
                        onChange={(e) => setFechaHora(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Estado:</label>
                    <input
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Tipo Cita ID:</label>
                    <input
                        type="number"
                        value={tipoCitaId}
                        onChange={(e) => setTipoCitaId(parseInt(e.target.value))}
                        required
                    />
                </div>
                <div>
                    <label>Sucursal ID:</label>
                    <input
                        type="number"
                        value={sucursalId}
                        onChange={(e) => setSucursalId(parseInt(e.target.value))}
                        required
                    />
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onClick={onRequestClose}>Cancelar</button>
            </form>
        </Modal>
    );
};

export default EditCitaModal;
