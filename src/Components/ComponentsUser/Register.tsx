import UseUser from '../../Hooks/UseUser';
import Navbar from '../ComponentsPages/Navbar';

const RegisterForm = () => {
    const {handleRegister, nombre, telefono, email, password, message, setEmail, setPassword, setNombre, setTelefono, handleCancel} = UseUser();
  

    return (
      <>
      <Navbar/>
        <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-md bg-white">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">Registro de Usuario</h1>
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
      </>
    );
};

export default RegisterForm;