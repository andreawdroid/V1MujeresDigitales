import { useContext } from "react";
import CursosContext from "../context/CursosProvider";

const useCursos = () => {
    return useContext(CursosContext);
}

export default useCursos