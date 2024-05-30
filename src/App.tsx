import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/ComponentsPages/AuthContext';
import Login from './Components/ComponentsPages/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import Profile from './Components/ComponentsPages/Profile';
import Home from './Components/ComponentsPages/Home';
import LandingPage from './Components/ComponentsPages/LandingPage';


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path = "/home" element = {<Home/>} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
