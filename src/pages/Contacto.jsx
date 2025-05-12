import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { GeoAltFill, EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('Formulario enviado correctamente');
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Contacto</h1>
      
      <Row className="mb-5">
        <Col md={4} className="mb-4 mb-md-0">
          <Card className="h-100 shadow-sm">
            <Card.Body className="text-center p-4">
              <GeoAltFill className="text-primary mb-3" size={30} />
              <Card.Title>Dirección</Card.Title>
              <Card.Text>
                Av. Universidad 123<br />
                Col. Centro, Ciudad Ejemplo<br />
                CP 12345
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4 mb-md-0">
          <Card className="h-100 shadow-sm">
            <Card.Body className="text-center p-4">
              <EnvelopeFill className="text-primary mb-3" size={30} />
              <Card.Title>Email</Card.Title>
              <Card.Text>
                <a href="mailto:info@aprendeplus.com" className="text-decoration-none">
                  info@aprendeplus.com
                </a><br />
                <a href="mailto:soporte@aprendeplus.com" className="text-decoration-none">
                  soporte@aprendeplus.com
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="text-center p-4">
              <TelephoneFill className="text-primary mb-3" size={30} />
              <Card.Title>Teléfono</Card.Title>
              <Card.Text>
                <a href="tel:+525512345678" className="text-decoration-none">
                  +52 55 1234 5678
                </a><br />
                <span className="text-muted">
                  Lunes a Viernes: 9am - 6pm
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">Envíanos un mensaje</h2>
              
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" placeholder="Tu nombre" required />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Tu email" required />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Asunto</Form.Label>
                  <Form.Control type="text" placeholder="Asunto del mensaje" required />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Escribe tu mensaje aquí..." required />
                </Form.Group>
                
                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Enviar Mensaje
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;

// import React from 'react';
// import { Container, Form, Button } from 'react-bootstrap';

// function Contacto() {
//   return (
//     <Container>
//       <h2>Contacto</h2>
//       <Form>
//         <Form.Group className="mb-3">
//           <Form.Label>Nombre</Form.Label>
//           <Form.Control type="text" placeholder="Tu nombre" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="tu@email.com" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Mensaje</Form.Label>
//           <Form.Control as="textarea" rows={3} />
//         </Form.Group>
//         <Button variant="primary" type="submit">Enviar</Button>
//       </Form>
//     </Container>
//   );
// }

// export default Contacto;
