
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';


const AuthHome = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-5 md:mt-10 p-5 md:flex md:justify-center">
        <div className="md:w-2/3 lg:w-1/2">
          {/* Renderiza el componente Home aquí */}
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AuthHome;
