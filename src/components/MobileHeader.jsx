import React from 'react';
import './MobileHeader.css'; 

// const MobileHeader: React.FC = () => {
//     return (
//       <div className="MobileHeader">
//         Mobile Header
//       </div>
//     );
//   };

function MobileHeader() {
  return (
    <div className="mobile-header">
      {/* Botón menú lateral */}
      <button className="menu-button">
        <svg aria-label="Abrir cajón lateral" role="img" focusable="false" className="ud-icon ud-icon-small ud-icon-color-neutral">
          <path d="M170-254.62q-12.75 0-21.37-8.63-8.63-8.62-8.63-21.38 0-12.75 8.63-21.37 8.62-8.61 21.37-8.61h620q12.75 0 21.37 8.62 8.63 8.63 8.63 21.39 0 12.75-8.63 21.37-8.62 8.61-21.37 8.61zM170-450q-12.75 0-21.37-8.63-8.63-8.63-8.63-21.38 0-12.76 8.63-21.37Q157.25-510 170-510h620q12.75 0 21.37 8.63 8.63 8.63 8.63 21.38 0 12.76-8.63 21.37Q802.75-450 790-450zm0-195.39q-12.75 0-21.37-8.62-8.63-8.63-8.63-21.39 0-12.75 8.63-21.37 8.62-8.61 21.37-8.61h620q12.75 0 21.37 8.63 8.63 8.62 8.63 21.38 0 12.75-8.63 21.37-8.62 8.61-21.37 8.61z"></path>
        </svg>
      </button>

      {/* Logo Udemy */}
      <div className="logo-container">
        <img
          src="https://frontends.udemycdn.com/frontends-marketplace-experience/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy Logo"
          className="udemy-logo"
        />
      </div>

      {/* Botones derecha */}
      <div className="right-buttons">
        <button className="search-button">
          <svg aria-label="Abrir búsqueda" role="img" focusable="false" id="mobile-header-open-search-icon" className="ud-icon ud-icon-small ud-icon-color-neutral">
            <path d="M380.77-335.39q-102.46 0-173.54-71.07-71.07-71.08-71.07-173.54t71.07-173.54q71.08-71.07 173.54-71.07t173.54 71.07q71.07 71.08 71.07 173.54 0 42.85-14.38 81.85-14.39 39-38.39 67.84l230.16 230.16q8.31 8.3 8.5 20.88t-8.5 21.27-21.08 8.69q-12.38 0-21.07-8.69L530.46-388.16q-30 24.77-69 38.77t-80.69 14m0-59.99q77.31 0 130.96-53.66 53.66-53.65 53.66-130.96t-53.66-130.96q-53.65-53.66-130.96-53.66t-130.96 53.66Q196.15-657.31 196.15-580t53.66 130.96q53.65 53.66 130.96 53.66"></path>
          </svg>
        </button>

        <button className="cart-button">
          <svg aria-label="Ir a la cesta" role="img" focusable="false" className="ud-icon ud-icon-small ud-icon-color-neutral">
            <path d="M286.15-97.69q-29.15 0-49.57-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58t49.57-20.42q29.16 0 49.58 20.42t20.42 49.58q0 29.15-20.42 49.57-20.42 20.43-49.58 20.43m387.7 0q-29.16 0-49.58-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58t49.58-20.42q29.15 0 49.57 20.42t20.42 49.58q0 29.15-20.42 49.57Q703-97.69 673.85-97.69M240.61-730 342-517.69h272.69q3.46 0 6.16-1.73 2.69-1.73 4.61-4.81l107.31-195q2.31-4.23.38-7.5-1.92-3.27-6.54-3.27zm-28.76-60h555.38q24.54 0 37.11 20.89 12.58 20.88 1.2 42.65L677.38-494.31q-9.84 17.31-26.03 26.96-16.2 9.66-35.5 9.66H324l-46.31 84.61q-3.08 4.62-.19 10 2.88 5.39 8.65 5.39h427.7q12.76 0 21.38 8.61 8.61 8.62 8.61 21.39t-8.61 21.38q-8.62 8.62-21.38 8.62h-427.7q-40 0-60.11-34.5-20.12-34.5-1.42-68.89l57.07-102.61L136.16-810H90q-12.77 0-21.38-8.62Q60-827.23 60-840t8.62-21.38Q77.23-870 90-870h61.15q10.24 0 19.08 5.42 8.85 5.43 13.46 15.27zM342-517.69h280z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MobileHeader;