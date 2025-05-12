import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useState } from 'react';

const CourseForm = ({ initialData, onSubmit }) => {
  const [course, setCourse] = useState(initialData || {
    title: '',
    description: '',
    category: '',
    price: 0,
    level: 'beginner',
    image: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validación simple
    const newErrors = {};
    if (!course.title) newErrors.title = 'El título es requerido';
    if (!course.description) newErrors.description = 'La descripción es requerida';
    if (!course.category) newErrors.category = 'La categoría es requerida';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }
    
    try {
      await onSubmit(course);
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {errors.submit && <Alert variant="danger">{errors.submit}</Alert>}
      
      <Form.Group className="mb-3">
        <Form.Label>Título del Curso</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={course.title}
          onChange={handleChange}
          isInvalid={!!errors.title}
        />
        <Form.Control.Feedback type="invalid">
          {errors.title}
        </Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="description"
          value={course.description}
          onChange={handleChange}
          isInvalid={!!errors.description}
        />
        <Form.Control.Feedback type="invalid">
          {errors.description}
        </Form.Control.Feedback>
      </Form.Group>
      
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              name="category"
              value={course.category}
              onChange={handleChange}
              isInvalid={!!errors.category}
            >
              <option value="">Seleccione una categoría</option>
              <option value="desarrollo-web">Desarrollo Web</option>
              <option value="data-science">Data Science</option>
              <option value="marketing">Marketing Digital</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.category}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        
        <Col md={6}>
          <Form.Group>
            <Form.Label>Nivel</Form.Label>
            <Form.Select
              name="level"
              value={course.level}
              onChange={handleChange}
            >
              <option value="beginner">Principiante</option>
              <option value="intermediate">Intermedio</option>
              <option value="advanced">Avanzado</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Precio (USD)</Form.Label>
            <Form.Control
              type="number"
              min="0"
              step="5"
              name="price"
              value={course.price}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        
        <Col md={6}>
          <Form.Group>
            <Form.Label>Imagen del Curso (URL)</Form.Label>
            <Form.Control
              type="url"
              name="image"
              value={course.image}
              onChange={handleChange}
              placeholder="https://ejemplo.com/imagen.jpg"
            />
          </Form.Group>
        </Col>
      </Row>
      
      <div className="d-flex justify-content-end gap-2">
        <Button variant="outline-secondary">Cancelar</Button>
        <Button 
          variant="primary" 
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Guardando...' : 'Guardar Curso'}
        </Button>
      </div>
    </Form>
  );
};

export default CourseForm;