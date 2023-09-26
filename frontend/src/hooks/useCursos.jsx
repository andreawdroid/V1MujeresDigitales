import { useContext } from "react";
import CursosContext from "../context/ServiciosProvider";

const useCursos = () => {
    return useContext(CursosContext);
}

export default useCursos