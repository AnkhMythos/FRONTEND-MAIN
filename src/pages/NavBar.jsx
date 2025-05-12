import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Offcanvas, Dropdown, Form } from 'react-bootstrap';
import {
  PersonFill,
  BookFill,
  CartFill,
  BellFill,
  GearFill,
  SunFill,
  MoonFill,
} from 'react-bootstrap-icons';

import './NavBar.css';

const CustomNavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [userType, setUserType] = useState('guest'); // 'guest', 'student', 'teacher', 'admin'
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // Aplicar dark mode globalmente
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }, [darkMode]);

  // Simular datos del usuario según tipo
  useEffect(() => {
    switch (userType) {
      case 'student':
        setUser({ name: 'Estudiante Ejemplo', role: 'student' });
        break;
      case 'teacher':
        setUser({ name: 'Profesor Ejemplo', role: 'teacher' });
        break;
      case 'admin':
        setUser({ name: 'Administrador', role: 'admin' });
        break;
      default:
        setUser(null);
    }
  }, [userType]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  const handleLogout = () => {
    setUserType('guest');
    setUser(null);
    navigate('/');
  };

  return (
    <>
      <Navbar expand="lg" className="container-fluid" bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'}>
        <Container fluid>
          {/* Botón hamburguesa */}
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setShowOffcanvas(true)}
            className="me-2"
            aria-label="Menú de navegación"
          />

          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <BookFill className="me-2 text-primary" />
            <span className="fw-bold">AprendePlus</span>
          </Navbar.Brand>

          {/* Selector de rol (solo desarrollo) */}
          <Form.Select
            size="sm"
            className="me-2"
            style={{ width: '120px' }}
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            aria-label="Seleccionar tipo de usuario"
          >
            <option value="guest">Invitado</option>
            <option value="student">Estudiante</option>
            <option value="teacher">Profesor</option>
            <option value="admin">Admin</option>
          </Form.Select>

          {/* Menús de acción derecha */}
          <div className="ms-auto d-flex align-items-center">
            {/* Modo oscuro/claro */}
            <Button
              variant={darkMode ? 'outline-light' : 'outline-secondary'}
              size="sm"
              onClick={toggleDarkMode}
              className="me-2"
              aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {darkMode ? <SunFill /> : <MoonFill />}
            </Button>

            {/* Menú usuario autenticado */}
            {user && (
              <>
                {/* Carrito (estudiantes) */}
                {user.role === 'student' && (
                  <Dropdown className="me-2">
                    <Dropdown.Toggle variant="outline-primary" size="sm" id="dropdown-cart">
                      <CartFill aria-hidden="true" focusable="false" />
                      <span className="visually-hidden">Carrito</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Tu Carrito</Dropdown.Header>
                      <Dropdown.Item>Curso de React</Dropdown.Item>
                      <Dropdown.Item>Curso de Node.js</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item className="text-end">
                        <Button variant="success" size="sm">
                          Pagar
                        </Button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}

                {/* Notificaciones */}
                <Dropdown className="me-2">
                  <Dropdown.Toggle variant="outline-secondary" size="sm" id="dropdown-notifications">
                    <BellFill aria-hidden="true" focusable="false" />
                    <span className="visually-hidden">Notificaciones</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header>Notificaciones</Dropdown.Header>
                    <Dropdown.Item>Nuevo curso disponible</Dropdown.Item>
                    {user.role === 'teacher' && <Dropdown.Item>Tienes nuevos estudiantes</Dropdown.Item>}
                    <Dropdown.Item>Mensajes nuevos</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Perfil usuario */}
                <Dropdown align="end">
                  <Dropdown.Toggle variant="outline-primary" size="sm" id="dropdown-profile">
                    <PersonFill className="me-1" aria-hidden="true" focusable="false" />
                    <span>{user.name}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header>Mi Cuenta</Dropdown.Header>
                    <Dropdown.Item as={Link} to="/perfil" onClick={handleCloseOffcanvas}>
                      Perfil
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/mis-cursos" onClick={handleCloseOffcanvas}>
                      Mis Cursos
                    </Dropdown.Item>

                    {user.role === 'teacher' && (
                      <>
                        <Dropdown.Divider />
                        <Dropdown.Header>Profesor</Dropdown.Header>
                        <Dropdown.Item as={Link} to="/crear-curso" onClick={handleCloseOffcanvas}>
                          Crear Curso
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/mis-cursos-profesor" onClick={handleCloseOffcanvas}>
                          Gestionar Cursos
                        </Dropdown.Item>
                      </>
                    )}

                    {user.role === 'admin' && (
                      <>
                        <Dropdown.Divider />
                        <Dropdown.Header>Administrador</Dropdown.Header>
                        <Dropdown.Item as={Link} to="/admin/usuarios" onClick={handleCloseOffcanvas}>
                          Gestionar Usuarios
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/admin/cursos" onClick={handleCloseOffcanvas}>
                          Gestionar Cursos
                        </Dropdown.Item>
                      </>
                    )}

                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/configuracion" onClick={handleCloseOffcanvas}>
                      <GearFill className="me-1" />
                      Configuración
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Cerrar Sesión</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}

            {/* Menú sin iniciar sesión */}
            {!user && (
              <div className="d-none d-lg-flex gap-2">
                <Button as={Link} to="/login" variant="outline-primary" size="sm">
                  <PersonFill className="me-1" />
                  Iniciar Sesión
                </Button>
                <Button as={Link} to="/registro" variant="primary" size="sm">
                  Registrarse
                </Button>
              </div>
            )}
          </div>

          {/* Menú Offcanvas móvil */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            show={showOffcanvas}
            onHide={handleCloseOffcanvas}
            placement="start"
            className={darkMode ? 'bg-dark text-white' : ''}
          >
            <Offcanvas.Header closeButton closeVariant={darkMode ? 'white' : ''}>
              <Offcanvas.Title>Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" onClick={handleCloseOffcanvas}>
                  Inicio
                </Nav.Link>
                <Nav.Link as={Link} to="/cursos" onClick={handleCloseOffcanvas}>
                  Cursos
                </Nav.Link>
                <Nav.Link as={Link} to="/calendario" onClick={handleCloseOffcanvas}>
                  Calendario
                </Nav.Link>
                <Nav.Link as={Link} to="/contacto" onClick={handleCloseOffcanvas}>
                  Contacto
                </Nav.Link>
                {user && (
                  <>
                    <Nav.Link as={Link} to="/mis-cursos" onClick={handleCloseOffcanvas}>
                      Mis Cursos
                    </Nav.Link>
                    {user.role === 'teacher' && (
                      <Nav.Link as={Link} to="/crear-curso" onClick={handleCloseOffcanvas}>
                        Crear Curso
                      </Nav.Link>
                    )}
                  </>
                )}
              </Nav>

              <div className="mt-3 d-lg-none">
                <Form.Select
                  value={userType}
                  onChange={(e) => {
                    setUserType(e.target.value);
                    handleCloseOffcanvas();
                  }}
                  className="mb-3"
                  aria-label="Seleccionar tipo de usuario"
                >
                  <option value="guest">Invitado</option>
                  <option value="student">Estudiante</option>
                  <option value="teacher">Profesor</option>
                  <option value="admin">Admin</option>
                </Form.Select>

                {!user && (
                  <div className="d-flex flex-column gap-2 mb-3">
                    <Button
                      as={Link}
                      to="/login"
                      variant="outline-primary"
                      size="sm"
                      className="w-100"
                      onClick={handleCloseOffcanvas}
                    >
                      Iniciar Sesión
                    </Button>
                    <Button
                      as={Link}
                      to="/registro"
                      variant="primary"
                      size="sm"
                      className="w-100"
                      onClick={handleCloseOffcanvas}
                    >
                      Registrarse
                    </Button>
                  </div>
                )}

                <Button
                  variant={darkMode ? 'outline-light' : 'outline-secondary'}
                  size="sm"
                  onClick={toggleDarkMode}
                  className="w-100"
                >
                  {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
                </Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavBar;