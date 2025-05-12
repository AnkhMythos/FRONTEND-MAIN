import React from 'react';
import UserCard from './components/UserCard';

function MostrarUsuario() {
  const mockUser = {
    id: '1',
    name: 'Juan',
    lastName: 'Pérez',
    email: 'juan@example.com',
    userType: 'ADMIN',
    permissions: ['READ', 'WRITE', 'DELETE'],
  };

  return (
    <div className="App p-4">
      <h1>Ficha del Usuario</h1>
      <UserCard user={mockUser} />
    </div>
  );
}

export default App;