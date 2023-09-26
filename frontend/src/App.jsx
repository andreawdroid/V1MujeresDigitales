import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';

import Login from './pages/Login';
import Registrar from './pages/Registrar';
import OlvidePassword from './pages/OlvidePassword';
import NuevoPassword from './pages/NuevoPassword';
import ConfirmarCuenta from './pages/ConfirmarCuenta';
import RutaProtegida from './layouts/RutaProtegida';
import Cursos from './pages/Cursos';
import NuevoCurso from './pages/NuevoCurso';
import Curso from './pages/Curso';
import EditarCurso from './pages/EditarCurso';

import { AuthProvider } from './context/AuthProvider';
import {  CursosProvider } from './context/CursosProvider';

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
            <Route path="/cursos" element={<RutaProtegida />}>
              <Route index element={<Cursos />} />
              <Route path="crear-cursos" element={<NuevoCurso />} />
              <Route path=":id" element={<Curso />} />
              <Route path="editar/:id" element={<EditarCurso />} />
            </Route>
          </Routes>
        </CursosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App