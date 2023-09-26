import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/ClienteAxios";
import { useNavigate } from "react-router-dom";

const CursosContext = createContext();

const CursosProvider = ({ children }) => {
    const [cursos, setCursos] = useState([]);
    const [alerta, setAlerta] = useState({});
    const [curso, setCurso] = useState({});
    const [cargando, setCargando] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const obtenerCursos = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;
                const config = {
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                };
                const { data } = await clienteAxios.get('/cursos', config); 
                setCursos(data);
            } catch (error) {
                console.log(error);
            }
        };
        obtenerCursos();
    }, []); 

    const mostrarAlerta = alerta => {
        setAlerta(alerta);

        setTimeout(() => {
            setAlerta({});
        }, 3000);
    };

    const submitCurso = async (cursoData) => {
        if (cursoData.id) {
            await editarCurso(cursoData);
        } else {
            await nuevoCurso(cursoData);
        }
    };

    const editarCurso = async (cursoData) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            };
            const { data } = await clienteAxios.put(`/cursos/${cursoData.id}`, cursoData, config);
            const cursosActualizados = cursos.map(cursoState => cursoState._id === data._id ? data : cursoState);
            setCursos(cursosActualizados);
            setAlerta({

                msg: 'Proyecto Actualizado correctamente',
                error: false,
            })
            setTimeout(() => {
                setAlerta({})
                navigate('/cursos')
            }, 1500);
        } catch (error) {
            console.log(error)
        }
    };

    const nuevoCurso = async curso => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
            const { data } = await clienteAxios.post('/cursos', curso, config);
            setCursos([...cursos, data]);
            setAlerta({
                msg: 'Curso creado correctamente',
                error: false,
            })
            setTimeout(() => {
                setAlerta({})
                navigate('/cursos')
            }, 1500);
        } catch (error) {
            console.log(error)
        }
    };

    const obtenerCurso= async (id) => {
        setCargando(true);
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
            const { data } = await clienteAxios(`/cursos/${id}`, config);
            setCursos(data);
        } catch (error) {
            console.log(error);
        }
        setCargando(false);
    };

    const eliminarCurso = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
            const { data } = await clienteAxios.delete(`/proyectos/${id}`, config);
            const cursosActualizados = cursos.filter(cursoState => cursoState._id !== id);
            setCursos(cursosActualizados)
            setAlerta({
                msg: data.msg,
                error: false,
            })
            setTimeout(() => {
                setAlerta({})
                navigate('/proyectos')
            }, 1500);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CursosContext.Provider
            value={{
                cursos, 
                mostrarAlerta,
                alerta,
                submitCurso,
                obtenerCurso, 
                curso, 
                cargando,
                eliminarCurso, 
            }}
        >
            {children}
        </CursosContext.Provider>
    )
};

export {
    CursosProvider
}

export default CursosContext;