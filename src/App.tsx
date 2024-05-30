import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/ComponentsPages/AuthContext';
import Login from './Components/ComponentsPages/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import Profile from './Components/ComponentsPages/Profile';
import Home from './Components/ComponentsPages/Home';
import LandingPage from './Components/ComponentsPages/LandingPage';
import Register from './Components/ComponentsPages/Register';


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path = "/home" element = {<Home/>} />

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
