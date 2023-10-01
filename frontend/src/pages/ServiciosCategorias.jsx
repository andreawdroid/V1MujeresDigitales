import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";

import React from "react";

const Map = () => {
  return (
    <div>
      <Header />

      <div className="flex items-center justify-center mt-10 flex-wrap">
        <div className="card mx-2 my-2 w-48 h-60">
          <div className="card mx-4">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 p-4 active:bg-pink-20 h-full flex flex-col justify-between">
              <div className="relative overflow-hidden bg-cover bg-no-repeat h-60">
                <img
                  className="rounded-t-lg w-full h-full object-cover"
                  src="src/img/natacion.jpg"
                  alt="Descripción de la imagen"
                />
                <a href="/HomeMap">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
              <div className="p-2 text-center">
                <h5 className="mb-1 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  NATACION
                </h5>

                <Link
                  to="/HomeMap"
                  className="block w-full py-3 text-black cursor-pointer hover:text-pink-600"
                >
                  <h1> Registrate </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card mx-2 my-2 w-48 h-60">
          {/* Contenido de la tercera card */}
        </div>

        <div className="card mx-2 my-2 w-48 h-60">
          {/* Contenido de la cuarta card */}
        </div>
      </div>
    </div>
  );
};

export default Map;
