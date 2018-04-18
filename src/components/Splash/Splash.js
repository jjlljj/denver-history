import React from 'react';
import { Link } from 'react-router-dom';
import './Splash.css';

const Splash = () => {
  return (
    <div id="splash-page">
      <div id="layer">
        <h1 className="logo">Historic Denver</h1>
        <Link to="/tour"><div id="tour-button">Enter Tour</div></Link>
      </div>
    </div>
  );
};

export default Splash;
