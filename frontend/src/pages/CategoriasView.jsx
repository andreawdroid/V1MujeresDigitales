import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import deporte from "../img/deporte.jpg"

const Home = () => {
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

  // Ejemplo de definición de callouts
  const callouts = [
    {
      name: "Deportes",
      description: "Descripción de la Categoría 1",
      imageSrc: "../img/deporte.png",
      imageAlt: "Imagen de la Categoría 1",
      href: "/categoria/1",
    },
    {
      name: "Categoría 2",
      description: "Descripción de la Categoría 2",
      imageSrc: "imagen_categoria_2.jpg",
      imageAlt: "Imagen de la Categoría 2",
      href: "/categoria/2",
    },
    // Agrega más categorías aquí
  ];

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

      <div className="flex items-center justify-between p-4">
        <h1 className="text-pink-600 font-black text-6xl capitalize">Municipios</h1>
        <button
          className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600"
          onClick={() => {
            // Aquí puedes agregar la lógica para manejar la acción de "Agregar"
            alert("Agregar municipio");
          }}
        >
          Agregar
        </button>
      </div>  {municipios.length === 0 ? (
        <p>No hay municipios disponibles.</p>
      ) : (
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {callouts.map((callout) => (
                  <div key={callout.name} className="group relative">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href={callout.href}>
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
