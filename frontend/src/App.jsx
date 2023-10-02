import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';

import Login from './pages/Login';
import Registrar from './pages/Registrar';
import OlvidePassword from './pages/OlvidePassword';
import NuevoPassword from './pages/NuevoPassword';
import ConfirmarCuenta from './pages/ConfirmarCuenta';
import RutaProtegida from './layouts/RutaProtegida';
import Cursos from './pages/Servicios';
import NuevoCurso from './pages/NuevoServicio';
import AuthHome from './layouts/AuthHome';


import EditarCurso from './pages/EditarServicio';
import Home from './pages/ViewMunicipios';
import ViewMunicipios from './pages/ViewMunicipios';
import CrearMunicipios from './pages/CrearMunicipios';

import ServiciosView from './pages/ServiciosView';
import CrearServicios from './pages/CrearServicios';
import CategoriasView from './pages/CategoriasView';
import CrearCategorias from './pages/CrearCategorias';
import ServiciosCategorias from './pages/ServiciosCategorias';
import ManzanasView from  './pages/ViewManzanas';
import RegistroCategorias from  './pages/RegistroCategorias';
import CrearManzanas from './pages/CrearManzanas';
import HomeMujer from './pages/HomeMujer';
import HomeMapView from './pages/HomeMap';
import { AuthProvider } from './context/AuthProvider';
import { CursosProvider } from './context/ServiciosProvider';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <CursosProvider>
          <Routes>
            <Route path='/' element={<AuthLayout />}>

              <Route index element={<Login />} />
              <Route path='registrar' element={<Registrar />} />
              <Route path='olvide-password' element={<OlvidePassword />} />
              <Route path='olvide-password/:token' element={<NuevoPassword />} />
              <Route path='confirmar/:id' element={<ConfirmarCuenta />} />

            </Route>
            <Route path='/Home' element={<AuthHome />} />
            <Route path='/HomeMujer' element={<HomeMujer />} />
            <Route path='/ViewMunicipios' element={<ViewMunicipios />} />
            <Route path='/CrearMunicipios' element={<CrearMunicipios />} />
            <Route path="/Servicios" element={<ServiciosView />} />
            <Route path='/CrearServicios' element={<CrearServicios />} />
            <Route path="/Categorias" element={<CategoriasView />} />
            <Route path='/CrearCategorias' element={<CrearCategorias />} />
            <Route path="/Manzanas" element={<ManzanasView />} />
            <Route path='/CrearManzanas' element={<CrearManzanas />} />
            <Route path='/HomeMap' element={<HomeMapView />} />
            <Route path='/ServiciosCategorias' element={<ServiciosCategorias />} />
            <Route path='/RegistroCategorias' element={<RegistroCategorias />} />

            <Route path="crear-cursos" element={<NuevoCurso />} />
            <Route path="editar/:id" element={<EditarCurso />} />

            <Route path="/Servicios" element={<ServiciosView />} />
            <Route path="/Categorias" element={<CategoriasView />} />

            <Route path="/cursos" element={<AuthHome />}>
              <Route index element={<Cursos />} />

            </Route>
          </Routes>
        </CursosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App