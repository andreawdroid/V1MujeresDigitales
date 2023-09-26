import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/ClienteAxios";

const Registrar = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, email, password, repetirPassword].includes('')) {
      setAlerta({
        msg: 'Todos los campos son requeridos',
        error: true,
      })
      return;
    };

    if (password !== repetirPassword) {
      setAlerta({
        msg: 'Las contraseñas no coinciden',
        error: true,
      })
      return;
    };

    if (password.length < 6) {
      setAlerta({
        msg: 'La contraseña es muy corta, agrega mínimo 6 caracteres',
        error: true,
      })
      return;
    };
    setAlerta({});

    // Crea el usuario en la API
    try {
      const { data } = await clienteAxios.post('/usuarios', { nombre, email, password });
      setAlerta({
        msg: data.msg,
        error: false,
      })
      setNombre('');
      setEmail('');
      setPassword('');
      setRepetirPassword('');
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      })
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
                htmlFor="nombre"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Nombre</label>
              <input
                id="nombre"
                type="text"
                placeholder="Ingresa tu nombre"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="apellido"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Apellido</label>
              <input
                id="apellido"
                type="text"
                placeholder="Ingresa tu apellido"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="tipo documento"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Tipo documento</label>
              <input
                id="tipodocumento"
                type="text"
                placeholder="Ingresa tu tipo de documento"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
              />
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
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="servicios"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Servicios</label>
              <input
                id="servicios"
                type="text"
                placeholder="Ingresa tu direcion"
                className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <Link
            to='/'
            className="bg-pink-700 w-full py-2 px-3 text-white uppercase text-sm font-semibold rounded cursor-pointer hover:bg-pink-800 text-center my-5  flex items-center justify-center"
          >
            Inicia sesión
          </Link>


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
    </>
  );
}

export default Registrar;
