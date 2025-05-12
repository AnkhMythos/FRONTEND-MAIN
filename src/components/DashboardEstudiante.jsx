import { Card, ProgressBar, Button, Row, Col, ListGroup } from 'react-bootstrap';
import { BookmarkFill, ClockFill, TrophyFill } from 'react-bootstrap-icons';

const StudentDashboard = ({ courses, stats }) => {
  return (
    <div className="dashboard-container">
      <Row className="mb-4">
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="text-center">
              <TrophyFill size={48} className="text-warning mb-3" />
              <h3>{stats.completedCourses}</h3>
              <Card.Text>Cursos Completados</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="text-center">
              <BookmarkFill size={48} className="text-primary mb-3" />
              <h3>{stats.enrolledCourses}</h3>
              <Card.Text>Cursos Inscritos</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="text-center">
              <ClockFill size={48} className="text-info mb-3" />
              <h3>{stats.hoursLearned}</h3>
              <Card.Text>Horas de Aprendizaje</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Card className="shadow-sm mb-4">
        <Card.Header>
          <h5 className="mb-0">Mis Cursos en Progreso</h5>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {courses.inProgress.map(course => (
              <ListGroup.Item key={course.id} className="py-3">
                <Row className="align-items-center">
                  <Col md={6}>
                    <h6 className="mb-1">{course.title}</h6>
                    <small className="text-muted">{course.instructor}</small>
                  </Col>
                  <Col md={4}>
                    <ProgressBar now={course.progress} label={`${course.progress}%`} />
                  </Col>
                  <Col md={2} className="text-end">
                    <Button variant="outline-primary" size="sm">Continuar</Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
      
      <Card className="shadow-sm">
        <Card.Header>
          <h5 className="mb-0">Cursos Recomendados</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            {courses.recommended.map(course => (
              <Col key={course.id} md={4} className="mb-3">
                <Card className="h-100">
                  <Card.Img variant="top" src={course.image} />
                  <Card.Body>
                    <Card.Title className="h6">{course.title}</Card.Title>
                    <div className="d-flex justify-content-between">
                      <Button variant="outline-primary" size="sm">Ver Detalles</Button>
                      <Button variant="primary" size="sm">Inscribirse</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StudentDashboard;