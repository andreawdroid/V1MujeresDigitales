import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const params = useParams();
  const { token } = params;
  const [alerta, setAlerta] = useState({});
  const [municipios, setMunicipios] = useState([]);
  const [nuevoMunicipio, setNuevoMunicipio] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

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

  const { msg } = alerta;

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Agregar lógica para guardar el nuevo municipio
    const nuevoMunicipioObj = { codigo: municipios.length + 1, nombre: nuevoMunicipio };
    setMunicipios([...municipios, nuevoMunicipioObj]);

    // Limpiar el campo de nuevoMunicipio y ocultar el formulario
    setNuevoMunicipio("");
    setMostrarFormulario(false);
  };

  // Función para manejar el clic en el botón de "Borrar"
  const handleDelete = (codigo) => {
    // Filtrar la lista de municipios para eliminar el que tenga el código correspondiente
    const nuevosMunicipios = municipios.filter((municipio) => municipio.codigo !== codigo);
    setMunicipios(nuevosMunicipios);
  };

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
            <a href="/Categorias">Categorías</a>
          </li>
          <li>
            <a href="/Servicios">Servicios</a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center justify-between p-4">
        <h1 className="text-pink-600 font-black text-6xl capitalize">Municipios</h1>
        <button
          className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600"
          onClick={() => {
            // Mostrar el formulario al hacer clic en "Agregar"
            setMostrarFormulario(true);
          }}
        >
          Agregar
        </button>
      </div>

      {mostrarFormulario ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nuevoMunicipio" className="block text-gray-700">
              Nuevo Municipio:
            </label>
            <input
              type="text"
              id="nuevoMunicipio"
              className="border rounded-lg py-2 px-3"
              value={nuevoMunicipio}
              onChange={(e) => setNuevoMunicipio(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600"
          >
            Guardar
          </button>
        </form>
      ) : null}

      {municipios.length === 0 ? (
        <p>No hay municipios disponibles.</p>
      ) : (
        <table className="w-full mt-4 bg-white rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="border p-2">Código</th>
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {municipios.map((municipio) => (
              <tr key={municipio.codigo} className="hover:bg-pink-200 transition-all">
                <td className="border p-2">{municipio.codigo}</td>
                <td className="border p-2">{municipio.nombre}</td>
                <td className="border p-2">
                  <button
                    className="bg-white-500 text-black py-1 px-2 rounded-lg relative"
                  >
                    ✏️ Editar
                  </button>
                  <button
                    className="bg-white-500 text-black py-1 px-2 rounded-lg relative"
                    onClick={() => handleDelete(municipio.codigo)}
                  >
                    🗑️ Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
