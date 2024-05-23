import { BrowserRouter , Routes, Route} from "react-router-dom"
import Register from "./Components/ComponentsPages/Register"
import Login from "./Components/ComponentsPages/Login"
import Home from "./Components/ComponentsPages/Home"
import CitasList from "./Components/ComponentsPages/ComponentApi/CitasList"

const App = () => {
  return (
     <BrowserRouter>
      <Routes>

          <Route path="/Login" element = {<Login/>}/>
          <Route path="/Register" element = {<Register/>}/>
          <Route path="/Home" element = {<Home/>} />
      
          
          
      </Routes>
    </BrowserRouter>
  )
}

export default App