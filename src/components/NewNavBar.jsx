import { useState, useEffect } from 'react';
import { 
  Navbar, 
  Nav, 
  Container, 
  Button,
  Offcanvas,
  Dropdown,
  Badge
} from 'react-bootstrap';
import { 
  PersonFill, 
  BookFill, 
  CartFill, 
  BellFill,
  GearFill 
} from 'react-bootstrap-icons';
import './NavBar.css';

const CourseNavbar = ({ user }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Aplicar dark mode a toda la página
  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light';
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const closeOffcanvas = () => setShowOffcanvas(false);

  return (
    <Navbar expand="lg" className="shadow-sm" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"}>
      <Container fluid>
        {/* Menú Hamburguesa */}
        <Navbar.Toggle onClick={() => setShowOffcanvas(true)} className="me-2" />
        
        {/* Logo/Marca */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <BookFill className="me-2 text-primary" />
          <span className="fw-bold">AprendePlus</span>
        </Navbar.Brand>
        
        {/* Elementos derecha */}
        <div className="ms-auto d-flex align-items-center">
          {/* Modo oscuro (siempre visible) */}
          <Button 
            variant={darkMode ? "outline-light" : "outline-secondary"} 
            size="sm" 
            onClick={toggleDarkMode}
            className="me-2"
            title={darkMode ? 'Modo claro' : 'Modo oscuro'}
          >
            {darkMode ? '☀️' : '🌙'}
          </Button>
          
          {/* Menú usuario autenticado */}
          {user ? (
            <>
              {/* Carrito */}
              <Dropdown className="me-2">
                <Dropdown.Toggle variant="outline-primary" size="sm" id="dropdown-cart">
                  <CartFill />
                  <Badge bg="danger" className="ms-1">3</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Header>Tu Carrito</Dropdown.Header>
                  <Dropdown.Item>Curso de React</Dropdown.Item>
                  <Dropdown.Item>Curso de Node.js</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="text-end">
                    <Button variant="success" size="sm">Pagar</Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
              {/* Notificaciones */}
              <Dropdown className="me-2">
                <Dropdown.Toggle variant="outline-secondary" size="sm" id="dropdown-notifications">
                  <BellFill />
                  <Badge bg="danger" className="ms-1">5</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Header>Notificaciones</Dropdown.Header>
                  <Dropdown.Item>Nuevo curso disponible</Dropdown.Item>
                  <Dropdown.Item>Mensaje del profesor</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
              {/* Perfil usuario */}
              <Dropdown align="end">
                <Dropdown.Toggle variant="outline-primary" size="sm" id="dropdown-profile">
                  <PersonFill className="me-1" />
                  {user.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Header>Mi Cuenta</Dropdown.Header>
                  <Dropdown.Item href="/mi-perfil">Perfil</Dropdown.Item>
                  <Dropdown.Item href="/mis-cursos">Mis Cursos</Dropdown.Item>
                  
                  {user.role === 'profesor' && (
                    <>
                      <Dropdown.Divider />
                      <Dropdown.Header>Profesor</Dropdown.Header>
                      <Dropdown.Item href="/crear-curso">Crear Curso</Dropdown.Item>
                      <Dropdown.Item href="/mis-cursos-profesor">Gestionar Cursos</Dropdown.Item>
                    </>
                  )}
                  
                  {user.role === 'admin' && (
                    <>
                      <Dropdown.Divider />
                      <Dropdown.Header>Administrador</Dropdown.Header>
                      <Dropdown.Item href="/admin/usuarios">Gestionar Usuarios</Dropdown.Item>
                      <Dropdown.Item href="/admin/cursos">Gestionar Cursos</Dropdown.Item>
                    </>
                  )}
                  
                  <Dropdown.Divider />
                  <Dropdown.Item href="/configuracion">
                    <GearFill className="me-1" />
                    Configuración
                  </Dropdown.Item>
                  <Dropdown.Item href="/logout">Cerrar Sesión</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            /* Menú usuario no autenticado */
            <div className="d-none d-lg-flex gap-2">
              <Button href="/login" variant="outline-primary" size="sm">
                <PersonFill className="me-1" />
                Iniciar Sesión
              </Button>
              <Button href="/registro" variant="primary" size="sm">
                Registrarse
              </Button>
            </div>
          )}
        </div>
        
        {/* Menú Offcanvas para móviles */}
        <Navbar.Offcanvas
          show={showOffcanvas}
          onHide={closeOffcanvas}
          placement="start"
          className={darkMode ? "bg-dark text-light" : ""}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menú AprendePlus</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link href="/" onClick={closeOffcanvas}>Inicio</Nav.Link>
              <Nav.Link href="/cursos" onClick={closeOffcanvas}>Explorar Cursos</Nav.Link>
              
              {/* Categorías desplegable */}
              <Dropdown className="mb-2">
                <Dropdown.Toggle variant="outline-secondary" className="w-100 text-start">
                  Categorías
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/categorias/desarrollo-web">Desarrollo Web</Dropdown.Item>
                  <Dropdown.Item href="/categorias/data-science">Data Science</Dropdown.Item>
                  <Dropdown.Item href="/categorias/marketing">Marketing Digital</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
              {!user && (
                <div className="mt-3 d-flex flex-column gap-2">
                  <Button href="/login" variant="outline-primary" onClick={closeOffcanvas}>
                    Iniciar Sesión
                  </Button>
                  <Button href="/registro" variant="primary" onClick={closeOffcanvas}>
                    Registrarse
                  </Button>
                </div>
              )}
              
              {user && (
                <>
                  <Nav.Link href="/mis-cursos" onClick={closeOffcanvas}>Mis Cursos</Nav.Link>
                  {user.role === 'profesor' && (
                    <Nav.Link href="/crear-curso" onClick={closeOffcanvas}>Crear Curso</Nav.Link>
                  )}
                  <Nav.Link href="/configuracion" onClick={closeOffcanvas}>Configuración</Nav.Link>
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default CourseNavbar;