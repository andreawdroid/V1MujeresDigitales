import FormularioCurso from "../components/FormularioServicio"

const NuevoCurso = () => {
    return (
        <>
            <h1 className='text-4xl font-black'>Crear Curso</h1>

            <div className='mt-10 flex justify-center'>
                <FormularioCurso />
            </div>
        </>
    )
}

export default NuevoCurso