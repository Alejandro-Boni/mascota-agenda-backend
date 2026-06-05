import { useState } from 'react';
import '../App.css'; 

function Citas() {
  const [formData, setFormData] = useState({
    nombreDueño: '',
    nombreMascota: '',
    servicio: '',
    fecha: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const enviarWhatsApp = () => {
  // Verificamos si los campos están llenos
  if (!formData.nombreDueño || !formData.nombreMascota) {
    alert("Por favor, llena al menos tu nombre y el de tu mascota.");
    return;
  }
  
  const telefono = "573204365478"; 
  const mensaje = `Hola, mi nombre es ${formData.nombreDueño}. Quiero agendar una cita para mi mascota ${formData.nombreMascota}. Servicio: ${formData.servicio}. Fecha: ${formData.fecha}.`;
  window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
};

  return (
    <div className="citas-container">
      <h2 style={{ color: '#D4AF37' }}>Agendar Cita</h2>
      <input name="nombreDueño" placeholder="Nombre del Dueño" onChange={handleChange} />
      <input name="nombreMascota" placeholder="Nombre de la Mascota" onChange={handleChange} />
      <input name="servicio" placeholder="Servicio (Baño, Corte...)" onChange={handleChange} />
      <input name="fecha" type="date" onChange={handleChange} />
      
      <button onClick={enviarWhatsApp} className="btn-whatsapp">
        Agendar por WhatsApp
      </button>
    </div>
  );
}

export default Citas;