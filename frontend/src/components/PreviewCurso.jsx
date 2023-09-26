import { Link } from "react-router-dom";

const PreviewCurso = ({curso}) => {
    const { nombre, _id, } = curso;
  return (

    <div className="overflow-y-auto max-h-[50vh]"> {/* Agrega la clase max-h-screen para establecer la altura máxima */}
        

    <div className="border-b font-bold p-5 flex ">
        <p className="flex-1">
            {nombre}
            
        </p>

        <Link
            to={`${_id}`}
            className="m-auto text-green-600 transition-colors uppercase text-sm font-bold border border-green-600 p-2 rounded-lg hover:bg-green-600 hover:text-white"
        >
            Editar
        </Link>
    </div>
   
    </div>
  )
}

export default PreviewCurso