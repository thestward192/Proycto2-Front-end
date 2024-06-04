import ModalComponent from './modalCita';
import { useCita } from '../../Hooks/UseCita';
import ErrorModal from './modalDeleteCita';

const CitaList = () => {
    const { citas, loading, closeModal, handleCancelarCita, modalIsOpen, message, handleDeleteCita, errorMessage, errorModalIsOpen, setErrorModalIsOpen } = useCita();


    return (
        <div className="w-3/4 p-4">
            {loading && <p>Is loading...</p>}
            <h2 className="text-2xl font-bold mb-4">Tus citas</h2>
            <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal} message={message} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {citas.length === 0 && !loading ? (
                    <p></p>
                ) : (
                    citas.map((item: any) => (
                        <div key={item.citaId} className="bg-white border rounded-lg shadow-md p-4 cursor-pointer transition-transform transform hover:scale-105">
                            <p className="text-lg font-bold mb-2">Cita #{item.citaId}</p>
                            <p><span className="font-bold">Fecha:</span> {new Date(item.fechaHora).toLocaleString()}</p>
                            <p><span className="font-bold">Estado:</span> {item.status}</p>
                            <p><span className="font-bold">Sucursal:</span> {item.sucursalNombre}</p>
                            <p><span className="font-bold">Tipo Cita:</span> {item.tipoCitaNombre}</p>
                            <div className="mt-4 flex justify-between">
                                <button
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-lg"
                                    onClick={() => handleCancelarCita(item.citaId)}
                                >
                                    Cancelar Cita
                                </button>

                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg ml-2" // Agregamos ml-2 para un margen izquierdo
                                    onClick={() => handleDeleteCita(item.citaId)}
                                >
                                    Eliminar Cita
                                </button>

                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-lg ml-2" // Agregamos ml-2 para un margen izquierdo
                                   
                                >
                                    Modificar Cita
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {errorModalIsOpen && (
                <ErrorModal
                    isOpen={errorModalIsOpen}
                    onRequestClose={() => setErrorModalIsOpen(false)}
                    errorMessage={errorMessage}
                />
            )}
        </div>
    );
};

export default CitaList;
