import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Splash.css';

export default class Splash extends Component {
  render() {
    return (
      <div id="splash-page">
        <div id="layer">
          <h1 className="logo">Historic Denver</h1>
          <Link to="/tour"><div id="tour-button">Enter Tour</div></Link>
        </div>
      </div>
    );
  }
}
