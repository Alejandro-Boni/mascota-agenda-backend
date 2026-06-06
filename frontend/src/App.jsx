import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/logo.png'; // Ahora es más limpio
import Home from './pages/Home';
import Citas from './pages/Citas';
import Mascotas from './pages/Mascotas';
import Precios from './pages/Precios';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo-container">
           {/* Usamos la variable 'logo' que importamos arriba */}
           <img src={logo} alt="Mascota Rey" style={{ height: '50px' }} />
        </div>
        
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/mascotas">Mascotas</Link>
          <Link to="/citas">Citas</Link>
          <Link to="/precios">Precios</Link>
        </div>
      </nav>
      {/* ... resto del código igual ... */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mascotas" element={<Mascotas />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/precios" element={<Precios />} />
      </Routes>
    </Router>
  );
}

export default App;