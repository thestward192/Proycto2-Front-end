import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/ComponentsPages/AuthContext';
import Login from './Components/ComponentsUser/Login';
import LandingPage from './Components/ComponentsPages/LandingPage';
import Register from './Components/ComponentsUser/Register';
import Home from './Components/ComponentsPages/Home';
import ProtectedRoute from './Components/ComponentsPages/ProtectedRoute';
import AdminPage from './Components/ComponentsAdmin/AdminPage';
import NotFoundPage from './Components/ComponentsPages/NotFoundPage';



const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
                    path="/home"
                    element={
                        <ProtectedRoute
                            element={<Home />}
                            allowedRoles={[2]} // Aquí defines los roles permitidos para esta ruta
                        />
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute
                            element={<AdminPage />}
                            allowedRoles={[1]} // Solo el rol de administrador está permitido
                          /> 
                    }
                    />
                    <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
