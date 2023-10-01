import Header from "../components/Header.jsx";
import React, { useEffect } from "react";

const Map = () => {
  return (
    <div>
      <Header />

      <div className="flex items-center justify-h-screen mt-10">
        <div className="card mx-4">
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 p-4 active:bg-pink-20 h-full flex flex-col justify-between">
            <div className="relative overflow-hidden bg-cover bg-no-repeat h-60">
              <img
                className="rounded-t-lg w-full h-full object-cover"
                src="src/img/deportes.jpg"
                alt="Descripción de la imagen"
              />
              <a href="/ServiciosCategorias">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-2 text-center">
              <h5 className="mb-1 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                DEPORTE
              </h5>
              <p className="mb-1 text-xs text-neutral-600 dark:text-neutral-200">
                Actividad física, ejercida como juego o competición, cuya
                práctica supone entrenamiento y sujeción a normas
              </p>
              <button
                type="button"
                className="inline-block rounded bg-pink-8 px-3 pb-1 pt-0.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_2px_4px_-2px_#3b71ca] transition duration-150 ease-in-out hover:bg-pink-600 hover:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.3),0_2px_8px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.3),0_2px_8px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.3),0_2px_8px_0_rgba(59,113,202,0.2)] dark:shadow-[0_2px_4px_-2px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.2),0_2px_8px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.2),0_2px_8px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.2),0_2px_8px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Ver
              </button>
            </div>
          </div>
        </div>

        <div className="card mx-4">
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 p-4 active:bg-pink-20 h-full flex flex-col justify-between">
            <div className="relative overflow-hidden bg-cover bg-no-repeat h-60">
              <img
                className="rounded-t-lg w-full h-full object-cover"
                src="src/img/salud.jpg"
                alt="Descripción de la imagen"
              />
              <a href="/ServiciosCategorias">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-2 text-center">
              <h5 className="mb-1 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                SALUD
              </h5>
              <p className="mb-1 text-xs text-neutral-600 dark:text-neutral-200">
                Actividad física, ejercida como juego o competición, cuya
                práctica supone entrenamiento y sujeción a normas
              </p>
              <button
                type="button"
                className="inline-block rounded bg-pink-200 px-3 pb-1 pt-0.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_2px_4px_-2px_#3b71ca] transition duration-150 ease-in-out hover:bg-pink-600 hover:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.3),0_2px_8px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.3),0_2px_8px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.3),0_2px_8px_0_rgba(59,113,202,0.2)] dark:shadow-[0_2px_4px_-2px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.2),0_2px_8px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.2),0_2px_8px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.2),0_2px_8px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Ver
              </button>
            </div>
          </div>
        </div>



        <div className="card mx-4">
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 p-4 active:bg-pink-20 h-full flex flex-col justify-between">
            <div className="relative overflow-hidden bg-cover bg-no-repeat h-60">
              <img
                className="rounded-t-lg w-full h-full object-cover"
                src="src/img/cuidadopersonal.jpg"
                alt="Descripción de la imagen"
              />
              <a href="/ServiciosCategorias
              
              ">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-2 text-center">
              <h5 className="mb-1 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                CUIDADO DE PIEL
              </h5>
              <p className="mb-1 text-xs text-neutral-600 dark:text-neutral-200">
                Actividad física, ejercida como juego o competición, cuya
                práctica supone entrenamiento y sujeción a normas
              </p>
              <button
                type="button"
                className="inline-block rounded bg-pink-200 px-3 pb-1 pt-0.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_2px_4px_-2px_#3b71ca] transition duration-150 ease-in-out hover:bg-pink-600 hover:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.3),0_2px_8px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.3),0_2px_8px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.3),0_2px_8px_0_rgba(59,113,202,0.2)] dark:shadow-[0_2px_4px_-2px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.2),0_2px_8px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.2),0_2px_8px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_4px_5px_-2px_rgba(59,113,202,0.2),0_2px_8px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Ver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
