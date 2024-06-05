import { Link, useNavigate } from 'react-router-dom';
import { useCita } from '../../Hooks/UseCita';
import useAdmin from '../../Hooks/useAdmin';
import UseUser from '../../Hooks/UseUser';

const AdminPage = () => {
  const { citas } = useAdmin();
  const {handleDeleteCita} = useCita();
  const {userData} = UseUser();
  const Navigate = useNavigate();
  const handleLogout = () => {
    // Eliminar el token del localStorage
    localStorage.removeItem('token');

    // Redirigir al usuario a la página de login
    Navigate('/login');
  };

  return (
    <div className="p-4">
       <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <img className="h-12 w-auto mr-4" src="./src/assets/logo_clinica.jpg" alt="Clinica San Martin Logo" />
      <span className="font-semibold text-xl tracking-tight">Choco Clinica</span>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow"></div>
      <div className="flex items-center text-white">
        <div className="mr-4">
          <i className="fas fa-user-circle fa-lg"></i>
          <span className="ml-2">{userData.nombre}</span>
          <p>Email: {userData.email}</p>
          <p>Telefono: {userData.telefono}</p>
        </div>
        <button
            onClick={handleLogout}
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200"
          >
            Cerrar sesión
          </button>
      </div>
    </div>
  </nav>
      <h2 className="text-2xl font-bold mb-4">Citas por Fecha</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-50">
  <tr>
    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre Paciente</th>
    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo Cita</th>
    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Sucursal</th>
    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
  </tr>
</thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {citas.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 whitespace-nowrap text-center">{item.userName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{item.fechaHora}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{item.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{item.tipoCitaNombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{item.sucursalNombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center"><button onClick={() => handleDeleteCita(item.citaId)} className="bg-red-500 text-white font-bold py-2 px-4 rounded">Eliminar Cita</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
