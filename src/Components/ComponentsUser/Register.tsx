import UseUser from '../../Hooks/UseUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import logoClinica from '../../assets/logo_clinica.jpg'; // Importa la imagen del logo
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const { handleRegister, nombre, telefono, email, password, message, setEmail, setPassword, setNombre, setTelefono, handleCancel } = UseUser();

  return (
    <>
     <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-6">
      <div className="flex items-center flex-shrink-0 text-gray-700 mr-6">
        <img className="h-12 w-12 rounded-full mr-4" src="./src/assets/logo_clinica.jpg" alt="Clinica San Martin Logo" /> {/* Aquí se muestra la imagen del logo */}
        <span className="font-semibold text-xl tracking-tight">Choco Clinica</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {/* Añade más enlaces aquí si es necesario */}
        </div>
        <Link 
          to='/login'
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-500"
        >
          Iniciar sesión
        </Link>
      </div>
    </nav>
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(./src/assets/vecteezy_healthcare-professional-holding-a-stethoscope_2133122.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay oscuro */}
        <div className="relative flex items-center justify-center min-h-screen">
          <div className="max-w-3xl mx-auto p-6 border rounded shadow-md bg-white bg-opacity-90"> {/* Ancho máximo del card ajustado */}
            <div className="mb-4 flex items-center justify-center">
              <img src={logoClinica} className="h-24 w-24 rounded-full mb-4" alt="Clinica San Martin Logo" /> {/* Imagen del logo encima del formulario */}
            </div>
            <h1 className="text-2xl font-semibold text-gray-700 mb-4 min-w-[450px]">Registro de Usuario</h1>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label className="block text-gray-700">Nombre:</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Teléfono:</label>
                <input
                  type="text"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Contraseña:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex space-x-2">
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Registrar</button>
                <button type="button" onClick={handleCancel} className="w-full bg-red-500 text-white py-2 rounded">Cancelar</button>
              </div>
            </form>
            {message && <p className="mt-4 text-red-500">{message}</p>}
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 text-gray-900 py-12 px-8 flex justify-center items-center rounded-lg shadow-md mt-4">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="card w-72 bg-white rounded-md shadow-md p-4 flex flex-col items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 text-4xl mb-4" />
            <h3 className="text-gray-700 font-bold">Contáctanos</h3>
            <p className="text-gray-500 break-line">Dirección: Santa Cruz, Guanacaste</p>
            <p className="text-gray-500 break-line">Teléfono: 26801334</p>
            <p className="text-gray-500 break-line">Email: Clinica@gmail.com</p>
          </div>
          <div className="card w-72 bg-white rounded-md shadow-md p-4 flex flex-col items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 text-4xl mb-4" />
            <h3 className="text-gray-700 font-bold">Sucursales</h3>
            <p className="text-gray-500 break-line">Santa Cruz</p>
            <p className="text-gray-500 break-line">Liberia</p>
            <p className="text-gray-500 break-line">Nicoya</p>
          </div>
          <div className="card w-72 bg-white rounded-md shadow-md p-4 flex flex-col items-center">
            <FontAwesomeIcon icon={faClock} className="text-gray-400 text-4xl mb-4" />
            <h3 className="text-gray-700 font-bold">Horarios</h3>
            <p className="text-gray-500 break-line">Lunes a Viernes: 7am a 5pm</p>
            <p className="text-gray-500 break-line">Sábados: 7pm a 12md</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default RegisterForm;
