import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <Link to='/'><h1>Historic Denver</h1></Link>
    </header>
  );
};

export default Header;
