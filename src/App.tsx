import { BrowserRouter , Routes, Route} from "react-router-dom"
import Register from "./Components/ComponentsPages/Register"
import Login from "./Components/ComponentsPages/Login"
import LandingPage from "./Components/ComponentsPages/LandingPage"
import Home from "./Components/ComponentsPages/Home"


const App = () => {
  return (
     <BrowserRouter>
      <Routes>

          <Route path="/login" element = {<Login/>}/>
          <Route path="/Register" element = {<Register/>}/>
          <Route path="/" element = {<LandingPage/>}/>
          <Route path="/home" element =  {<Home/>}/>
          
          
      </Routes>
    </BrowserRouter>
  )
}

export default App