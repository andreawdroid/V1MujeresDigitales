import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/ClienteAxios";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const params = useParams();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alerta, setAlerta] = useState({});

    const { SetAuth } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true,
            })
            return;
        }

        try {
            const { data } = await clienteAxios.post('/usuarios/login', { email, password });
            setAlerta({});
            localStorage.setItem('token', data.token);
            SetAuth(data);
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
        <div class="flex flex-col items-center bg-white justify-center my-20 p-10 shadow-lg rounded-xl">
          <form class="w-96">
            <div class="my-5">
              <h6 class="text-pink-600 font-black text-4xl text-center">Ingresa</h6>
            </div>
            <div class="my-5">
              <label for="email" class="text-gray-500 block text-xl font-bold">Correo Electrónico</label>
              <input
                id="Correo"
                type="email"
                placeholder="Email de registro"
                class="w-full shadow-md rounded-xl mt-3 p-3 border bg-blue-50"
              />
            </div>
            <div class="my-5">
              <label for="Contraseña" class="text-gray-500 block text-xl font-bold">Contraseña</label>
              <input
                id="password"
                type="password"
                placeholder="Contraseña de registro"
                class="w-full shadow-md rounded-xl mt-3 p-3 border bg-blue-50"
              />
            </div>
            <input
              type="submit"
              value="Iniciar sesión"
              class="bg-pink-700 w-full py-2 px-3 text-white uppercase text-sm font-semibold rounded cursor-pointer hover:bg-pink-600"
            />
          </form>
      
          <nav class="lg:flex lg:justify-between mt-5">
            <Link
              to='registrar'
              class="block text-center text-slate-500 uppercase text-sm hover:underline mb-2 lg:mb-0"
            >
              No tienes una cuenta? Registrate
            </Link>
            <Link
              to='olvide-password'
              class="block text-center text-slate-500 uppercase text-sm hover:underline"
            >
              Olvidé mi contraseña
            </Link>
          </nav>
        </div>
      </>
      
    )
}

export default Login





