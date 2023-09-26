import useCursos from "../hooks/useCursos";
import PreviewCurso from "../components/PreviewServicio";


const Cursos = () => {

  const { cursos } = useCursos();
  console.log(cursos)
  return (
    <>
      <h1 className='text-4xl font-black'>SERVICIOS</h1>
      <div className="bg-white shadow-md mt-10 rounded-lg">
        {cursos.length ? cursos.map(curso => (
          <PreviewCurso
            key={curso._id}
            curso={curso}
          />
        )) : <p className="text-center text-gray-600 uppercase">No hay Servicios</p>}
      </div>
    </>
  )
}

export default Cursos