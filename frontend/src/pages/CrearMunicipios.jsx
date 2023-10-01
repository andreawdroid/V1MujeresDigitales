import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Alerta from "../components/Alerta.jsx";
import clienteAxios from "../config/ClienteAxios.jsx";

const ViewMunicipios = () => {
  const [nombre, setNombre] = useState(""); // Agrega el estado para el nombre
  const [alerta, setAlerta] = useState({
    msg: "",
    error: false,
  });
  const [registroExitoso, setRegistroExitoso] = useState(false); // Estado para el registro exitoso

  // Define la función handleSubmit para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Validación para verificar que el campo nombre esté completo
    if (!nombre) {
      setAlerta({
        msg: "El nombre del municipio es obligatorio",
        error: true,
      });
      return;
    }

    // Si pasa la validación, limpia la alerta
    setAlerta({});

    try {
      const { data } = await clienteAxios.post("/municipio", {
        nombre
      });

      setAlerta({
        msg: data.msg,
        error: false,
      });
      alert(data.msg)

      // Limpiar los campos después de un registro exitoso
      setNombres('');
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  return (
    <>
      <Header />
      {alerta.msg && <Alerta alerta={alerta} />}
      <h2 className="text-pink-600 font-black text-4xl text-center capitalize mb-2">Crea Municipios</h2>
      <div className="my-10 bg-white shadow-md rounded-lg p-5">

        <form onSubmit={handleSubmit}>
          <div className="my-5 mt-10 ">
            <div className="text-center">
              <label
                htmlFor="nombre"
                className="uppercase text-gray-600 block text-xl font-bold text-center"
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
            className="bg-pink-700 mb-5 w-full py-3 text-white  uppercase font-bold rounded cursor-pointer transition-all hover:bg-pink-800 "
          >
            Añadir
          </button>
        </form>
      </div>
    </>
  );
};

export default ViewMunicipios;
