import AddCitaForm from './ComponentApi/AgregarCita'
import CitaList from './ComponentApi/CitaList'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
<CitaList/>
<AddCitaForm />

    </div>
  )
}

export default Home