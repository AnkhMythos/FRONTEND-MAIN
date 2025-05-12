import { useState } from 'react';
import { 
  Navbar, 
  Nav, 
  Container, 
  Button, 
  NavDropdown,
  Offcanvas 
} from 'react-bootstrap';
import './NavBar.css';

const CustomNavbar = ({ darkMode, toggleDarkMode }) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <>
      <Navbar expand="lg" className="container-fluid" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"}>
        <Container fluid>
          {/* Botón hamburguesa para móviles */}
          <Navbar.Toggle 
            aria-controls="offcanvasNavbar" 
            onClick={handleShowOffcanvas}
          />
          
          {/* Logo o marca podría ir aquí */}
          <Navbar.Brand href="/" className="ms-2">TuLogo</Navbar.Brand>
          
          {/* Contenedor de botones de la derecha (visible en desktop) */}
          <div className="d-none d-lg-flex header__right-buttons align-items-center">
            <div className="buttons d-flex gap-2 me-3">
              <Button href="/login" variant="outline-primary" size="sm">Iniciar Sesión</Button>
              <Button href="/registro" variant="primary" size="sm">Registrarse</Button>
            </div>
            
            <Button 
              variant={darkMode ? "outline-light" : "outline-secondary"} 
              size="sm" 
              onClick={toggleDarkMode}
              className="me-2"
            >
              {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
            </Button>
          </div>

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
                
                {/* Versión móvil de los botones de login y dark mode */}
                <div className="d-lg-none mt-3">
                  <div className="buttons d-flex gap-2 mb-3">
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
                  
                  <Button 
                    variant={darkMode ? "outline-light" : "outline-secondary"} 
                    size="sm" 
                    onClick={() => {
                      toggleDarkMode();
                      handleCloseOffcanvas();
                    }}
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

export default CustomNavbar;