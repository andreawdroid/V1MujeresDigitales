import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Home= () => {
  const params = useParams();
  const { token } = params;
  const [alerta, setAlerta] = useState({});
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    // Aquí debes cargar los municipios desde tu API y guardarlos en el estado 'municipios'
    // Ejemplo de cómo cargar municipios ficticios:
    const municipiosFicticios = [
      { codigo: "001", nombre: "Popayan" },
      { codigo: "002", nombre: "Caldas" },
      { codigo: "003", nombre: "Santa Marta" },
      { codigo: "002", nombre: "Pereira" },
      { codigo: "003", nombre: "Calarca" },
      { codigo: "002", nombre: "Florencia" },
      { codigo: "003", nombre: "Leticia" },
    ];
    setMunicipios(municipiosFicticios);
  }, []);

  const { msg } = alerta;

  return (
    <div>
      <nav className="bg-white-500  font-bold p-4">
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

   
      <h1 className="text-pink-600 font-black text-6xl capitalize">Municipios</h1>
      {municipios.length === 0 ? (
        <p>No hay municipios disponibles.</p>
      ) : (
        <table className="w-full mt-4 bg-white rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="border p-2">Código</th>
              <th className="border p-2">Nombre</th>
            </tr>
          </thead>
          <tbody>
  {municipios.map((municipio) => (
    <tr key={municipio.codigo} className="hover:bg-pink-200 transition-all">
      <td className="border p-2">{municipio.codigo}</td>
      <td className="border p-2">{municipio.nombre}</td>
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

export default Home;
