import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "./src/assets/vecteezy_success-smart-medical-doctor-working-with-operating-room-as_5320098.jpg",
    "./src/assets/vecteezy_healthcare-professional-holding-a-stethoscope_2133122.jpg",
    "./src/assets/vecteezy_banner-background-of-professional-surgical-doctor-team-are_6832219.jpg"
  ]; // Rutas de las imágenes
  const carouselInterval = 2000; // Intervalo de cambio de imagen en milisegundos

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, carouselInterval);

    return () => clearInterval(intervalId); // Limpia el temporizador al desmontar el componente
  }, [images.length]); 

  return (
    <div className="relative">
      <header className="absolute top-0 left-0 right-0 z-50 bg-white py-8 px-8 rounded-lg shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold text-black">Choco Clinica</h1>
          <nav className="flex space-x-8">
            <a href="#" className="text-black font-bold hover:text-gray-400">Servicios</a>
            <button type="button" className="text-white font-bold bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
              <a href="/login">Iniciar Sesión</a>
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
            <button type="button" className="text-white font-bold bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
              <a href="/register">Registrarse</a>
            </button>
          </nav>
        </div>
      </header>

      <section className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <img src={images[currentImageIndex]} alt="Banner" className="w-full h-full object-cover filter brightness-75" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
          <h2 className="text-5xl font-bold mb-8 opacity-90">Cuidamos de tu salud con pasión y profesionalismo.</h2>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200 opacity-90">Más Información</button>
        </div>
      </section>

      <footer className="bg-nayblue-100 py-12 px-8 flex justify-center items-center rounded-lg shadow-md">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="card w-64 bg-white rounded-md shadow-md p-4 flex flex-col items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 text-4xl mb-4" />
            <h3 className="text-gray-700 font-bold">Contáctanos</h3>
            <p className="text-gray-500 break-line">Dirección: Santa Cruz, Guanacaste</p>
            <p className="text-gray-500 break-line">Teléfono: 26801334</p>
            <p className="text-gray-500 break-line">Email: Clinica@gmail.com</p>
          </div>
          <div className="card w-64 bg-white rounded-md shadow-md p-4 flex flex-col items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 text-4xl mb-4" />
            <h3 className="text-gray-700 font-bold">Sucursales</h3>
            <p className="text-gray-500 break-line">Santa Cruz</p>
            <p className="text-gray-500 break-line">Liberia</p>
            <p className="text-gray-500 break-line">Nicoya</p>
          </div>
          <div className="card w-64 bg-white rounded-md shadow-md p-4 flex flex-col items-center">
            <FontAwesomeIcon icon={faClock} className="text-gray-400 text-4xl mb-4" />
            <h3 className="text-gray-700 font-bold">Horarios</h3>
            <p className="text-gray-500 break-line">Lunes a Viernes: 7am a 5pm</p>
            <p className="text-gray-500 break-line">Sábados: 7pm a 12md</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
