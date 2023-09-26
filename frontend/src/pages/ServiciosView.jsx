import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Servicios = () => {
  const params = useParams();
  const { token } = params;
  const [alerta, setAlerta] = useState({});
  const [servicios, setServicios] = useState([]); 

  useEffect(() => {
    // Carga los servicios desde tu API o fuente de datos
    

    // Ejemplo de cómo cargar servicios ficticios:
    const serviciosFicticios = [
      { codigo: "001", nombre: "Gym" },
      { codigo: "002", nombre: "Gimanasia" },
      { codigo: "003", nombre: "Meditacion" },
     
    ];
    setServicios(serviciosFicticios);
  }, []);

  const { msg } = alerta;

  return (
    <div>
      <nav className="bg-white-500 font-bold p-4">
        <ul className="flex space-x-4">
          <li>
            <a href="/">Salir</a>
          </li>
          <li>
            <a href="/Home">Municipios</a>
          </li>
          <li>
            <a href="/Categorias">Categorias</a>
          </li>
          <li>
            <a href="/Servicios">Servicios</a>
          </li>
        </ul>
      </nav>

      <h1 className="text-pink-600 font-black text-6xl capitalize">Servicios</h1> {/* Cambiamos el título a "Servicios" */}
      {servicios.length === 0 ? (
        <p>No hay servicios disponibles.</p>
      ) : (
        <table className="w-full mt-4 bg-white rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="border p-2">Código</th>
              <th className="border p-2">Nombre</th>
            </tr>
          </thead>
          <tbody>
            {servicios.map((servicio) => (
              <tr key={servicio.codigo} className="hover:bg-pink-200 transition-all">
                <td className="border p-2">{servicio.codigo}</td>
                <td className="border p-2">{servicio.nombre}</td>
                <td className="border p-2">
                  <button
                    className="bg-gray-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600"
                  >
                    Editar
                  </button>
                </td>
                <td className="border p-2">
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600"
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Servicios;
