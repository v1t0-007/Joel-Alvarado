import { useState, useEffect } from 'react';
import './App.css';
function App() {
// Estados indispensables
const [personajes, setPersonajes] = useState([]);
const [cargando, setCargando] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
// Función asíncrona para consumir la API
const obtenerDatos = async () => {
try {
const respuesta = await fetch('https://rickandmortyapi.com/api/character?page=1');
if (!respuesta.ok) {
throw new Error('No se pudo conectar con el servidor de la API');
}
const datos = await respuesta.json();
setPersonajes(datos.results.slice(0, 8)); // Guardamos solo los primeros 8 personajes
setCargando(false); // Apagamos el estado de carga
} catch (err) {
setError(err.message);
setCargando(false);
}
};
obtenerDatos();
}, []); // [] asegura que solo se ejecute al cargar la página
if (cargando) return <div className="pantalla-estado">Descargando datos del multiverso...</div>;
if (error) return <div className="pantalla-estado error"> Error: {error}</div>;
return (
<div className="container">
<header>
<h1>Rick & Morty Explorer</h1>
<p>Consumiendo datos reales desde una API REST</p>
</header>
{/* Renderizado de Tarjetas Dinámicas */}
<div className="grid-personajes">
{personajes.map((personaje) => (
<div key={personaje.id} className="card">
<img src={personaje.image} alt={personaje.name} />
<div className="card-info">
<h3>{personaje.name}</h3>
<p>
<span className={`status-dot ${personaje.status.toLowerCase()}`}></span>
{personaje.status} - {personaje.species}
</p>
<small>Última ubicación conocida:</small>
<p className="location">{personaje.location.name}</p>
</div>
</div>
))}
</div>
</div>
);
}
export default App;



