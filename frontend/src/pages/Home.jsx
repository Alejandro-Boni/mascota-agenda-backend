import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="home-container">
      <h1 style={{ color: '#D4AF37' }}>Bienvenidos a Mascota Rey</h1>
      <p style={{ color: '#ffffff', fontSize: '1.2rem' }}>
        El servicio real que tu mascota merece. 
      </p>
      <div className="home-features">
        <Link to="/citas" className="feature-card-link">
          <div className="feature-card">
            <h3>Cuidado Premium</h3>
            <p>Atención personalizada para cada integrante de tu familia.</p>
          </div>
        </Link>
        
        <Link to="/citas" className="feature-card-link">
          <div className="feature-card">
            <h3>Agendamiento Ágil</h3>
            <p>Reserva su cita en segundos directamente a nuestro WhatsApp.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;