import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';


function App() {
  return (
    
    <Router>
      <NavBarComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Gift-card" element={<GiftCard />} />
        <Route path="/pages/calendario" element={<Calendario />} />
        <Route path="/pages/contacto" element={<Contacto />} />
        <Route path="/pages/sign-in" element={<SignIn />} />
        <Route path="/pages/sign-up" element={<SignUp />} />
        <Route path="/pages/perfil" element={<Perfil />} />
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