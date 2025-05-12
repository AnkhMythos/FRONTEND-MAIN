import { Form, Accordion, Button } from 'react-bootstrap';

const CourseFilters = ({ categories, onFilter }) => {
  return (
    <div className="border p-3 rounded shadow-sm">
      <h5 className="mb-3">Filtrar Cursos</h5>
      
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Categorías</Accordion.Header>
          <Accordion.Body>
            {categories.map((category) => (
              <Form.Check
                key={category.id}
                type="checkbox"
                id={`cat-${category.id}`}
                label={`${category.name} (${category.count})`}
                className="mb-2"
                onChange={() => onFilter('category', category.id)}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>Nivel</Accordion.Header>
          <Accordion.Body>
            {['Principiante', 'Intermedio', 'Avanzado'].map((level) => (
              <Form.Check
                key={level}
                type="checkbox"
                id={`level-${level}`}
                label={level}
                className="mb-2"
                onChange={() => onFilter('level', level)}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="2">
          <Accordion.Header>Precio</Accordion.Header>
          <Accordion.Body>
            <Form.Range 
              min="0" 
              max="500" 
              step="50"
              onChange={(e) => onFilter('price', e.target.value)}
            />
            <div className="d-flex justify-content-between">
              <span>$0</span>
              <span>$500+</span>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
      <Button 
        variant="outline-secondary" 
        size="sm" 
        className="w-100 mt-3"
        onClick={() => onFilter('reset')}
      >
        Limpiar Filtros
      </Button>
    </div>
  );
};

export default CourseFilters;