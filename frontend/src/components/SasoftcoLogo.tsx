import React from 'react';
import SasoftcoLogoImage from '../img/mujer.png'; // Asegúrate de tener la ruta correcta

export const SasoftcoLogo = () => {
    return (
        <img 
            src={SasoftcoLogoImage} 
            alt="Sasoftco Logo" 
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '200px'
            }}
        />
    )
}
