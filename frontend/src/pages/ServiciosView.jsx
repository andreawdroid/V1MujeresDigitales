import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header.jsx";

const Servicios = () => {
  const params = useParams();
  const { token } = params;
  const [alerta, setAlerta] = useState({});
  const [servicios, setServicios] = useState([]);
  const [nombreServicio, setNombreServicio] = useState("");
  
 

  const { msg } = alerta;

  

  return (
    <div>
      <Header /> {/* Aquí se agrega el componente Header */}

      
      <div className="flex justify-center"> {/* Centrar horizontalmente */}
        <table className="w-2/3 md:w-1/2 text-center bg-white rounded-lg overflow-hidden">
          <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th scope="col" className="px-3 py-2">#</th>
              <th scope="col" className="px-3 py-2">Nombre</th>
              <th scope="col" className="px-3 py-2">Descripcion</th>
              <th scope="col" className="px-3 py-2">Categoria</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-3 py-2 font-medium">1</td>
              <td className="whitespace-nowrap px-3 py-2">Gym</td>
              <td className="whitespace-nowrap px-3 py-2">Para que mejores tu salud</td>
              <td className="whitespace-nowrap px-3 py-2">Cuidado Perosnal</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-3 py-2 font-medium">2</td>
              <td className="whitespace-nowrap px-3 py-2">Natacion</td>
              <td className="whitespace-nowrap px-3 py-2">Para Nadar</td>
              <td className="whitespace-nowrap px-3 py-2">Deporte</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-3 py-2 font-medium">3</td>
              <td className="whitespace-nowrap px-3 py-2">Larry the Bird</td>
              <td className="whitespace-nowrap px-3 py-2">Popayan</td>
              <td className="whitespace-nowrap px-3 py-2">Popayan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Servicios;
