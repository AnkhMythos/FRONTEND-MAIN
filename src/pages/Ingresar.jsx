import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Google, Facebook, Apple } from "react-bootstrap-icons";

const Ingresar = () => {
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setMostrarPassword(!mostrarPassword);
  };

  // Handlers para autenticación social
  const handleGoogleLogin = () => {
    // Lógica para autenticación con Google
    console.log("Iniciando sesión con Google...");
  };

  const handleFacebookLogin = () => {
    // Lógica para autenticación con Facebook
    console.log("Iniciando sesión con Facebook...");
  };

  const handleAppleLogin = () => {
    // Lógica para autenticación con Apple
    console.log("Iniciando sesión con Apple...");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="p-4 border rounded shadow-sm">
            <h2 className="text-center mb-4">Inicia sesión</h2>
            <Form>
              {/* ... (tus campos de formulario existentes) ... */}

              <Button variant="primary" type="submit" className="w-100 mb-3">
                Confirmar
              </Button>

              <div className="d-flex align-items-center mb-3">
                <div className="border-bottom flex-grow-1"></div>
                <span className="mx-2 text-muted">o</span>
                <div className="border-bottom flex-grow-1"></div>
              </div>

              <Button 
                variant="outline-danger" 
                className="w-100 mb-3 d-flex align-items-center"
                onClick={handleGoogleLogin}
              >
                <Google className="me-2" />
                Continuar con Google
              </Button>

              <Button 
                variant="outline-primary" 
                className="w-100 mb-3 d-flex align-items-center"
                onClick={handleFacebookLogin}
              >
                <Facebook className="me-2" />
                Continuar con Facebook
              </Button>

              <Button 
                variant="outline-dark" 
                className="w-100 mb-3 d-flex align-items-center"
                onClick={handleAppleLogin}
              >
                <Apple className="me-2" />
                Continuar con Apple
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Ingresar;