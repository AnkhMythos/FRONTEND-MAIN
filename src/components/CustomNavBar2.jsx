import { useState, useEffect } from 'react';
import { 
  Navbar, 
  Nav, 
  Container, 
  Button,
  Offcanvas,
  Dropdown,
  Form
} from 'react-bootstrap';
import { 
  PersonFill, 
  BookFill, 
  CartFill, 
  BellFill,
  GearFill,
  SunFill,
  MoonFill
} from 'react-bootstrap-icons';
import UserCard from './UserCard'; // Importa el componente UserCard

const CustomNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showUserCard, setShowUserCard] = useState(false); // Estado para mostrar/ocultar UserCard
  const [userType, setUserType] = useState('guest'); // 'guest', 'student', 'teacher', 'admin'
  const [user, setUser] = useState({
    id: 1,
    name: 'Juan',
    lastName: 'Pérez',
    email: 'juan.perez@example.com',
    userType: 'ADMIN',
    permissions: ['Crear usuarios', 'Editar contenido', 'Eliminar contenido'],
  });

  // Efecto para aplicar dark mode a toda la página
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Mi Aplicación</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Enlace</Nav.Link>
            </Nav>
            <Button variant="primary" onClick={() => setShowUserCard(!showUserCard)}>
              {showUserCard ? 'Ocultar Usuario' : 'Mostrar Usuario'}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Renderiza UserCard si showUserCard es true */}
      {showUserCard && <UserCard user={user} />}
    </>
  );
};

export default CustomNavbar;