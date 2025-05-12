import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas, Dropdown, Form } from 'react-bootstrap';
import { PersonFill, BookFill, CartFill, BellFill, GearFill, SunFill, MoonFill } from 'react-bootstrap-icons';
import './NavBar.css';

// import bgImage from './assets/images/BG.png';

// const App = () => (
//   <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//     {/* Contenido */}
//   </div>
// );

const CustomNavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [userType, setUserType] = useState('guest'); // 'guest', 'student', 'teacher', 'admin'
  const [user, setUser] = useState(null);

  // Efecto para aplicar dark mode a toda la página
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }, [darkMode]);

  // Simular datos de usuario según el tipo seleccionado
  useEffect(() => {
    switch(userType) {
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

  return (
    <>
      <Navbar expand="lg" className="container-fluid" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"}>
        <Container fluid>
          {/* Botón hamburguesa (izquierda) */}
          <Navbar.Toggle 
            aria-controls="offcanvasNavbar" 
            onClick={() => setShowOffcanvas(true)}
            className="me-2"
          />
          
          {/* Logo o marca */}
          <Navbar.Brand href="/">
            <BookFill className="me-2 text-primary" />
            <span className="fw-bold">AprendePlus</span>
          </Navbar.Brand>
          
          {/* Selector de tipo de usuario (solo para desarrollo) */}
          <Form.Select 
            size="sm" 
            className="me-2" 
            style={{ width: '120px' }}
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="guest">Invitado</option>
            <option value="student">Estudiante</option>
            <option value="teacher">Profesor</option>
            <option value="admin">Admin</option>
          </Form.Select>
          
          {/* Contenedor de elementos de la derecha */}
          <div className="ms-auto d-flex align-items-center">
            {/* Botón dark mode */}
            <Button 
              variant={darkMode ? "outline-light" : "outline-secondary"} 
              size="sm" 
              onClick={toggleDarkMode}
              className="me-2"
              title={darkMode ? 'Modo claro' : 'Modo oscuro'}
            >
              {darkMode ? <SunFill /> : <MoonFill />}
            </Button>
            
            {/* Menú usuario autenticado */}
            {user ? (
              <>
                {/* Carrito (solo estudiantes) */}
                {user.role === 'student' && (
                  <Dropdown className="me-2">
                    <Dropdown.Toggle variant="outline-primary" size="sm" id="dropdown-cart">
                      <CartFill />
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
                )}
                
                {/* Notificaciones */}
                <Dropdown className="me-2">
                  <Dropdown.Toggle variant="outline-secondary" size="sm" id="dropdown-notifications">
                    <BellFill />
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
                    <PersonFill className="me-1" />
                    {user.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header>Mi Cuenta</Dropdown.Header>
                    <Dropdown.Item href="/CustomNavBar">Perfil</Dropdown.Item>
                    <Dropdown.Item href="/mis-cursos">Mis Cursos</Dropdown.Item>
                    
                    {user.role === 'teacher' && (
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
                    <Dropdown.Item onClick={() => setUserType('guest')}>Cerrar Sesión</Dropdown.Item>
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
            id="offcanvasNavbar"
            show={showOffcanvas}
            onHide={handleCloseOffcanvas}
            placement="start"
            className={darkMode ? "bg-dark text-white" : ""}
          >
            <Offcanvas.Header closeButton closeVariant={darkMode ? "white" : ""}>
              <Offcanvas.Title>Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href="/" onClick={handleCloseOffcanvas}>Inicio</Nav.Link>
                <Nav.Link href="/cursos" onClick={handleCloseOffcanvas}>Cursos</Nav.Link>
                <Nav.Link href="/calendario" onClick={handleCloseOffcanvas}>Calendario</Nav.Link>
                <Nav.Link href="/components/Contacto" onClick={handleCloseOffcanvas}>Contacto</Nav.Link>
                
                {user && (
                  <>
                    <Nav.Link href="/mis-cursos" onClick={handleCloseOffcanvas}>Mis Cursos</Nav.Link>
                    {user.role === 'teacher' && (
                      <Nav.Link href="/crear-curso" onClick={handleCloseOffcanvas}>Crear Curso</Nav.Link>
                    )}
                  </>
                )}
                
                {/* Versión móvil de los botones */}
                <div className="mt-3 d-lg-none">
                  <Form.Select 
                    value={userType}
                    onChange={(e) => {
                      setUserType(e.target.value);
                      handleCloseOffcanvas();
                    }}
                    className="mb-3"
                  >
                    <option value="guest">Invitado</option>
                    <option value="student">Estudiante</option>
                    <option value="teacher">Profesor</option>
                    <option value="admin">Admin</option>
                  </Form.Select>
                  
                  {!user && (
                    <div className="d-flex flex-column gap-2 mb-3">
                      <Button 
                        href="/login" 
                        variant="outline-primary" 
                        size="sm" 
                        className="w-100"
                        onClick={handleCloseOffcanvas}
                      >
                        Iniciar Sesión
                      </Button>
                      <Button 
                        href="/registro" 
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
                    variant={darkMode ? "outline-light" : "outline-secondary"} 
                    size="sm" 
                    onClick={toggleDarkMode}
                    className="w-100"
                  >
                    {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
                  </Button>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavBar;