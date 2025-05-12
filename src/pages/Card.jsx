import { Card, Button, Badge, ProgressBar } from 'react-bootstrap';
import { StarFill, PeopleFill, ClockFill } from 'react-bootstrap-icons';
import './NavBar.css';

const Card = ({ course }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={course.image} alt={course.title} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Badge bg="info" className="mb-2">{course.category}</Badge>
          <div className="d-flex align-items-center">
            <StarFill className="text-warning me-1" />
            <span>{course.rating}</span>
          </div>
        </div>
        
        <Card.Title>{course.title}</Card.Title>
        <Card.Text className="text-muted small">{course.instructor}</Card.Text>
        
        <div className="mt-auto">
          <div className="d-flex justify-content-between small text-muted mb-2">
            <span><PeopleFill className="me-1" /> {course.students} estudiantes</span>
            <span><ClockFill className="me-1" /> {course.duration}</span>
          </div>
          
          {course.progress ? (
            <>
              <ProgressBar now={course.progress} label={`${course.progress}%`} className="mb-2" />
              <Button variant="outline-primary" size="sm" className="w-100">
                Continuar
              </Button>
            </>
          ) : (
            <div className="d-flex justify-content-between align-items-center">
              <span className="h5 mb-0 text-primary">${course.price}</span>
              <Button variant="primary" size="sm">
                Comprar
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Card;