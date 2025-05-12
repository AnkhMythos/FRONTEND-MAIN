import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const GiftCard = () => {
  return (
    <Card style={{ width: '400px', margin: '20px' }}>
      <Card.Body>
        <Card.Title>Gift Card</Card.Title>
        <Card.Text>
          Este es un componente de ejemplo del GiftCard
        </Card.Text>
        <Button variant="success">Probar Funcionalidad</Button>
      </Card.Body>
    </Card>
  );
};

export default GiftCard() 