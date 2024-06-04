import { Link } from 'react-router-dom';
import UseUser from '../../Hooks/UseUser';

const Login = () => {
const {email,setEmail,setPassword, message, password, handleLogin, handleCancel} = UseUser();

    return (
      <>
          <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="h-12 w-auto mr-4" src="./src/assets/logo_clinica.jpg" alt="Clinica San Martin Logo" /> {/* Aquí se muestra la imagen del logo */}
        <span className="font-semibold text-xl tracking-tight">Choco Clinica</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            About
          </Link>
          {/* Añade más enlaces aquí si es necesario */}
        </div>
        <Link 
          to='/register'
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200"
        >
          Registrarse 
        </Link>
      </div>
    </nav>
        <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-md bg-white">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>
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
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
                    <button type="button" onClick={handleCancel} className="w-full bg-red-500 text-white py-2 rounded">Cancelar</button>
                </div>
            </form>
            {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
      </>
    );
};

export default Login;
