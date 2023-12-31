import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
      <Header />
      <div className="text-pink-600 font-black text-4xl text-center mb-4">
        <span className="mr-4">Servicios</span>
        <Link
          to="/CrearServicios"
          className="bg-pink-500 text-white font-bold px-6 pb-2 pt-2.5 text-xs uppercase leading-normal rounded-l shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-pink-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-pink-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Añadir Servicio
        </Link>
      </div>
      <div className="flex justify-center">
        <table className="w-2/3 md:w-1/2 text-center bg-white rounded-lg overflow-hidden">
          <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th scope="col" className="px-3 py-2">#</th>
              <th scope="col" className="px-3 py-2">Nombre</th>
              <th scope="col" className="px-3 py-2">Descripción</th>
              <th scope="col" className="px-3 py-2">Categoría</th>
              <th scope="col" className="px-3 py-2"></th> {/* Cambia "Categoria" a "Acciones" */}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-3 py-2 font-medium">1</td>
              <td className="whitespace-nowrap px-3 py-2">Gym</td>
              <td className="whitespace-nowrap px-3 py-2">Para que mejores tu salud</td>
              <td className="whitespace-nowrap px-3 py-2">Cuidado Personal</td>
              <td className="px-3 py-2">
                <Link to={`/eliminar/1`} className="text-gray-500 hover:text-black-900">
                  Eliminar
                </Link>
              </td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-3 py-2 font-medium">2</td>
              <td className="whitespace-nowrap px-3 py-2">Natación</td>
              <td className="whitespace-nowrap px-3 py-2">Para Nadar</td>
              <td className="whitespace-nowrap px-3 py-2">Deporte</td>
              <td className="px-3 py-2">
                <Link to={`/eliminar/2`} className="text-gray-500 hover:text-black-900">
                  Eliminar
                </Link>
              </td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-3 py-2 font-medium">3</td>
              <td className="whitespace-nowrap px-3 py-2">Larry the Bird</td>
              <td className="whitespace-nowrap px-3 py-2">Popayan</td>
              <td className="whitespace-nowrap px-3 py-2">Popayan</td>
              <td className="px-3 py-2">
                <Link to={`/eliminar/3`} className="text-gray-500 hover:text-black-900">
                  Eliminar
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Servicios;
