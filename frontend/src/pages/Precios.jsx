import '../App.css';

function Precios() {
  return (
    <div className="precios-container">
      <h2 style={{ color: '#D4AF37', textAlign: 'center' }}>Tarifas Generales 2026</h2>
      <table className="tabla-precios">
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Baño perro pequeño</td><td>$70.000</td></tr>
          <tr><td>Baño y corte perro pequeño</td><td>$80.000</td></tr>
          <tr><td>Baño perro mediano</td><td>$75.000</td></tr>
          <tr><td>Baño y corte perro mediano</td><td>$95.000</td></tr>
          <tr><td>Baño perro grande</td><td>$100.000</td></tr>
          <tr><td>Baño y corte perro grande</td><td>$120.000</td></tr>
          <tr><td>Baño perro gigante</td><td>$120.000</td></tr>
          <tr><td>Baño y corte gigante</td><td>$150.000</td></tr>
          <tr><td>Baño gato pelo corto</td><td>$70.000</td></tr>
          <tr><td>Baño gato pelo largo</td><td>$75.000</td></tr>
          <tr><td>Gato baño y corte</td><td>$95.000</td></tr>
        </tbody>
      </table>
      <p style={{ color: '#D4AF37', textAlign: 'center', marginTop: '20px' }}>
        *Precios sujetos a variación según raza y estado del peludito.
      </p>
    </div>
  );
}

export default Precios;