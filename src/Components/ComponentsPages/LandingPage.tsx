import { useState, useEffect, useRef } from 'react';
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

  const servicesSectionRef = useRef<HTMLDivElement | null>(null); // Corregimos el tipo de referencia

  const handleScrollToServices = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const servicesSection = servicesSectionRef.current;
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Ajustamos el desplazamiento más lento y desde el inicio
    }
  };

  const docsSectionRef = useRef<HTMLDivElement | null>(null); // Corregimos el tipo de referencia

  const handleScrollToDoc = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const docsSection = docsSectionRef.current;
    if (docsSection) {
      docsSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Ajustamos el desplazamiento más lento y desde el inicio
    }
  };

  return (
    <div className="relative">
      <header className="absolute top-0 left-0 right-0 z-50 bg-gray-200 py-8 px-8 rounded-lg shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <img src="./src/assets/logo_clinica.jpg" alt="Clinica Logo" className="w-12 h-12 rounded-full mr-4" /> {/* Agregamos la imagen del logo */}
          <h1 className="text-3xl font-bold text-gray-900">Choco Clinica</h1>
        </div>
        <nav className="flex space-x-8">
          <a href="#servicios" className="text-gray-900 font-bold hover:text-gray-400" onClick={handleScrollToServices}>Servicios</a> {/* Cambiamos el texto a "Servicios" */}
          <a href="#doctores" className="text-gray-900 font-bold hover:text-gray-400" onClick={handleScrollToDoc}>Doctores</a> {/* Agregamos el enlace para la sección de Doctores */}
          <button type="button" className="text-gray-900 font-bold bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
            <a href="/login">Agregar cita</a>
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
          <button type="button" className="text-gray-900 font-bold bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
            <a href="/register">Registrarse</a>
          </button>
        </nav>
      </header>

      <section className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <img src={images[currentImageIndex]} alt="Banner" className="w-full h-full object-cover filter brightness-75" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
          <h2 className="text-5xl font-bold mb-8 opacity-90">Cuidamos de tu salud con pasión y profesionalismo.</h2>
          <a href="#servicios" className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200 opacity-90" onClick={handleScrollToServices}>Servicios</a> {/* Enlace para ir a la sección de servicios */}
        </div>
      </section>

      <section id="servicios" className="bg-gray-200 text-gray-900 py-12 px-8 flex justify-center items-center rounded-lg shadow-md" ref={servicesSectionRef}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-gray-300 rounded-md shadow-md p-4 flex flex-col items-center">
              <img src="https://magnetosur.com/wp-content/uploads/2021/11/En-que-casos-se-debe-recurrir-a-la-medicina-general.jpg" alt="Medicina General" className="w-full rounded-md mb-4" />
              <h3 className="text-gray-700 font-bold">Medicina General</h3>
              <p className="text-gray-500 break-line">Ofrecemos atención médica integral para mantener tu bienestar general.</p>
            </div>
            <div className="card bg-gray-300 rounded-md shadow-md p-4 flex flex-col items-center">
              <img src="https://amarillascr.es/wp-content/uploads/2022/03/image-1-1.jpg" alt="Odontología" className="w-full rounded-md mb-4" />
              <h3 className="text-gray-700 font-bold">Odontología</h3>
              <p className="text-gray-500 break-line">Ofrecemos tratamientos dentales de alta calidad para mantener tu salud bucal.</p>
            </div>
            <div className="card bg-gray-300 rounded-md shadow-md p-4 flex flex-col items-center">
              <img src="https://plustatic.com/6103/conversions/tipos-pediatras-default.jpg" alt="Pediatría" className="w-full rounded-md mb-4" />
              <h3 className="text-gray-700 font-bold">Pediatría</h3>
              <p className="text-gray-500 break-line">Nos especializamos en el cuidado de la salud de los niños, desde recién nacidos hasta adolescentes.</p>
            </div>
            <div className="card bg-gray-300 rounded-md shadow-md p-4 flex flex-col items-center">
              <img src="https://giovanafemat.com/wp-content/uploads/2020/12/neurologia-historia-1024x683.jpg" alt="Neurología" className="w-full rounded-md mb-4" />
              <h3 className="text-gray-700 font-bold">Neurología</h3>
              <p className="text-gray-500 break-line">Contamos con expertos en el diagnóstico y tratamiento de trastornos neurológicos.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="doctores" className="bg-gray-200 text-gray-900 py-12 px-8 flex justify-center items-center rounded-lg shadow-md" ref={docsSectionRef}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Doctores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-gray-300 rounded-md shadow-md p-4 flex flex-col items-center">
              <img src="https://www.shutterstock.com/image-photo/africanamerican-black-doctor-man-isolated-600nw-238383133.jpg" alt="Stward Serrano" className="w-full rounded-md mb-4" />
              <h3 className="text-gray-700 font-bold">Stward Serrano</h3>
              <p className="text-gray-500 break-line">Especialista en Medicina General</p>
            </div>
            <div className="card bg-gray-300 rounded-md shadow-md p-4 flex flex-col items-center">
              <img src="https://img.freepik.com/fotos-premium/retrato-medico-o-especialista-medico-retrato-vertical-hombre-matorrales-pie-manos-cruzadas-oficina_116317-9573.jpg" alt="Hezron Araya" className="w-full rounded-md mb-4" />
              <h3 className="text-gray-700 font-bold">Hezron Araya</h3>
              <p className="text-gray-500 break-line">Especialista en Odontología</p>
            </div>
            <div className="card bg-gray-300 rounded-md shadow-md p-4 flex flex-col items-center">
              <img src="https://www.shutterstock.com/image-photo/vertical-portrait-female-doctor-sitting-600nw-1854759106.jpg" alt="Fabiola Carrera" className="w-full rounded-md mb-4" />
              <h3 className="text-gray-700 font-bold">Fabiola Carrera</h3>
              <p className="text-gray-500 break-line">Pediatra</p>
            </div>
            <div className="card bg-gray-300 rounded-md shadow-md p-4 flex flex-col items-center">
              <img src="https://thumbs.dreamstime.com/b/confident-doctor-stethoscope-around-neck-portrait-young-male-over-white-background-vertical-shot-39367531.jpg" alt="Oscar Sanchez" className="w-full rounded-md mb-4" />
              <h3 className="text-gray-700 font-bold">Oscar Sanchez</h3>
              <p className="text-gray-500 break-line">Especialista en Cirugía</p>
            </div>
            <div className="card bg-gray-300 rounded-md shadow-md p-4 flex flex-col items-center">
              <img src="https://st3.depositphotos.com/9970522/13230/i/450/depositphotos_132301524-stock-photo-african-american-black-doctor-man.jpg" alt="Robert Cascante" className="w-full rounded-md mb-4" />
              <h3 className="text-gray-700 font-bold">Robert Cascante</h3>
              <p className="text-gray-500 break-line">Neurólogo</p>
            </div>
            <div className="card bg-gray-300 rounded-md shadow-md p-4 flex flex-col items-center">
              <img src=" https://www.shutterstock.com/image-photo/vertical-shot-young-happy-cheerful-600nw-2033522243.jpg" alt="Oscar Sanchez" className="w-full rounded-md mb-4" />
              <h3 className="text-gray-700 font-bold">Lawrens Fowks</h3>
              <p className="text-gray-500 break-line">Especialista en Full Stack</p>
            </div>
          </div>
        </div>
      </section>
      

      <section className="bg-gray-200 text-gray-900 py-12 px-8 flex justify-center items-center rounded-lg shadow-md">
        <p className="text-lg font-semibold">Con nosotros, tu salud está en buenas manos.</p>
      </section>

      <footer className="bg-gray-200 text-gray-900 py-12 px-8 flex justify-center items-center rounded-lg shadow-md">
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
    </div>
  );
};

export default LandingPage;
