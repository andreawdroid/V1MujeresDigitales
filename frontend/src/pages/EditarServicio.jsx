import useCursos from "../hooks/useCursos";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import FormularioCurso from "../components/FormularioServicio";

const EditarCurso = () => {
  const params = useParams();
  const { id } = params;
  const { obtenerCurso, curso, cargando } = useCursos();

  useEffect(() => {
    obtenerCurso(id);
  }, []);

  const { nombre } = curso;

  if (cargando) return 'Cargando...';

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-black text-4xl">Editar Curso: {nombre}</h1>
      </div>
      <div className='mt-10 flex justify-center'>
        <FormularioCurso curso={curso} />
      </div>
    </>
  );
}

export default EditarCurso;
