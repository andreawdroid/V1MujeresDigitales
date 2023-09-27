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

import EditarCurso from './pages/EditarServicio';
import Home from './pages/Home';
import ServiciosView from './pages/ServiciosView';
import CategoriasView from './pages/CategoriasView';

import { AuthProvider } from './context/AuthProvider';
import {  CursosProvider } from './context/ServiciosProvider';

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
              <Route path="crear-cursos" element={<NuevoCurso />} />
              <Route path="editar/:id" element={<EditarCurso />} />
              <Route path="/Home" element={<Home/>} />
              <Route path="/Servicios" element={<ServiciosView/>} />
              <Route path="/Categorias" element={<CategoriasView/>} />


              
            </Route>
            <Route path="/cursos" element={<RutaProtegida />}>
              <Route index element={<Cursos />} />
              
            </Route>
          </Routes>
        </CursosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App