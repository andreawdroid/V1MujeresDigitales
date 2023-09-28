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
    <di>
      <Header />
      <div>
        <div className="my-10 flex justify-center">
          <div className="w-100 bg-white shadow-md rounded-lg p-6">
            <h1 className="text-pink-600 font-black text-4xl text-center capitalize mb-2">Añade Manzanas</h1>
            <div className="my-5 grid grid-cols-2 gap-4">
              <form onSubmit={handleSubmit}>
                <div className="my-5 grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="uppercase text-gray-600 block text-xl font-bold text-center"
                    >
                      Nombre Manzana
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


                  <div>
                    <label
                      htmlFor="Direccion"
                      className="uppercase text-gray-600 block text-xl font-bold text-center"
                    >
                      Direccion
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
                  className="bg-pink-700 mb-5 w-full py-3 text-white  uppercase font-bold rounded cursor-pointer transition-all hover:bg-pink-800 "
                >
                  Añadir
                </button>
              </form>
            </div>
          </div>
        </div>

        <nav className="lg:flex lg:justify-between">
          <Link
            to="/Manzanas"
            className="block text-center my-5 text-slate-500 uppercase text-sm hover:underline"
          >
            atras
          </Link>
        </nav>
      </div>
    </di>
  );
};

export default ViewMunicipios;
