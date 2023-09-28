import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useMujer = () => {
    return useContext(AuthContext)
}

export default useMujer;