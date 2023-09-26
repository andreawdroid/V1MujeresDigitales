import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/ClienteAxios';

const ConfirmarCuenta = () => {
  const params = useParams();

  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

  const { id } = params;
  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${id}`;
        const { data } = await clienteAxios(url);
        // Podemos llamar la funcion de axios de esa manera, ya que, por defecto tiene el request get
        setAlerta({
          msg: data.msg,
          error: false,
        })
        setCuentaConfirmada(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    };
    confirmarCuenta();
  }, [])
  const { msg } = alerta;

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Confirma tu cuenta y comienza a crear tus {''}
        <span className="text-slate-700">proyectos</span></h1>
      <div className='mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white'>
        {msg && <Alerta alerta={alerta} />}
        {cuentaConfirmada && (
          <Link
            to='/'
            className="block text-center my-5 text-slate-500 uppercase text-sm hover:underline"
          >
            Inicia sesion
          </Link>
        )}
      </div>
    </>
  )
}

export default ConfirmarCuenta