import React from 'react';
import { Card, Badge, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Función para determinar el color del Badge según el tipo de usuario
const getVariantByUserType = (userType) => {
  switch (userType) {
    case 'ADMIN':
      return 'primary';
    case 'EDITOR':
      return 'warning';
    case 'VIEWER':
      return 'secondary';
    default:
      return 'dark';
  }
};

const UserCard = ({ user }) => {
  return (
    <Card className="shadow-sm mb-4" style={{ maxWidth: '500px', margin: 'auto' }}>
      <Card.Body>
        <Card.Title>{`${user.name} ${user.lastName}`}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
      </Card.Body>

      <ListGroup variant="flush">
        <ListGroup.Item>ID: <strong>{user.id}</strong></ListGroup.Item>
        <ListGroup.Item>
          Tipo de Usuario:{' '}
          <Badge bg={getVariantByUserType(user.userType)}>{user.userType}</Badge>
        </ListGroup.Item>
        <ListGroup.Item>
          Permisos:
          <ul className="mb-0 ps-3">
            {user.permissions.map((perm, index) => (
              <li key={index}>{perm}</li>
            ))}
          </ul>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

// Validación de las props con PropTypes
UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    userType: PropTypes.string.isRequired,
    permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default UserCard;

// import React from 'react';
// import { Card, Badge, ListGroup } from 'react-bootstrap';

// // Define PropTypes
// import PropTypes from 'prop-types';

// // Definición del componente
// const getVariantByUserType = (userType) => {
//   switch (userType) {
//     case 'ADMIN':
//       return 'primary';
//     case 'EDITOR':
//       return 'warning';
//     case 'VIEWER':
//       return 'secondary';
//     default:
//       return 'dark';
//   }
// };

// const UserCard = ({ user }) => {
//   return (
//     <Card className="shadow-sm mb-4" style={{ maxWidth: '500px', margin: 'auto' }}>
//       <Card.Body>
//         <Card.Title>{`${user.name} ${user.lastName}`}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
//       </Card.Body>

//       <ListGroup variant="flush">
//         <ListGroup.Item>ID: <strong>{user.id}</strong></ListGroup.Item>
//         <ListGroup.Item>
//           Tipo de Usuario:{' '}
//           <Badge bg={getVariantByUserType(user.userType)}>{user.userType}</Badge>
//         </ListGroup.Item>
//         <ListGroup.Item>
//           Permisos:
//           <ul className="mb-0 ps-3">
//             {user.permissions.map((perm, index) => (
//               <li key={index}>{perm}</li>
//             ))}
//           </ul>
//         </ListGroup.Item>
//       </ListGroup>
//     </Card>
//   );
// };

// // Definir PropTypes para validación
// UserCard.propTypes = {
//   user: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     name: PropTypes.string.isRequired,
//     lastName: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     userType: PropTypes.string.isRequired,
//     permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
//   }).isRequired,
// };



// export default UserCard;



// // import React from 'react';
// // import { Card, Badge, ListGroup } from 'react-bootstrap';
// // import { User } from '../types/User';
// // import './NavBar.css'; // Opcional

// // // Define the expected prop types using PropTypes
// // import PropTypes from 'prop-types';

// // const getVariantByUserType = (userType) => {
// //   switch (userType) {
// //     case 'ADMIN':
// //       return 'primary';
// //     case 'EDITOR':
// //       return 'warning';
// //     case 'VIEWER':
// //       return 'secondary';
// //     default:
// //       return 'dark';
// //   }
// // };

// // const UserCard: React.FC<UserCardProps> = ({ user }) => {
// // const UserCard = ({ user }) => {
// //     <Card className="shadow-sm mb-4" style={{ maxWidth: '500px', margin: 'auto' }}>
// //       <Card.Body>
// //         <Card.Title>{`${user.name} ${user.lastName}`}</Card.Title>
// //         <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
// //       </Card.Body>

// //       <ListGroup variant="flush">
// //         <ListGroup.Item>ID: <strong>{user.id}</strong></ListGroup.Item>
// //         <ListGroup.Item>
// //           Tipo de Usuario:{' '}
// //           <Badge bg={getVariantByUserType(user.userType)}>{user.userType}</Badge>
// //         </ListGroup.Item>
// //         <ListGroup.Item>
// //           Permisos:
// //           <ul className="mb-0 ps-3">
// //             {user.permissions.map((perm, index) => (
// //               <li key={index}>{perm}</li>
// //             ))}
// //           </ul>
// //         </ListGroup.Item>
// //       </ListGroup>
// //     </Card>
// //   );
// // };

// // export default UserCard; {
// //   user: PropTypes.shape({
// //     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// //     name: PropTypes.string.isRequired,
// //     lastName: PropTypes.string.isRequired,
// //     email: PropTypes.string.isRequired,
// //     userType: PropTypes.string.isRequired,
// //     permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
// //   }).isRequired,
// // };

// // export default UserCard;

