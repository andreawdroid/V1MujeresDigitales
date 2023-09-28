import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between items-center">
        <div className="text-pink-600 font-black text-center md:text-4xl">
          <div className="flex flex-col items-center">
            Mujeres
            <div className="text-xs md:text-xs">
  <Link to='/HomeMujer'>
    <img src="/src/img/Logo.png" alt="Icono" className="w-16 h-16 md:w-12 md:h-12" />
  </Link>
</div>

          </div>
        </div>

        <input
          type="search"
          placeholder="Buscar Ofertas"
          className="rounded-lg lg:w-96 block p-2 border"
        />

        <div className="flex items-center gap-4">
          <Link to="/ViewMunicipios" className="font-bold uppercase">
            Municipios
          </Link>

          <Link to="/Servicios" className="font-bold uppercase">
            Servicios
          </Link>

          <Link to="/Categorias" className="font-bold uppercase">
            Categorias
          </Link>

          <Link to="/
          
          " className="bg-pink-700 w-full py-2 px-3 text-white uppercase text-sm font-semibold rounded cursor-pointer hover:bg-pink-800">
            Cerrar Sesion
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
