import useServicios from "../hooks/useServicios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const EditarServicio = () => {
  const params = useParams();
  const { id } = params;
  const { obtenerServicio, servicio, cargando } = useServicios();

  useEffect(() => {
    obtenerServicio(id);
  }, []);

  const { nombre } = servicio;

  if (cargando) return 'Cargando...';

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-black text-4xl">Editar Curso: {nombre}</h1>
      </div>
      <div className='mt-10 flex justify-center'>
        <FormularioCurso servicio={servicio} />
      </div>
    </>
  );
}

export default EditarServicio;
