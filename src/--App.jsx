import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';

// Importa los componentes desde la carpeta components
import Home from './components/Home';
import GiftCard from './components/GiftCard';
import Calendario from './components/Calendario';
import Contacto from './components/Contacto';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Perfil from './components/Perfil';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gift-card" element={<GiftCard />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComponent from './components/Navbar';

// // Importa los componentes desde la carpeta components
// import Home from './components/Home';
// import GiftCard from './components/GiftCard';
// import Calendario from './components/Calendario';
// import Contacto from './components/Contacto';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// import Perfil from './components/Perfil';


// function App() {
//   return (
//     <Router>
//       <NavbarComponent />

//       {/* <Routes>
//         <Route path="/" element={<Home />} /> 
//         <Route path="/gift-card" element={<GiftCard />} />
//         <Route path="/calendario" element={<Calendario />} />
//         <Route path="/contacto" element={<Contacto />} />
//         <Route path="/sign-in" element={<SignIn />} />
//         <Route path="/sign-up" element={<SignUp />} />
//         <Route path="/perfil" element={<Perfil />} />
//       </Routes>
//       </Router> */}
//     );
//   }

// // Moved the comment block outside the App component
// {/* 
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/paginas/gift-card/gift-card" element={<GiftCard />} />
//   <Route path="/paginas/calendario/calendario" element={<Calendario />} />
//   <Route path="contacto" element={<Contacto />} />
//   <Route path="/paginas/sign-in/sign-in" element={<SignIn />} />
//   <Route path="/paginas/sign-up/sign-up" element={<SignUp />} />
//   <Route path="/paginas/perfil/perfil" element={<Perfil />} />
// </Routes>
// */}

// // Estos componentes son ejemplos
const Home = () => <h1>Inicio</h1>;
const GiftCard = () => <h1>Gift Card</h1>;
const Calendario = () => <h1>Calendario</h1>;
const Contacto = () => <h1>Contacto</h1>;
const SignIn = () => <h1>Iniciar Sesión</h1>;
const SignUp = () => <h1>Registrarse</h1>;
const Perfil = () => <h1>Mi Perfil</h1>;

export default App;