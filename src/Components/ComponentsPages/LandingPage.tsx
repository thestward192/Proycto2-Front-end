const landingpage = () => {
   return (
     <div className="container mx-auto px-4">
    
       <header className="flex items-center justify-between fixed top-0 z-50 w-full bg-white py-8 px-8 rounded-lg shadow-md">
         <h1 className="text-3xl font-bold text-black">Clínica San Martin</h1> {/* Replace with your clinic name */}
         <nav className="flex space-x-8">
           <a href="#" className="text-black font-bold hover:text-gray-400">Servicios</a>
           <a href="#" className="text-black font-bold hover:text-gray-400"> <a href="/login">Sucursales</a></a>
           <button type="button" className="text-white font-bold bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           <a href="/login">Iniciar Sesión</a>
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>  </nav>
       </header>
 
  
       <main className="relative bg-cover bg-no-repeat bg-center h-screen">
         <img src="src/assets/1692895125424.jpg" className="absolute  object-cover w-full h-full opacity-70" />
 
        
         <div className="flex flex-col items-center justify-center h-full text-center ">
           <h2 className="text-4xl font-bold text-black mb-8 opacity-90 ">Cuidamos de tu salud con pasión y profesionalismo.</h2>
           <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 break-line  opacity-90">Más Información</button>
         </div>

         
       </main>
 
      
       <footer className=" bg-white py-12 px-8 flex justify-center items-center rounded-lg shadow-md">
         <div className="flex flex-wrap justify-center gap-4">
           <div className="card w-64 bg-white rounded-md shadow-md p-4">
             <h3 className="text-gray-700 font-bold">Contáctanos</h3>
             <p className="text-gray-500 break-line">Dirección: Santa Cruz, Guanacaste</p>
             <p className="text-gray-500 break-line">Teléfono: 26801334</p>
             <p className="text-gray-500 break-line">Email: Clinica@gmail.com</p>
           </div>
           <div className="card w-64 bg-white rounded-md shadow-md p-4">
             <h3 className="text-gray-700 font-bold items-center">Sucursales</h3>
             <p className="text-gray-500 break-line">Santa Cruz</p>
             <p className="text-gray-500 break-line">Liberia</p>
             <p className="text-gray-500 break-line">Nicoya</p>
           </div>
           <div className="card w-64 bg-white rounded-md shadow-md p-4">
             <h3 className="text-gray-700 font-bold">Horarios</h3>
             <p className="text-gray-500 break-line">Lunes a Viernes: 7am a 5pm</p>
             <p className="text-gray-500 break-line">Sábados: 7pm a 12md</p>
           </div>
         </div>
       </footer>
     </div>
   );
 };
 
 export default landingpage;
 