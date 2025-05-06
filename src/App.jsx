import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <Router>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paginas/gift-card/gift-card" element={<GiftCard />} />
        <Route path="/paginas/calendario/calendario" element={<Calendario />} />
        <Route path="/paginas/contacto/contacto" element={<Contacto />} />
        <Route path="/paginas/sign-in/sign-in" element={<SignIn />} />
        <Route path="/paginas/sign-up/sign-up" element={<SignUp />} />
        <Route path="/paginas/perfil/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

// Estos componentes son ejemplos, puedes reemplazarlos por los tuyos
const Home = () => <h1>Inicio</h1>;
const GiftCard = () => <h1>Gift Card</h1>;
const Calendario = () => <h1>Calendario</h1>;
const Contacto = () => <h1>Contacto</h1>;
const SignIn = () => <h1>Iniciar Sesión</h1>;
const SignUp = () => <h1>Registrarse</h1>;
const Perfil = () => <h1>Mi Perfil</h1>;

export default App;