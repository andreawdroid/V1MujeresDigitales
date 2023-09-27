import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Servicios = () => {
  const params = useParams();
  const { token } = params;
  const [alerta, setAlerta] = useState({});
  const [servicios, setServicios] = useState([]);
  const [nombreServicio, setNombreServicio] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

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

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Agregar lógica para guardar el nombre del servicio
    const nuevoServicio = { codigo: servicios.length + 1, nombre: nombreServicio };
    setServicios([...servicios, nuevoServicio]);

    // Limpiar el campo de nombre y ocultar el formulario
    setNombreServicio("");
    setMostrarFormulario(false);
  };

  // Función para manejar la eliminación de un servicio
  const handleDelete = (codigo) => {
    // Filtrar los servicios para eliminar el que tenga el código correspondiente
    const nuevosServicios = servicios.filter((servicio) => servicio.codigo !== codigo);
    setServicios(nuevosServicios);
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
            <a href="/Categorias">Categorias</a>
          </li>
          <li>
            <a href="/Servicios">Servicios</a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center justify-between p-4">
        <h1 className="text-pink-600 font-black text-6xl capitalize">Servicios</h1>
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
            <label htmlFor="nombreServicio" className="block text-gray-700">
              Nombre del Servicio:
            </label>
            <input
              type="text"
              id="nombreServicio"
              className="border rounded-lg py-2 px-3"
              value={nombreServicio}
              onChange={(e) => setNombreServicio(e.target.value)}
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
                <td className="border p-2">{servicio.descripcion}</td>
                <td className="border p-2">
                <button
    className="bg-white-500 text-black py-1 px-2 rounded-lg relative"
  >
    ✏️ Editar
  </button>
                  <button
                    className="bg-white-500 text-black py-1 px-2 rounded-lg relative"
                    onClick={() => handleDelete(servicio.codigo)}
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

export default Servicios;
