import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';

// Importa los componentes de las páginas
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Contacto from './pages/Contacto';
import Login from './pages/Ingresar'; // Asegúrate de que este archivo exista
import Registro from './pages/Registro';
import Perfil from './pages/user/Perfil';
import MisCursos from './pages/user/MisCursos';
import Config from './pages/user/Config';
import CrearCurso from './pages/profe/CrearCurso';
import AdminUsuarios from './pages/admin/AdminUsuarios';
import AdminCursos from './pages/admin/AdminCursos';

function App() {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/ingresar" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* Rutas de usuario */}
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/mis-cursos" element={<MisCursos />} />
        <Route path="/config" element={<Config />} />

        {/* Rutas de profesor */}
        <Route path="/crear-curso" element={<CrearCurso />} />

        {/* Rutas de administrador */}
        <Route path="/admin/usuarios" element={<AdminUsuarios />} />
        <Route path="/admin/cursos" element={<AdminCursos />} />
      </Routes>
    </Router>
  );
}

export default App;

