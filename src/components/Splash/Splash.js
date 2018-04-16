import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Buildings from '../Buildings/Buildings';
// import './Splash.css';

export default class Splash extends Component {
  render() {
    return (
      <div>
        <h1>Historic Denver SPLASH</h1>
        <Buildings />
      </div>
    )
  }
}