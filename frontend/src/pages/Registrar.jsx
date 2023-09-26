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
      <div className="my-10 bg-white shadow-md rounded-lg p-10">
        <h1 className="text-pink-600 font-black text-6xl capitalize mb-5">Regístrate</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label
              htmlFor="nombre"
              className="uppercase text-gray-600 block text-xl font-bold"
            >Nombre</label>
            <input
              id="nombre"
              type="text"
              placeholder="Nombre de registro"
              className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="email"
              className="uppercase text-gray-600 block text-xl font-bold"
            >Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email de registro"
              className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="password"
              className="uppercase text-gray-600 block text-xl font-bold"
            >Password</label>
            <input
              id="password"
              type="password"
              placeholder="Contraseña de registro"
              className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="password2"
              className="uppercase text-gray-600 block text-xl font-bold"
            >Confirma tu password</label>
            <input
              id="password2"
              type="password"
              placeholder="Confirmar tu contraseña de registro"
              className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
              value={repetirPassword}
              onChange={e => setRepetirPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Registrarse"
            className="bg-green-700 mb-5 w-full py-3 text-white uppercase font-bold rounded cursor-pointer transition-all hover:bg-green-800"
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
    </>
  );
}

export default Registrar;
