import { Link } from "react-router-dom";
import { useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from '../config/ClienteAxios';

const OlvidePassword = () => {

  const [email, setEmail] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '' || email.length < 6) {
      setAlerta({
        msg: 'El email es obligatorio',
        error: true,
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password`, { email });
      setAlerta({
        msg: data.msg,
        error: false,
      });
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
      <h1 className="text-pink-600 font-black text-6xl capitalize">Recupera Tu {''}
        <span className="text pink-700">Contraseña</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}

      <form
        className="my-10 bg-white shadow-md rounded-lg p-10"
        onSubmit={handleSubmit}
      >
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
        <input
          type="submit"
          value="Enviar instrucciones"
          className="bg-pink-700 mb-5 w-full py-3 text-white uppercase font-bold rounded cursor-pointer transition-all hover:bg-pink-800"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          to='/'
          className="block text-center my-5 text-slate-500 uppercase text-sm hover:underline"
        >
          Ya tienes una cuenta? Inicia sesion
        </Link>
        <Link
          to='/registrar/'
          className="block text-center my-5 text-slate-500 uppercase text-sm hover:underline"
        >
          No tienes una cuenta? Registrate
        </Link>
      </nav>
    </>
  )
}

export default OlvidePassword