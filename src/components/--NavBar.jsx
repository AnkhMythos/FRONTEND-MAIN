import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import './NavBar.css'; // Asegúrate de importar los estilos

const NavBar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="navbar container-fluid">
      {/* Menú de navegación */}
      <ul className="nav__elements">
        <li className="nav__element"><a href="/" className="nav__link">Inicio</a></li>
        <li className="nav__element"><a href="/gift-card" className="nav__link">Giftcard</a></li>
        <li className="nav__element"><a href="/calendario" className="nav__link">Calendario</a></li>
        <li className="nav__element"><a href="/contacto" className="nav__link">Contacto</a></li>
        <li className="nav__element"><a href="/UserCard" className="nav__link">Usuario</a></li>
        <li className="nav__element"><a href="/MostrarUsuario" className="nav__link">Mostrar Usuario</a></li>
      </ul>

      {/* Botones derecha */}
      <div className="header__right-buttons">
        <div className="buttons d-flex gap-2">
          <a href="/login" className="btn btn-outline-primary btn-sm">Iniciar Sesión</a>
          <a href="/registro" className="btn btn-primary btn-sm">Registrarse</a>
        </div>

        <div className="header__right-perfil">
          <Button variant="secondary" size="sm" onClick={toggleDarkMode}>
            {darkMode ? (
              <>
                ☀️ Modo Claro
              </>
            ) : (
              <>
                🌙 Modo Oscuro
              </>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;