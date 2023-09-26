import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Sidebar = () => {

    const { auth } = useAuth();
    return (
        <aside className="md:w-80 lg:w-96 px-5 py-10">
            <p className="text-xl font-bold">Hola: {auth.nombre}</p>
            <Link
                to="crear-cursos"
                className="bg-green-500 w-full p-3 text-white block uppercase font-bold mt-5 text-center rounded-lg"
       >
                Nuevo Oferta
            </Link>
        </aside>
    )
}

export default Sidebar