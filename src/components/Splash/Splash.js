import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Buildings from '../Buildings/Buildings';
import './Splash.css';

export default class Splash extends Component {
  render() {
    return (
      <div id="splash-page">
        <div id="layer">
          <h1 class="logo">Historic Denver SPLASH</h1>
          <Buildings />
        </div>
      </div>
    )
  }
}