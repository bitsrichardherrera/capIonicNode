import React from 'react';
import './footer.scss';

const Footer: React.FC = () => {
  const developer ='Richard Herrera';
    return (
      <div className="container">
        <p>Desarrollado por <strong>{developer}.</strong></p>
      </div>
    );
  }
  export default Footer;