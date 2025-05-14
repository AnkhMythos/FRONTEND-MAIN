import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Table, Card, Tab, Tabs, Badge, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Datos iniciales
const initialCursos = {
  cursos: [
    {
      id: 1,
      nombre: "Hacking Ético y Ciberseguridad",
      precio: 150000,
      descripcion: "Aprende Hacking Ético y Ciberseguridad de manera práctica, ¡conviértete en un experto en Hacking Ético y Ciberseguridad!",
      horas: 140,
      img: "/Paginas/Inicio/Assets_cursos/ciberseguridad.jpg",
      profesor: {
        nombre: "Ezequiel",
        apellido: "Cucinelli",
        informacion: "Soy Ezequiel Cucinelli, especialista en Hacking Ético y Ciberseguridad. Me dedico a proteger sistemas y datos sensibles, aplicando técnicas avanzadas para identificar vulnerabilidades y fortalecer la seguridad. Mi objetivo es ofrecer soluciones confiables y efectivas para garantizar una experiencia digital segura en entornos cada vez más complejos.",
      },
      horariosIds: [1, 2]
    }
  ]
};

const initialHorarios = {
  horarios: [
    {
      id: 1,
      cursoId: 1,
      dia: "Lunes",
      horaInicio: "18:00",
      horaFin: "21:00",
      precioOriginal: 150000,
      precioDescuento: 135000,
      modalidad: "Presencial"
    },
    {
      id: 2,
      cursoId: 1,
      dia: "Sábado",
      horaInicio: "09:00",
      horaFin: "13:00",
      precioOriginal: 150000,
      precioDescuento: 120000,
      modalidad: "Virtual"
    }
  ]
};

const App = () => {
  const [cursosData, setCursosData] = useState(initialCursos);
  const [horariosData, setHorariosData] = useState(initialHorarios);
  const [showModal, setShowModal] = useState(false);
  const [showHorarioModal, setShowHorarioModal] = useState(false);
  const [currentCurso, setCurrentCurso] = useState(null);
  const [currentHorario, setCurrentHorario] = useState(null);
  const [activeTab, setActiveTab] = useState('cursos');
  const [dataLoaded, setDataLoaded] = useState(false);
  
  // Cargar datos del localStorage al inicio
  useEffect(() => {
    const savedCursos = localStorage.getItem('cursosData');
    const savedHorarios = localStorage.getItem('horariosData');
    
    if (savedCursos) setCursosData(JSON.parse(savedCursos));
    if (savedHorarios) setHorariosData(JSON.parse(savedHorarios));
  }, []);

  // Guardar datos en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('cursosData', JSON.stringify(cursosData));
    localStorage.setItem('horariosData', JSON.stringify(horariosData));
  }, [cursosData, horariosData]);

  // CRUD para Cursos
  const handleAddCurso = () => {
    setCurrentCurso({
      id: Date.now(),
      nombre: "",
      precio: 0,
      descripcion: "",
      horas: 0,
      img: "",
      profesor: {
        nombre: "",
        apellido: "",
        informacion: ""
      },
      horariosIds: []
    });
    setShowModal(true);
  };

  const handleEditCurso = (curso) => {
    setCurrentCurso({ ...curso });
    setShowModal(true);
  };

  const handleDeleteCurso = (id) => {
    setCursosData({
      ...cursosData,
      cursos: cursosData.cursos.filter(c => c.id !== id)
    });
    
    // Eliminar horarios asociados
    setHorariosData({
      ...horariosData,
      horarios: horariosData.horarios.filter(h => h.cursoId !== id)
    });
  };

  const handleSaveCurso = () => {
    if (currentCurso.id) {
      const existingIndex = cursosData.cursos.findIndex(c => c.id === currentCurso.id);
      
      if (existingIndex >= 0) {
        // Actualizar curso existente
        const updatedCursos = [...cursosData.cursos];
        updatedCursos[existingIndex] = currentCurso;
        setCursosData({ ...cursosData, cursos: updatedCursos });
      } else {
        // Agregar nuevo curso
        setCursosData({
          ...cursosData,
          cursos: [...cursosData.cursos, currentCurso]
        });
      }
    }
    setShowModal(false);
  };

  // CRUD para Horarios
  const handleAddHorario = (cursoId) => {
    setCurrentHorario({
      id: Date.now(),
      cursoId: cursoId,
      dia: "Lunes",
      horaInicio: "09:00",
      horaFin: "12:00",
      precioOriginal: 0,
      precioDescuento: 0,
      modalidad: "Presencial"
    });
    setShowHorarioModal(true);
  };

  const handleEditHorario = (horario) => {
    setCurrentHorario({ ...horario });
    setShowHorarioModal(true);
  };

  const handleDeleteHorario = (id) => {
    setHorariosData({
      ...horariosData,
      horarios: horariosData.horarios.filter(h => h.id !== id)
    });
    
    // Eliminar referencia del curso
    const curso = cursosData.cursos.find(c => c.horariosIds.includes(id));
    if (curso) {
      const updatedCurso = {
        ...curso,
        horariosIds: curso.horariosIds.filter(hId => hId !== id)
      };
      
      const index = cursosData.cursos.findIndex(c => c.id === curso.id);
      const updatedCursos = [...cursosData.cursos];
      updatedCursos[index] = updatedCurso;
      
      setCursosData({ ...cursosData, cursos: updatedCursos });
    }
  };

  const handleSaveHorario = () => {
    if (currentHorario.id) {
      const existingIndex = horariosData.horarios.findIndex(h => h.id === currentHorario.id);
      
      if (existingIndex >= 0) {
        // Actualizar horario existente
        const updatedHorarios = [...horariosData.horarios];
        updatedHorarios[existingIndex] = currentHorario;
        setHorariosData({ ...horariosData, horarios: updatedHorarios });
      } else {
        // Agregar nuevo horario
        setHorariosData({
          ...horariosData,
          horarios: [...horariosData.horarios, currentHorario]
        });
        
        // Agregar referencia al curso
        const curso = cursosData.cursos.find(c => c.id === currentHorario.cursoId);
        if (curso && !curso.horariosIds.includes(currentHorario.id)) {
          const updatedCurso = {
            ...curso,
            horariosIds: [...curso.horariosIds, currentHorario.id]
          };
          
          const index = cursosData.cursos.findIndex(c => c.id === curso.id);
          const updatedCursos = [...cursosData.cursos];
          updatedCursos[index] = updatedCurso;
          
          setCursosData({ ...cursosData, cursos: updatedCursos });
        }
      }
    }
    setShowHorarioModal(false);
  };

  // Obtener horarios de un curso
  const getHorariosByCursoId = (cursoId) => {
    return horariosData.horarios.filter(h => h.cursoId === cursoId);
  };

  // Obtener curso por horarioId
  const getCursoByHorarioId = (horarioId) => {
    const horario = horariosData.horarios.find(h => h.id === horarioId);
    if (horario) {
      return cursosData.cursos.find(c => c.id === horario.cursoId);
    }
    return null;
  };

  // Formatear precio
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Gestión de Cursos y Horarios</h1>
      
      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
        <Tab eventKey="cursos" title="Cursos">
          <div className="d-flex justify-content-between mb-3">
            <h2>Cursos Disponibles</h2>
            <Button variant="primary" onClick={handleAddCurso}>
              Agregar Curso
            </Button>
          </div>
          
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Horas</th>
                <th>Profesor</th>
                <th>Horarios</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cursosData.cursos.map(curso => (
                <tr key={curso.id}>
                  <td>{curso.id}</td>
                  <td>{curso.nombre}</td>
                  <td>{formatPrice(curso.precio)}</td>
                  <td>{curso.horas}h</td>
                  <td>{curso.profesor.nombre} {curso.profesor.apellido}</td>
                  <td>
                    {getHorariosByCursoId(curso.id).length} horarios
                  </td>
                  <td>
                    <Button 
                      variant="info" 
                      size="sm" 
                      onClick={() => handleEditCurso(curso)}
                      className="me-2"
                    >
                      Editar
                    </Button>
                    <Button 
                      variant="danger" 
                      size="sm" 
                      onClick={() => handleDeleteCurso(curso.id)}
                      className="me-2"
                    >
                      Eliminar
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      onClick={() => handleAddHorario(curso.id)}
                    >
                      + Horario
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        
        <Tab eventKey="horarios" title="Horarios">
          <div className="d-flex justify-content-between mb-3">
            <h2>Horarios y Precios</h2>
          </div>
          
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Curso</th>
                <th>Día</th>
                <th>Horario</th>
                <th>Modalidad</th>
                <th>Precio Original</th>
                <th>Precio con Descuento</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {horariosData.horarios.map(horario => {
                const curso = getCursoByHorarioId(horario.id);
                return (
                  <tr key={horario.id}>
                    <td>{horario.id}</td>
                    <td>{curso ? curso.nombre : "N/A"}</td>
                    <td>{horario.dia}</td>
                    <td>{horario.horaInicio} - {horario.horaFin}</td>
                    <td>{horario.modalidad}</td>
                    <td>{formatPrice(horario.precioOriginal)}</td>
                    <td>{formatPrice(horario.precioDescuento)}</td>
                    <td>
                      <Button 
                        variant="info" 
                        size="sm" 
                        onClick={() => handleEditHorario(horario)}
                        className="me-2"
                      >
                        Editar
                      </Button>
                      <Button 
                        variant="danger" 
                        size="sm" 
                        onClick={() => handleDeleteHorario(horario.id)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
      
      {/* Modal para Cursos */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{currentCurso?.id ? "Editar Curso" : "Nuevo Curso"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentCurso && (
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre del Curso</Form.Label>
                    <Form.Control 
                      type="text" 
                      value={currentCurso.nombre}
                      onChange={(e) => setCurrentCurso({...currentCurso, nombre: e.target.value})}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control 
                      type="number" 
                      value={currentCurso.precio}
                      onChange={(e) => setCurrentCurso({...currentCurso, precio: parseFloat(e.target.value)})}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Horas de duración</Form.Label>
                    <Form.Control 
                      type="number" 
                      value={currentCurso.horas}
                      onChange={(e) => setCurrentCurso({...currentCurso, horas: parseInt(e.target.value)})}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>URL de la imagen</Form.Label>
                    <Form.Control 
                      type="text" 
                      value={currentCurso.img}
                      onChange={(e) => setCurrentCurso({...currentCurso, img: e.target.value})}
                    />
                  </Form.Group>
                </Col>
                
                <Col md={6}>
                  {currentCurso.img && (
                    <Image src={currentCurso.img} thumbnail className="mb-3" style={{maxHeight: '200px'}} />
                  )}
                </Col>
              </Row>
              
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3}
                  value={currentCurso.descripcion}
                  onChange={(e) => setCurrentCurso({...currentCurso, descripcion: e.target.value})}
                />
              </Form.Group>
              
              <h5 className="mt-4">Información del Profesor</h5>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                      type="text" 
                      value={currentCurso.profesor.nombre}
                      onChange={(e) => setCurrentCurso({
                        ...currentCurso,
                        profesor: {
                          ...currentCurso.profesor,
                          nombre: e.target.value
                        }
                      })}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control 
                      type="text" 
                      value={currentCurso.profesor.apellido}
                      onChange={(e) => setCurrentCurso({
                        ...currentCurso,
                        profesor: {
                          ...currentCurso.profesor,
                          apellido: e.target.value
                        }
                      })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Form.Group className="mb-3">
                <Form.Label>Información del Profesor</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3}
                  value={currentCurso.profesor.informacion}
                  onChange={(e) => setCurrentCurso({
                    ...currentCurso,
                    profesor: {
                      ...currentCurso.profesor,
                      informacion: e.target.value
                    }
                  })}
                />
              </Form.Group>
              
              <div className="mt-4">
                <h5>Horarios asociados</h5>
                {currentCurso.horariosIds.length > 0 ? (
                  <Table striped bordered size="sm">
                    <thead>
                      <tr>
                        <th>Día</th>
                        <th>Horario</th>
                        <th>Modalidad</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentCurso.horariosIds.map(horarioId => {
                        const horario = horariosData.horarios.find(h => h.id === horarioId);
                        if (!horario) return null;
                        
                        return (
                          <tr key={horario.id}>
                            <td>{horario.dia}</td>
                            <td>{horario.horaInicio} - {horario.horaFin}</td>
                            <td>{horario.modalidad}</td>
                            <td>{formatPrice(horario.precioDescuento)}</td>
                            <td>
                              <Button 
                                variant="info" 
                                size="sm" 
                                onClick={() => {
                                  setShowModal(false);
                                  handleEditHorario(horario);
                                }}
                                className="me-2"
                              >
                                Editar
                              </Button>
                              <Button 
                                variant="danger" 
                                size="sm" 
                                onClick={() => handleDeleteHorario(horario.id)}
                              >
                                Eliminar
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                ) : (
                  <p>No hay horarios asociados</p>
                )}
                
                <Button 
                  variant="secondary" 
                  onClick={() => {
                    setShowModal(false);
                    handleAddHorario(currentCurso.id);
                  }}
                >
                  + Agregar Horario
                </Button>
              </div>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveCurso}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
      
      {/* Modal para Horarios */}
      <Modal show={showHorarioModal} onHide={() => setShowHorarioModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{currentHorario?.id ? "Editar Horario" : "Nuevo Horario"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentHorario && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Día</Form.Label>
                <Form.Select 
                  value={currentHorario.dia}
                  onChange={(e) => setCurrentHorario({...currentHorario, dia: e.target.value})}
                >
                  <option value="Lunes">Lunes</option>
                  <option value="Martes">Martes</option>
                  <option value="Miércoles">Miércoles</option>
                  <option value="Jueves">Jueves</option>
                  <option value="Viernes">Viernes</option>
                  <option value="Sábado">Sábado</option>
                  <option value="Domingo">Domingo</option>
                </Form.Select>
              </Form.Group>
              
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Hora Inicio</Form.Label>
                    <Form.Control 
                      type="time" 
                      value={currentHorario.horaInicio}
                      onChange={(e) => setCurrentHorario({...currentHorario, horaInicio: e.target.value})}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Hora Fin</Form.Label>
                    <Form.Control 
                      type="time" 
                      value={currentHorario.horaFin}
                      onChange={(e) => setCurrentHorario({...currentHorario, horaFin: e.target.value})}
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Form.Group className="mb-3">
                <Form.Label>Modalidad</Form.Label>
                <Form.Select 
                  value={currentHorario.modalidad}
                  onChange={(e) => setCurrentHorario({...currentHorario, modalidad: e.target.value})}
                >
                  <option value="Presencial">Presencial</option>
                  <option value="Virtual">Virtual</option>
                  <option value="Híbrido">Híbrido</option>
                </Form.Select>
              </Form.Group>
              
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Precio Original</Form.Label>
                    <Form.Control 
                      type="number" 
                      step="0.01"
                      value={currentHorario.precioOriginal}
                      onChange={(e) => setCurrentHorario({...currentHorario, precioOriginal: parseFloat(e.target.value)})}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Precio con Descuento</Form.Label>
                    <Form.Control 
                      type="number" 
                      step="0.01"
                      value={currentHorario.precioDescuento}
                      onChange={(e) => setCurrentHorario({...currentHorario, precioDescuento: parseFloat(e.target.value)})}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowHorarioModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveHorario}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;