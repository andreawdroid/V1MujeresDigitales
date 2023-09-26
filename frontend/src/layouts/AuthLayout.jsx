import { Outlet } from "react-router-dom";
import HeaderLogin from "../components/HeaderLogin.jsx";

const AuthLayout = () => {
  return (
    <>
      <HeaderLogin /> {/* Coloca tu encabezado personalizado aquí */}
      <main className="container mx-auto mt-5 md:mt-10 p-5 md:flex md:justify-center">
        <div className="md:w-2/3 lg:w-1/2">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AuthLayout;