import { useState, useEffect } from 'react';
import { 
  Navbar, 
  Nav, 
  Container, 
  Button,
  Offcanvas 
} from 'react-bootstrap';
import './NavBar.css';


const CustomNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <>
      <Navbar expand="lg" className="container-fluid" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"}>
        <Container fluid>
          {/* Botón hamburguesa (izquierda) */}
          <Navbar.Toggle 
            aria-controls="offcanvasNavbar" 
            onClick={handleShowOffcanvas}
            className="me-2"
          />
          
          {/* Logo o marca */}
          <Navbar.Brand href="/">TuLogo</Navbar.Brand>
                   
          

          {/* Offcanvas (menú lateral para móviles) */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            show={showOffcanvas}
            onHide={handleCloseOffcanvas}
            className={darkMode ? "bg-dark text-white" : ""}
          >
            <Offcanvas.Header closeButton closeVariant={darkMode ? "white" : ""}>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href="/" onClick={handleCloseOffcanvas}>Inicio</Nav.Link>
                <Nav.Link href="/gift-card" onClick={handleCloseOffcanvas}>Giftcard</Nav.Link>
                <Nav.Link href="/calendario" onClick={handleCloseOffcanvas}>Calendario</Nav.Link>
                <Nav.Link href="/contacto" onClick={handleCloseOffcanvas}>Contacto</Nav.Link>
                <Nav.Link href="/UserCard" onClick={handleCloseOffcanvas}>Usuario</Nav.Link>
                <Nav.Link href="/MostrarUsuario" onClick={handleCloseOffcanvas}>Mostrar Usuario</Nav.Link>

                {/* Contenedor de elementos de la derecha */}
          <div className="ms-auto d-flex align-items-center">
            <div className="d-none d-lg-flex gap-2 me-3">
              <Button href="/login" variant="outline-primary" size="sm">Iniciar Sesión</Button>
              <Button href="/registro" variant="primary" size="sm">Registrarse</Button>
            </div>
             {/* Botón dark mode */}
             <Button 
              variant={darkMode ? "outline-light" : "outline-secondary"} 
              size="sm" 
              onClick={toggleDarkMode}
              className="me-2"
            >
              {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
            </Button>
            </div>
                
                {/* Versión móvil de los botones */}
                <div className="d-lg-none mt-4">
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
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;