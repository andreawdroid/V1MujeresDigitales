import Header from "../components/Header.jsx";
import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl"; // Importa la biblioteca mapbox-gl

// Componente de mapa
const Map = () => {
  // Lógica para inicializar el mapa
  useEffect(() => {
    mapboxgl.accessToken = 'TU_ACCESS_TOKEN'; // Reemplaza con tu Access Token de Mapbox

    const map = new mapboxgl.Map({
      container: "map", // ID del contenedor del mapa
      style: "mapbox://styles/mapbox/streets-v11", // Estilo del mapa
      center: [-74.006, 40.7128], // Coordenadas del centro (longitud, latitud)
      zoom: 10, // Nivel de zoom
    });

    // Agrega marcadores, capas, etc., según sea necesario

    // Limpia el mapa cuando el componente se desmonta
    return () => map.remove();
  }, []);

  return (
    <div>
        <Header/>
      <h2>Mapa de ejemplo</h2>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default Map;
