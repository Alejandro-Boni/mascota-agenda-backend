import { useNavigate } from 'react-router-dom';
import '../App.css';

function Mascotas() {
  const navigate = useNavigate();

  const listaMascotas = [
    { nombre: 'Logan', raza: 'Golden Retriever', servicio: 'Baño y Corte' },
    { nombre: 'Luna', raza: 'Beagle', servicio: 'Lavado dental' },
    { nombre: 'Max', raza: 'Bulldog', servicio: 'Control General' },
    { nombre: 'Logan', raza: 'Criollo', servicio: 'Limpiado de orejas' }
  ];

  const handleClicMascota = (nombre) => {
    navigate('/citas', { state: { mascota: nombre } });
  };

  return (
    <div className="catalogo-container">
      <h2 style={{ color: '#D4AF37', textAlign: 'center' }}>Nuestros Amigos</h2>
      <div className="grid-mascotas">
        {listaMascotas.map((mascota, index) => (
          <div 
            key={index} 
            className="card-mascota" 
            onClick={() => handleClicMascota(mascota.nombre)}
            style={{ cursor: 'pointer' }}
          >
            <h3>{mascota.nombre}</h3>
            <p><strong>Raza:</strong> {mascota.raza}</p>
            <p><strong>Servicio:</strong> {mascota.servicio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mascotas;