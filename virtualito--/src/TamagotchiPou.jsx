import { useState } from 'react';
import happy from './assets/happy.png';
import hungry from './assets/hungry.jpg';
import sleepy from './assets/sleepy.jpg';

export default function TamagotchiPou() {
  // 1. Estado inicial de la emoción
  const [emocion, setEmocion] = useState("FELIZ"); // Valores posibles: "FELIZ", "HAMBRIENTO", "SUENO"

  // 2. Definimos las imágenes y colores según el estado
  let imagenPou;
  let colorFondo;

  // IMPORTANTE: Asegúrate de que las rutas a las imágenes coincidan
  // con la ubicación de tus archivos (ej. dentro de /public/images/)
  
  if (emocion === "FELIZ") {
    imagenPou = happy; // Ruta relativa desde la carpeta public
    colorFondo = "#c3e6cb"; // Un verde suave
  } else if (emocion === "HAMBRIENTO") {
    imagenPou = hungry;
    colorFondo = "#ffeeba"; // Un amarillo suave
  } else if (emocion === "SUENO") {
    imagenPou = sleepy;
    colorFondo = "#b8daff"; // Un azul suave
  }

  // 3. Funciones para actualizar el estado
  // (¡Podemos declararlas directamente en el onClick para código más limpio!)

  return (
    <div style={{ 
      backgroundColor: colorFondo, 
      padding: '40px', 
      borderRadius: '20px',
      color: '#333',
      textAlign: 'center',
      width: '350px',
      margin: '0 auto',
      transition: 'background-color 0.5s ease' // ¡Efecto visual suave!
    }}>
      <h2 style={{ marginBottom: '10px' }}>Mi Pou Virtual</h2>
      <p style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
        Estado: {emocion}
      </p>

      {/* 4. La Imagen Dinámica */}
      <img 
        src={imagenPou} 
        alt={`Pou ${emocion}`} 
        style={{ 
          width: '150px', 
          height: '150px', 
          margin: '20px 0',
          objectFit: 'contain' // Mantiene la proporción de la imagen
        }} 
      />

      {/* 5. Los Botones de Interacción */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '10px', 
        marginTop: '20px'
      }}>
        <button 
          onClick={() => setEmocion("FELIZ")} 
          style={estiloBoton}
        >
          ¡Pizza! 🍕
        </button>
        <button 
          onClick={() => setEmocion("HAMBRIENTO")} 
          style={estiloBoton}
        >
          Dejar Jugar 🎮
        </button>
        <button 
          onClick={() => setEmocion("SUENO")} 
          style={estiloBoton}
        >
          Dormir 😴
        </button>
      </div>
    </div>
  );
}

// Estilo básico reutilizable para los botones
const estiloBoton = { 
  padding: '10px 15px', 
  fontSize: '14px', 
  cursor: 'pointer',
  borderRadius: '8px',
  border: '1px solid #ccc',
  backgroundColor: '#fff'
};