import React, { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady || !userLocation) {
      // Evita lanzar errores, pero puedes mostrar un mensaje al usuario
      console.error('No se puede centrar en la ubicación del usuario porque el mapa no está listo o no se encontró la ubicación del usuario.');
      return;
    }

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };

  return (
    <button
      className="btn btn-primary"
      onClick={onClick}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 999,
      }}
    >
      Mi Ubicación
    </button>
  );
};

export default BtnMyLocation;
