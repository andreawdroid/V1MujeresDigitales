import { Link } from "react-router-dom"; // Importa el componente Link de React Router para la navegación.
import { useState } from "react"; // Importa el hook useState de React para gestionar el estado.
import Alerta from "../components/Alerta"; // Importa el componente Alerta desde una ubicación relativa.
import clienteAxios from "../config/ClienteAxios"; // Importa una instancia de cliente Axios configurada previamente.
import useAuth from "../hooks/useAuth"; // Importa el hook useAuth para gestionar la autenticación.

const Login = () => {
  const [correo, setCorreo] = useState(''); // Estado para almacenar el correo electrónico.
  const [password, setPassword] = useState(''); // Estado para almacenar la contraseña.
  const [alerta, setAlerta] = useState({}); // Estado para mostrar mensajes de alerta.
  const { SetAuth } = useAuth(); // Obtiene una función relacionada con la autenticación desde el hook useAuth.

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([correo, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post("/auth/login", {
        correo,
        password,
      });

      setAlerta({});
      localStorage.setItem("token", data.token);
      setAuth(true); // Asumiendo que useAuth maneja el estado de autenticación.

      // Redirige al usuario a la página de inicio o a donde desees.
      // Puedes usar useHistory de react-router-dom para lograr esto.
      // history.push("/inicio");
    } catch (error) {
      setAlerta({
        msg: "Credenciales inválidas. Por favor, verifica tu correo y contraseña.",
        error: true,
      });
    }
  };

  const { msg } = alerta; // Extrae el mensaje de alerta del estado de alerta.

  return (
    <>
      {msg && <Alerta alerta={alerta} />} {/* Muestra el componente Alerta si hay un mensaje de alerta. */}
      <div className="flex flex-col items-center bg-white justify-center my-20 p-10 shadow-lg rounded-xl">
        <form className="w-96" onSubmit={handleSubmit}>
          <div className="my-5">
            <h6 className="text-pink-600 font-black text-4xl text-center">Ingresa</h6>
          </div>
          <div className="my-5">
            <label htmlFor="correo" className="text-gray-500 block text-xl font-bold">
              Correo Electrónico
            </label>
            <input
              id="correo"
              type="email"
              placeholder="Email de registro"
              className="w-full shadow-md rounded-xl mt-3 p-3 border bg-blue-50"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label htmlFor="password" className="text-gray-500 block text-xl font-bold">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Contraseña de registro"
              className="w-full shadow-md rounded-xl mt-3 p-3 border bg-blue-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Iniciar Seccion"
            className="bg-pink-700 w-full py-2 px-3 text-white uppercase text-sm font-semibold rounded cursor-pointer hover:bg-pink-800"
          />
        </form>

        <nav class="lg:flex lg:justify-between mt-5">
          <div class="block text-center text-slate-500 uppercase text-sm hover:underline mb-2 lg:mb-0">
            <Link to="registrar">No tienes una cuenta? Regístrate</Link>
          </div>
          <div class="block text-center text-slate-500 uppercase text-sm hover:underline">
            <Link to="olvide-password">Olvidé mi contraseña</Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Login;
