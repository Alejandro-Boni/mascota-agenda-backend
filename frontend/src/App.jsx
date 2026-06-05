import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Mascotas from './pages/Mascotas';
import Citas from './pages/Citas';
import logo from './assets/Logo.png.jpeg'; // Importamos tu logo
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="bg-rey-dark min-h-screen text-white">
        {/* Barra de navegación estilizada con Tailwind */}
       <nav className="navbar">
  <img src={logo} alt="Logo Mascota Rey" className="logo" />
  <div className="nav-links">
    <Link to="/">Inicio</Link>
    <Link to="/mascotas">Mascotas</Link>
    <Link to="/citas">Citas</Link>
  </div>
</nav>

        {/* Zona dinámica */}
        <div className="max-w-4xl mx-auto p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mascotas" element={<Mascotas />} />
            <Route path="/citas" element={<Citas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;