import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/ClienteAxios";

const Registrar = () => {
  const [usuario, setUsuario] = useState('');
  const [nombres, setNombres] = useState('');
  const [alerta, setAlerta] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [tipoDoc, setTipoDoc] = useState('');
  const [documento, setDocumento] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ocupacion, setOcupacion] = useState('');
  const [idServicios, setIdServicios] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación para verificar que todos los campos obligatorios estén completos
    if (!nombres || !apellidos || !tipoDoc || !documento || !correo || !telefono || !ciudad || !direccion || !ocupacion || !idServicios || !password) {
      setAlerta({
        msg: "Todos los campos son requeridos",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post("usuarios", {
        nombres,
        apellidos,
        tipoDoc,
        documento,
        correo,
        telefono,
        ciudad,
        direccion,
        ocupacion,
        idServicios,
        password
      });

      setAlerta({
        msg: data.msg,
        error: false,
      });

      // Limpiar los campos después de un registro exitoso
      setNombres('');
      setApellidos('');
      setTipoDoc('');
      setDocumento('');
      setCorreo('');
      setTelefono('');
      setCiudad('');
      setDireccion('');
      setOcupacion('');
      setIdServicios('');
      password('');
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  


  const { msg } = alerta;

  return (
    <>
      {msg && <Alerta alerta={alerta} />}
      <h2 className="text-pink-600 font-black text-4xl text-center capitalize mb-2">Crea tu cuenta</h2>
      <div className="my-10 bg-white shadow-md rounded-lg p-10">

        <form onSubmit={handleSubmit}>
          <div className="my-5 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="nombres"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Nombres</label>
              <input
                id="nombres"
                type="text"
                placeholder="Ingresa tus nombres"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={nombres}
                onChange={e => setNombres(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="apellido"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Apellido</label>
              <input
                id="apellidos"
                type="text"
                placeholder="Ingresa tus apellidos"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={apellidos}
                onChange={e => setApellidos(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="tipoDoc"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Tipo de Documento</label>
              <select
                id="tipoDoc"
                value={tipoDoc}
                onChange={(e) => setTipoDoc(e.target.value)}
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
              >
                <option value="DNI">DNI</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="Cédula">Cédula</option>
                <option value="Otro">Otro</option>
              </select>
            </div>


            <div>
              <label
                htmlFor="Documento"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Documento</label>
              <input
                id="documento"
                type="number"
                placeholder="Ingresa tu nùmero de documento"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={documento}
                onChange={e => setDocumento(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="correo"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Correo electronico</label>
              <input
                id="correo"
                type="text"
                placeholder="Ingresa tu correo electronico"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={correo}
                onChange={e => setCorreo(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="telefono"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Telefono</label>
              <input
                id="telefono"
                type="number"
                placeholder="Ingresa tu nùmero de telefono"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={telefono}
                onChange={e => setTelefono(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="ciudad"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Ciudad</label>
              <input
                id="ciudad"
                type="text"
                placeholder="Ingresa tu ciudad"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={ciudad}
                onChange={e => setCiudad(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="direccion"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Direcciòn</label>
              <input
                id="direccion"
                type="text"
                placeholder="Ingresa tu direcion"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={direccion}
                onChange={e => setDireccion(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="ocupacion"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Ocupacion</label>
              <input
                id="ocupacion"
                type="text"
                placeholder="Ingresa tu ocupacion"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={ocupacion}
                onChange={e => setOcupacion(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="idServicios"
                className="uppercase text-gray-600 block text-xl font-bold"
                >
                Servicios
              </label>
              <select
                id="idServicios"
                value={idServicios}
                onChange={(e) => setIdServicios(e.target.value)}
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
              >
                <option value="1">Servicio 1</option>
                <option value="2">Servicio 2</option>
                {/* Agrega más opciones según tu base de datos */}
              </select>
            </div>

            <div>
              <label
                htmlFor="password"
                className="uppercase text-gray-600 block text-xl font-bold"
                >
                Contraseña
              </label>
              <input
                id="ocupacion"
                type="text"
                placeholder="Ingresa tu contrseña"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>


          </div>
          <input
            type="submit"
            value="Registrase"
            className="bg-pink-700 mb-5 w-full py-3 text-white uppercase font-bold rounded cursor-pointer transition-all hover:bg-pink-800"
          />

        </form>

        <nav className="lg:flex lg:justify-between">
          <Link
            to='/'
            className="block text-center my-5 text-slate-500 uppercase text-sm hover:underline"
          >
            Ya tienes una cuenta? Inicia sesión
          </Link>
          <Link
            to='/olvide-password/'
            className="block text-center my-5 text-slate-500 uppercase text-sm hover:underline"
          >
            Olvidé mi contraseña
          </Link>
        </nav>
      </div>
      {/* Resto del código... */}
    </>
  );
};

export default Registrar;
