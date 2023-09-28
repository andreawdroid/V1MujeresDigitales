import Header from "../components/Header.jsx";
import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl"; // Importa la biblioteca mapbox-gl

// Componente de mapa
const Map = () => {
  return (
    <div>
      <Header />

      <div class="container mx-auto px-4 py-1 lg:px-25 lg:pt-15">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <figure>
                <img
                  alt="gallery"
                  class="block h-48 w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
                <h2 className="text-lg font-bold text-center">DEPORTES</h2>
                  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y 
                    archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
                     de las industrias desde el año 1500, cuando un impresor 
                     (N. del T. persona que se dedica a la imprenta) desconocido usó
                      una galería de textos y los mezcló de tal manera que logró hacer un
                       libro de textos especimen. No sólo sobrevivió 500 años, sino</p>
              </figure>
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <figure>
                <img
                  alt="gallery"
                  class="block h-48 w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
                <h2 className="text-lg font-bold text-center">SALUD</h2>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y 
                    archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
                     de las industrias desde el año 1500, cuando un impresor 
                     (N. del T. persona que se dedica a la imprenta) desconocido usó
                      una galería de textos y los mezcló de tal manera que logró hacer un
                       libro de textos especimen. No sólo sobrevivió 500 años, sino</p>
              </figure>
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <figure>
                <img
                  alt="gallery"
                  class="block h-48 w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
               <h2 className="text-lg font-bold text-center">CUIDADO PERSONAL1</h2>
               <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y 
                    archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
                     de las industrias desde el año 1500, cuando un impresor 
                     (N. del T. persona que se dedica a la imprenta) desconocido usó
                      una galería de textos y los mezcló de tal manera que logró hacer un
                       libro de textos especimen. No sólo sobrevivió 500 años, sino</p>
              </figure>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Map;
