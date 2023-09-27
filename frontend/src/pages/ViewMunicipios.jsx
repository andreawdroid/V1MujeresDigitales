import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx"; // Importa el componente Header

const ViewMunicipios = () => {
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    // Carga los municipios desde tu API y guárdalos en el estado 'municipios'
    // Ejemplo de cómo cargar municipios ficticios:
    const municipiosFicticios = [
      { codigo: "001", nombre: "Popayán" },
      { codigo: "002", nombre: "Caldas" },
      { codigo: "003", nombre: "Santa Marta" },
      { codigo: "002", nombre: "Pereira" },
      { codigo: "003", nombre: "Calarca" },
      { codigo: "002", nombre: "Florencia" },
      { codigo: "003", nombre: "Leticia" },
    ];
    setMunicipios(municipiosFicticios);
  }, []);

  return (
    <div>
      <Header /> {/* Agrega el componente Header aquí */}
      <table className="w-full mt-4 bg-white rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="border p-2">Código</th>
            <th className="border p-2">Nombre</th>
          </tr>
        </thead>
        <tbody>
          {municipios.map((municipio) => (
            <tr key={municipio.codigo} className="hover-bg-pink-200 transition-all">
              <td className="border p-2">{municipio.codigo}</td>
              <td className="border p-2">{municipio.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewMunicipios;
