import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCursos from "../hooks/useCursos";
import Alerta from "./Alerta";

const FormularioCurso = ({curso}) => {
    const [id, setId] = useState(null);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fechaFormacion, setFechaFormacion] = useState('');
    const [tipoFormacion, setTipoFormacion] = useState('');
    const [horas, setHoras] = useState('');
    const [video, setVideo] = useState('');
    const [curricularFile, setCurricularFile] = useState(null);

    const params = useParams();
    const { alerta, mostrarAlerta, submitCurso, } = useCursos();

    useEffect(() => {
        if (params.id && curso) {
            setId(curso._id);
            setNombre(curso.nombre || '');
            setDescripcion(curso.descripcion || '');
            setFechaFormacion(curso.fechaFormacion?.split('T')[0] || '');
            setTipoFormacion(curso.tipoFormacion || '');
            setHoras(curso.horas || '');
            setVideo(curso.video || '');
            setCurricularFile(curso.curricular || null);
        }
    }, [params, curso]);

    const handleCurricularFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setCurricularFile(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !nombre || !descripcion || !fechaFormacion || !tipoFormacion || !horas || !video || !curricularFile
        ) {
            mostrarAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true,
            });
            return;
        }

        const formData = new FormData();
        formData.append('id', id);
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('fechaFormacion', fechaFormacion);
        formData.append('tipoFormacion', tipoFormacion);
        formData.append('horas', horas);
        formData.append('video', video);
        formData.append('curricularFile', curricularFile);

        await submitCurso(formData);

        // Restablecer los campos
        setId(null);
        setNombre('');
        setDescripcion('');
        setFechaFormacion('');
        setTipoFormacion('');
        setHoras('');
        setVideo('');
        setCurricularFile(null);
    };

    const { msg } = alerta;

    return (
        <div className="overflow-y-auto max-h-[50vh]">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg py-5 px-7 md:w-4/2 lg:w-10/2 rounded-lg"
            >
                {msg && <Alerta alerta={alerta} />}

                <div className="mb-3">
                    <label
                        htmlFor="nombre"
                        className='text-gray-700 uppercase font-bold text-sm'
                    >
                        Nombre Curso
                    </label>
                    <input
                        id='nombre'
                        type="text"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='Nombre del Curso'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="descripcion"
                        className='text-gray-700 uppercase font-bold text-sm'
                    >
                        Descripcion Del Curso
                    </label>
                    <textarea
                        id='descripcion'
                        type="text"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none'
                        placeholder='Descripción del proyecto'
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="Fecha-entrega"
                        className='text-gray-700 uppercase font-bold text-sm'
                    >
                        Fecha de formación
                    </label>
                    <input
                        id='fechaFormacion'
                        type="date"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='Fecha de formación del proyecto'
                        value={fechaFormacion}
                        onChange={e => setFechaFormacion(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="tipoFormacion"
                        className="text-gray-700 uppercase font-bold text-sm"
                    >
                        Tipo de Formación
                    </label>
                    <select
                        id="tipoFormacion"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        value={tipoFormacion}
                        onChange={(e) => setTipoFormacion(e.target.value)}
                    >
                        <option value="tecnologo">Tecnólogo</option>
                        <option value="tecnico">Técnico</option>
                        <option value="especiales">Especiales</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="horas"
                        className="text-gray-700 uppercase font-bold text-sm"
                    >
                        Horas de Formación
                    </label>
                    <input
                        id="horas"
                        type="number"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Horas de formación"
                        value={horas}
                        onChange={(e) => setHoras(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="video"
                        className="text-gray-700 uppercase font-bold text-sm"
                    >
                        Enlace al Video
                    </label>
                    <input
                        id="video"
                        type="text"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Enlace al video"
                        value={video}
                        onChange={(e) => setVideo(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="curricularFile"
                        className="text-gray-700 uppercase font-bold text-sm"
                    >
                        Archivo Curricular
                    </label>
                    <input
                        id="curricularFile"
                        type="file"
                        accept=".pdf, .doc, .docx"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        onChange={handleCurricularFileChange}
                    />
                </div>

                <input
                    type="submit"
                    value={id ? 'Actualizar Curso' : 'Crear Curso'}
                    className="bg-green-600 w-full p-3 uppercase font-bold text-white rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
            />
         </form>
        </div>
    );
};


export default FormularioCurso;