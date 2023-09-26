import useCursos from "../hooks/useCursos";
import PreviewCurso from "../components/PreviewCurso";

const Cursos = () => {

  const { cursos } = useCursos();
  console.log(cursos)
  return (
    <>
      <h1 className='text-4xl font-black'>OFERTAS</h1>
      <div className="bg-white shadow-md mt-10 rounded-lg">
        {cursos.length ? cursos.map(curso => (
          <PreviewCurso
            key={curso._id}
            curso={curso}
          />
        )) : <p className="text-center text-gray-600 uppercase">No hay CURSOS</p>}
      </div>
    </>
  )
}

export default Cursos