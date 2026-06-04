import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Mascotas from './pages/Mascotas';
import Citas from './pages/Citas';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', fontFamily: 'sans-serif', color: 'white' }}>
        {/* Barra de navegación provisional tipo app móvil */}
        <nav style={{ display: 'flex', gap: '20px', padding: '15px', backgroundColor: '#2a2a2a', justifyContent: 'center' }}>
          <Link to="/" style={{ color: '#4da6ff', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
          <Link to="/mascotas" style={{ color: '#4da6ff', textDecoration: 'none', fontWeight: 'bold' }}>Mascotas</Link>
          <Link to="/citas" style={{ color: '#4da6ff', textDecoration: 'none', fontWeight: 'bold' }}>Citas</Link>
        </nav>

        {/* Zona dinámica donde cambian las pantallas */}
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
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