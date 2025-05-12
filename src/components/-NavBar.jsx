import React, { useState } from 'react';
import { Nav, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="nav container-fluid p-3">
      {/* Menú de navegación */}
      <ul className="nav__elements d-flex flex-wrap list-unstyled mb-0 gap-3">
        <li className="nav__element">
          <Link to="/" className="nav__link text-decoration-none text-dark">Inicio</Link>
        </li>
        <li className="nav__element">
          <Link to="/paginas/gift-card/gift-card" className="nav__link text-decoration-none text-dark">Giftcard</Link>
        </li>
        <li className="nav__element">
          <Link to="/paginas/calendario/calendario" className="nav__link text-decoration-none text-dark">Calendario</Link>
        </li>
        <li className="nav__element">
          <Link to="/paginas/contacto/contacto" className="nav__link text-decoration-none text-dark">Contacto</Link>
        </li>
      </ul>

      {/* Botones derecha */}
      <div className="header__right-buttons d-flex align-items-center gap-3 mt-2 mt-md-0">
        <div className="buttons d-flex gap-2">
          <Link to="/paginas/sign-in/sign-in" className="header__right-button-login btn btn-outline-primary btn-sm">
            Iniciar Sesión
          </Link>
          <Link to="/paginas/sign-up/sign-up" className="header__right-button-register btn btn-primary btn-sm">
            Registrarse
          </Link>
        </div>

        {/* Perfil con dropdown */}
        <div className="header__right-perfil position-relative">
          <Dropdown show={showDropdown} onToggle={setShowDropdown}>
            <Dropdown.Toggle as="a" id="perfil" className="pefil text-decoration-none">
              <span className="visually-hidden">Perfil</span>
            </Dropdown.Toggle>

            <Dropdown.Menu align="end" className="dropdown__header shadow-sm border-0 rounded-3">
              <div className="dropdown__header-container p-3">
                <div className="d-flex align-items-center gap-2">
                  <a href="/paginas/perfil/perfil" id="perfil-dropdown">
                    <img src="./Paginas/Inicio/Assets/user.png" alt="Perfil" width="40" height="40" />
                  </a>
                  <div className="dropdown__header-names">
                    <p className="name mb-0">Hola <span className="name" id="name">Usuario</span>!</p>
                    <span className="email text-muted" id="emailPerfil">correo@example.com</span>
                  </div>
                  <img src="./Paginas/Inicio/Assets/plus.svg" id="arrowImgDown" alt="Flecha abajo" width="20" />
                </div>
              </div>

              <Dropdown.Menu.Item className="dropdown__item py-2 px-3">
                <img src="./Paginas/Inicio/Asset__perfil/perfil.svg" alt="Perfil" className="me-2" />
                <Link to="/paginas/perfil/perfil" className="dropdown__link text-decoration-none text-dark">
                  Mi perfil
                </Link>
              </Dropdown.Menu.Item>

              <Dropdown.Menu.Item className="dropdown__item py-2 px-3">
                <img src="./Paginas/Inicio/Asset__perfil/book.svg" alt="Mis cursos" className="me-2" />
                <Link to="/paginas/perfil/perfil#cursos" className="dropdown__link text-decoration-none text-dark">
                  Mis cursos
                </Link>
              </Dropdown.Menu.Item>

              <Dropdown.Menu.Item className="dropdown__item py-2 px-3">
                <img src="./Paginas/Inicio/Asset__perfil/log_out.svg" alt="Cerrar sesión" className="me-2" />
                <Link to="/" className="dropdown__link text-decoration-none text-danger">
                  Cerrar sesión
                </Link>
              </Dropdown.Menu.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;