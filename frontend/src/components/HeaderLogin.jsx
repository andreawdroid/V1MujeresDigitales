import React from 'react';
import Mujer from '../img/mujer.png';

const HeaderLogin = () => {
  return (
    <header className="bg-pink-400 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <img
          src={Mujer}
          alt="Logo"
          className="h-10 w-10 mr-2"
        />
        <h1 className="text-white text-4xl font-bold text-center ">MUJERES</h1>
        <div className="w-10"></div> {/* Espacio en blanco para centrar */}
      </div>
    </header>
  );
};

export default HeaderLogin;
