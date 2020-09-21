import React from 'react';
import './header.scss';

const Home: React.FC = () => {
  const user = 'Juan';
    return (
      <div className="header">
        <div className="logo">
          <img src='./assets/Bigo.png'  width="50" height="30" className="user-img"/>
        </div>
        <div className="avatar">
          <img src='./assets/avatar.png'  width="20" height="20" className="user-img"/>
          <p>Hola, {user}</p>
        </div>
      </div>
    );
  }
  export default Home;