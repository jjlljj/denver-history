import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Splash.css';

export default class Splash extends Component {
  render() {
    return (
      <div id="splash-page">
        <div id="layer">
          <h1 class="logo">Historic Denver</h1>
          <Link to="/tour"><div id="tour-button">Enter Tour</div></Link>
        </div>
      </div>
    )
  }
}
