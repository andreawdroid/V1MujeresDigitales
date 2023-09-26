import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from '../config/ClienteAxios';

const NuevoPassword = () => {
  const params = useParams();
  const { token } = params;
  const [password, setPassword] = useState('');
  const [passwordModificada, setPasswordModificada] = useState(false);
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        const { data } = await clienteAxios(`/usuarios/olvide-password/${token}`)
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        })
      }
    };
    comprobarToken();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({
        msg: 'El password debe ser de minimo 6 caracteres',
        error: true,
      })
      return;
    }

    try {
      const url = `/usuarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      setAlerta({
        msg: data.msg,
        error: false,
      })
      setPasswordModificada(true);
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
      <h1 className="text-sky-600 font-black text-6xl capitalize">Restablece tu Contraseña {''}
        <span className="text-slate-700">proyectos</span></h1>

      {msg && <Alerta alerta={alerta} />}

      {tokenValido && (
        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white shadow-md rounded-lg p-10">
          <div className="my-5">
            <label
              htmlFor="password"
              className="uppercase text-gray-600 block text-xl font-bold"
            >Nueva Password</label>
            <input
              id="password"
              type="password"
              placeholder="Escribe tu nueva contraseña de registro"
              className="w-full shadow-md rounded-xl mt-3 p-3 border bg-gray-50"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Guardar nueva password"
            className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded cursor-pointer transition-all hover:bg-sky-800"
          />
        </form>
      )}

      {passwordModificada && (
        <Link
          to='/'
          className="block text-center my-5 text-slate-500 uppercase text-sm hover:underline"
        >
          Inicia sesion
        </Link>
      )}

    </>
  )
}

export default NuevoPassword