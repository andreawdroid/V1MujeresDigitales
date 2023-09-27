import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";

const ViewMunicipios = () => {
  const [nombre, setNombre] = useState(""); // Agrega el estado para el nombre

  // Define la función handleSubmit para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
    // Aquí puedes realizar las acciones necesarias, como enviar los datos al servidor o actualizar el estado
  };

  return (
    <div>
      <Header />
      <h1 className="text-pink-600 font-black text-4xl text-center capitalize mb-2">Añade Municipio</h1>

      <div className="my-10 bg-white shadow-md rounded-lg p-10">
        <form onSubmit={handleSubmit}>
          <div className="my-5 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="nombre"
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Nombre Municipio
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="Ingresa nombre"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-pink-700 w-full py-2 px-3 text-white uppercase text-sm font-semibold rounded cursor-pointer hover:bg-pink-800 text-center my-5 flex items-center justify-center"
          >
            Añadir
          </button>
        </form>

        <nav className="lg:flex lg:justify-between">
          <Link
            to="/"
            className="block text-center my-5 text-slate-500 uppercase text-sm hover:underline"
          >
            Ya tienes una cuenta? Inicia sesión
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default ViewMunicipios;
