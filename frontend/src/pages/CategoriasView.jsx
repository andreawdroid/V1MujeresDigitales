import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header"; // Asegúrate de importar el componente Header desde la ubicación correcta

const Home = () => {
  const params = useParams();
  const { token } = params;
  const [alerta, setAlerta] = useState({});

  const { msg } = alerta;

  const data = [
    { id: 1, name: "Deporte", image: "image1.jpg" },
    { id: 2, name: "Cuidado Personal", image: "image2.jpg" },
    { id: 3, name: "Item 3", image: "image3.jpg" },
  ];

  return (
    <div>
      <Header /> {/* Renderiza el componente Header aquí */}
      <div className="text-pink-600 font-black text-4xl text-center mb-4">Categorias</div>
      <div className="flex justify-center"> {/* Centra el contenido */}
        <table className="w-2/3 md:w-1/2 text-center bg-white rounded-lg overflow-hidden border dark:border-neutral-500 dark:bg-neutral-900">
          <thead className="border-b bg-neutral-800 font-medium text-white">
            <tr>
              <th scope="col" className="px-3 py-2">#</th>
              <th scope="col" className="px-3 py-2">Nombre</th>
              <th scope="col" className="px-3 py-2">Imagen</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-3 py-2 font-medium">{item.id}</td>
                <td className="whitespace-nowrap px-3 py-2">{item.name}</td>
                <td className="whitespace-nowrap px-3 py-2">
                  <img
                    src={item.image}
                    alt={`Imagen de ${item.name}`}
                    style={{ maxWidth: "100px" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
