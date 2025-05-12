import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomNavBar from './components/CustomNavBar';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Perfil from './pages/Perfil';
import MisCursos from './pages/MisCursos';
import CrearCurso from './pages/CrearCurso';
import Calendario from './pages/Calendario';
import NotFound from './pages/NotFound';
import AdminUsuarios from './pages/admin/AdminUsuarios';
import AdminCursos from './pages/admin/AdminCursos';

// Puedes importar un estilo global aquí
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CustomNavBar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/mis-cursos" element={<MisCursos />} />
          <Route path="/crear-curso" element={<CrearCurso />} />
          <Route path="/admin/usuarios" element={<AdminUsuarios />} />
          <Route path="/admin/cursos" element={<AdminCursos />} />
          {/* Ruta para cualquier otra URL no definida */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;