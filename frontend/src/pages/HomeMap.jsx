import Header from "../components/Header.jsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Map = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [idTipoDocumento, setIdTipoDocumento] = useState("1");
  const [documento, setDocumento] = useState(""); // Agregado
  const [correo, setCorreo] = useState(""); // Agregado
  const [telefono, setTelefono] = useState(""); // Agregado
  const [ciudad, setCiudad] = useState(""); // Agregado

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-1/2">
          <div className="text-center mt-4">
            <h3 className="text-center">Encuentra la Manzana cuidadora más cercana</h3>
            <iframe
              className="mt-3"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d207921.16688612735!2d-74.19906808116868!3d4.653478211957052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smanzanas%20cuidadoras!5e0!3m2!1ses!2sco!4v1695771721591!5m2!1ses!2sco"
              width="100%"
              height="600"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Formulario a la derecha */}
        <div className="w-1/2 p-10">
          <div className="my-10 bg-white shadow-md rounded-lg p-10">
            <form onSubmit={handleSubmit}>
              <div className="my-5 grid grid-cols-2 gap-4">
              <div>
              <label
                htmlFor="nombres"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Ubicacion</label>
              <input
                name="nombres"
                type="text"
                placeholder="Ingresa tus nombres"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={nombres}
                onChange={e => setNombres(e.target.value)}
              />
            </div>



            <div>
              <label
                htmlFor="nombres"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Fecha Reserva</label>
              <input
                name="fecha"
                type="date"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={nombres}
                onChange={e => setNombres(e.target.value)}
              />
            </div>



              </div>
              <input

                type="submit"
                value="Reserva"
                className="bg-pink-700 mb-5 w-full py-3 text-white uppercase font-bold rounded cursor-pointer transition-all hover:bg-pink-800"
              />
            </form> 
            <nav className="lg:flex lg:justify-between">
             
              <Link to="/ServiciosCategorias" className="block text-center my-5 text-slate-500 uppercase text-sm hover:underline">
                atras
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
