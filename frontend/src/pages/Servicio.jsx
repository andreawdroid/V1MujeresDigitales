import { useParams, Link } from "react-router-dom";
import useCursos from "../hooks/useCursos";
import { useEffect } from "react";

const Curso = () => {
    const params = useParams();
    const { id } = params;
    const { obtenerCurso, curso, cargando } = useCursos();

    useEffect(() => {
        obtenerCurso(id); 
    }, [id]); 

    const { nombre } = curso;
    if (cargando) return 'cargando...';

    return (
        <div className="flex justify-between">
            <h1 className="font-black text-4xl">{nombre}</h1>
            <Link
                to={`/cursos/editar/${id}`}
                className="flex uppercase items-center gap-2 transition-all border border-gray-600 p-2 rounded-lg hover:bg-gray-600 hover:text-white w-[4.7rem] hover:w-[6.5rem] m-auto"
            >
                <span>Editar</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
            </Link>
        </div>
    );
}

export default Curso;
