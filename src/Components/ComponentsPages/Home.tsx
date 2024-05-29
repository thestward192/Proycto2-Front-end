import React from 'react';
import AddCitaForm from './ComponentApi/AgregarCita';
import CitaList from './ComponentApi/CitaList';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <CitaList />
        <AddCitaForm />
      </div>
    </div>
  );
};

export default Home;
