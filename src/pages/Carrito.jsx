import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaTimes, FaLock, FaCheck } from 'react-icons/fa';

const Carrito = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Curso de React Avanzado',
      instructor: 'Juan Pérez',
      price: 1999,
      originalPrice: 2499,
      image: 'https://via.placeholder.com/200x113',
      bestSeller: true,
      rating: 4.7,
      students: 12543,
      onSale: true
    },
    {
      id: 2,
      title: 'JavaScript Moderno ES6+',
      instructor: 'María García',
      price: 1499,
      originalPrice: 1999,
      image: 'https://via.placeholder.com/200x113',
      bestSeller: false,
      rating: 4.5,
      students: 8765,
      onSale: true
    }
  ]);

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.trim() !== '') {
      setCouponApplied(true);
    }
  };

  const removeCoupon = () => {
    setCouponApplied(false);
    setCouponCode('');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discount = couponApplied ? subtotal * 0.2 : 0; // 20% de descuento
  const total = subtotal - discount;

  return (
    <Container className="my-4">
      <Row>
        <Col lg={8}>
          <h2 className="mb-4">
            <FaShoppingCart className="me-2" />
            Carrito de compras
          </h2>
          
          {cartItems.length === 0 ? (
            <Card>
              <Card.Body className="text-center py-5">
                <h4>Tu carrito está vacío</h4>
                <p className="text-muted">Continúa buscando cursos para agregar a tu carrito</p>
                <Button variant="primary">Explorar cursos</Button>
              </Card.Body>
            </Card>
          ) : (
            <>
              {cartItems.map(item => (
                <Card key={item.id} className="mb-3">
                  <Card.Body>
                    <Row>
                      <Col md={2} xs={4}>
                        <img src={item.image} alt={item.title} className="img-fluid" />
                      </Col>
                      <Col md={8} xs={6}>
                        <h5>{item.title}</h5>
                        <p className="text-muted mb-1">Por: {item.instructor}</p>
                        {item.bestSeller && (
                          <Badge bg="warning" text="dark" className="mb-2">
                            Más vendido
                          </Badge>
                        )}
                        <div className="d-flex align-items-center small">
                          <span className="text-warning me-1">★ {item.rating}</span>
                          <span className="text-muted">({item.students.toLocaleString()})</span>
                        </div>
                      </Col>
                      <Col md={2} xs={2} className="text-end">
                        <Button 
                          variant="link" 
                          className="text-danger p-0"
                          onClick={() => removeItem(item.id)}
                        >
                          <FaTimes />
                        </Button>
                        <div className="mt-3">
                          {item.onSale && (
                            <small className="text-muted text-decoration-line-through d-block">
                              ${item.originalPrice.toLocaleString()}
                            </small>
                          )}
                          <strong>${item.price.toLocaleString()}</strong>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </>
          )}
        </Col>
        
        <Col lg={4}>
          <Card className="sticky-top" style={{ top: '20px' }}>
            <Card.Body>
              <h5>Total:</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              
              {couponApplied && (
                <div className="d-flex justify-content-between mb-2 text-success">
                  <span>Descuento (20%):</span>
                  <span>-${discount.toLocaleString()}</span>
                </div>
              )}
              
              <div className="d-flex justify-content-between mb-3 fw-bold">
                <span>Total:</span>
                <span>${total.toLocaleString()}</span>
              </div>
              
              <Form.Group className="mb-3">
                <Form.Label>Cupón de descuento</Form.Label>
                {couponApplied ? (
                  <div className="d-flex align-items-center justify-content-between bg-light p-2 rounded">
                    <span className="text-success">
                      <FaCheck className="me-1" />
                      Cupón aplicado
                    </span>
                    <Button 
                      variant="link" 
                      size="sm" 
                      className="text-danger p-0"
                      onClick={removeCoupon}
                    >
                      Eliminar
                    </Button>
                  </div>
                ) : (
                  <div className="d-flex">
                    <Form.Control 
                      type="text" 
                      placeholder="Ingresa código"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button 
                      variant="outline-secondary" 
                      className="ms-2"
                      onClick={applyCoupon}
                    >
                      Aplicar
                    </Button>
                  </div>
                )}
              </Form.Group>
              
              <Button 
                variant="primary" 
                size="lg" 
                className="w-100 mb-2"
                onClick={() => setShowCheckoutModal(true)}
                disabled={cartItems.length === 0}
              >
                <FaLock className="me-2" />
                Ir a pagar
              </Button>
              
              <p className="small text-muted text-center mt-3">
                Garantía de reembolso de 30 días
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Modal de checkout */}
      <Modal show={showCheckoutModal} onHide={() => setShowCheckoutModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Finalizar compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Resumen de tu compra</h5>
          <ul className="list-unstyled">
            {cartItems.map(item => (
              <li key={item.id} className="d-flex justify-content-between py-2 border-bottom">
                <span>{item.title}</span>
                <span>${item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
          
          <div className="d-flex justify-content-between fw-bold mt-3">
            <span>Total a pagar:</span>
            <span>${total.toLocaleString()}</span>
          </div>
          
          <Form className="mt-4">
            <h5 className="mb-3">Información de pago</h5>
            <Form.Group className="mb-3">
              <Form.Label>Número de tarjeta</Form.Label>
              <Form.Control type="text" placeholder="1234 5678 9012 3456" />
            </Form.Group>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Fecha de expiración</Form.Label>
                  <Form.Control type="text" placeholder="MM/AA" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="text" placeholder="123" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCheckoutModal(false)}>
            Volver al carrito
          </Button>
          <Button variant="primary" onClick={() => setShowCheckoutModal(false)}>
            Confirmar y pagar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Carrito;