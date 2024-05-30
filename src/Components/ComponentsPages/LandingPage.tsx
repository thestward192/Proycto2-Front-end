import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faClock, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://www.consalud.es/uploads/s1/11/91/33/9/profesional-de-enfermeria-foto-freepik.jpeg",
    "https://www.consalud.es/uploads/s1/13/33/90/6/foto-enfermeros-foto-freepik.jpeg",
    "https://salud-sociales.udla.cl/wp-content/uploads/sites/70/2019/10/tecnico-en-nivel-superior-en-enfermeria.jpg"
  ]; // Rutas de las imágenes
  const carouselInterval = 2000; // Intervalo de cambio de imagen en milisegundos

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, carouselInterval);

    return () => clearInterval(intervalId); // Limpia el temporizador al desmontar el componente
  }, [images.length]); 

  return (
    <div className={`container mx-auto px-0 ${darkMode ? 'dark' : ''}`}>
      <header className="flex items-center justify-between fixed top-0 z-50 w-full bg-white dark:bg-gray-900 py-8 px-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-black dark:text-white">Clínica San Martin</h1>
        <nav className="flex space-x-8">
          <a href="#" className="text-black font-bold hover:text-gray-400 dark:text-white dark:hover:text-gray-400">Servicios</a>
          <button type="button" className="text-white font-bold bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <a href="/login">Iniciar Sesión</a>
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
          <button type="button" className="text-white font-bold bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
            <a href="/register">Registrarse</a>
          </button>
        </nav>
      </header>

      <section className="relative bg-cover bg-no-repeat bg-center h-screen flex items-center">
        <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
          <div className="flex flex-col justify-center items-center h-full text-white">
            <h2 className="text-4xl font-bold mb-8 opacity-90">Cuidamos de tu salud con pasión y profesionalismo.</h2>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200 opacity-90">Más Información</button>
          </div>
        </div>
      </section>

      <footer className="bg-nayblue-100 dark:bg-gray-800 py-12 px-8 flex justify-center items-center rounded-lg shadow-md">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="card w-64 bg-white dark:bg-gray-700 rounded-md shadow-md p-4 flex flex-col items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 text-4xl mb-4" />
            <h3 className="text-gray-700 dark:text-white font-bold">Contáctanos</h3>
            <p className="text-gray-500 dark:text-gray-300 break-line">Dirección: Santa Cruz, Guanacaste</p>
            <p className="text-gray-500 dark:text-gray-300 break-line">Teléfono: 26801334</p>
            <p className="text-gray-500 dark:text-gray-300 break-line">Email: Clinica@gmail.com</p>
          </div>
          <div className="card w-64 bg-white dark:bg-gray-700 rounded-md shadow-md p-4 flex flex-col items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 text-4xl mb-4" />
            <h3 className="text-gray-700 dark:text-white font-bold">Sucursales</h3>
            <p className="text-gray-500 dark:text-gray-300 break-line">Santa Cruz</p>
            <p className="text-gray-500 dark:text-gray-300 break-line">Liberia</p>
            <p className="text-gray-500 dark:text-gray-300 break-line">Nicoya</p>
          </div>
          <div className="card w-64 bg-white dark:bg-gray-700 rounded-md shadow-md p-4 flex flex-col items-center">
            <FontAwesomeIcon icon={faClock} className="text-gray-400 text-4xl mb-4" />
            <h3 className="text-gray-700 dark:text-white font-bold">Horarios</h3>
            <p className="text-gray-500 dark:text-gray-300 break-line">Lunesa Viernes: 7am a 5pm</p>
            <p className="text-gray-500 dark:text-gray-300 break-line">Sábados: 7pm a 12md</p>
          </div>
        </div>
      </footer>

      <button className={`fixed bottom-4 right-4 ${darkMode ? 'bg-yellow-500' : 'bg-gray-800'} text-white px-4 py-2 rounded-full shadow-md hover:${darkMode ? 'bg-yellow-600' : 'bg-gray-900'} text-xl`} onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-white" />
      </button>
    </div>
  );
};

export default LandingPage;

