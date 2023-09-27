import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";

const ViewMunicipios = () => {
  const [municipios, setMunicipios] = useState([]);

  return (
    <div>
      <Header />
      <div className="text-pink-600 font-black text-4xl text-center mb-4">
        <span className="mr-4">Municipios</span>
        <Link
          to='/CrearMunicipios' 
          className="bg-pink-500 text-white font-bold px-6 pb-2 pt-2.5 text-xs uppercase leading-normal rounded-l shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-pink-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-pink-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Añadir Muñicipios
        </Link>
      </div>
      <div className="flex justify-center"> {/* Centrar horizontalmente */}
        <table className="w-2/3 md:w-1/2 text-center bg-white rounded-lg overflow-hidden">
          <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th scope="col" className="px-3 py-2">#</th>
              <th scope="col" className="px-3 py-2">Nombre</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-3 py-2 font-medium">1</td>
              <td className="whitespace-nowrap px-3 py-2">Pereira</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-3 py-2 font-medium">2</td>
              <td className="whitespace-nowrap px-3 py-2">Popayan</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-3 py-2 font-medium">3</td>
              <td className="whitespace-nowrap px-3 py-2">Larry the Bird</td>
            </tr>
          </tbody>
        </table>

       

      </div>
    </div>
  );
};

export default ViewMunicipios;
