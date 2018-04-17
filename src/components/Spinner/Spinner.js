import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

export default class Spinner extends Component {

  render() {
    return (
      <div>
        <figure className="icon-cards">
          <div className="icon-cards__content">
            <div className="icon-cards__item"></div>
            <div className="icon-cards__item"></div>
            <div className="icon-cards__item"></div>
          </div>
        </figure>
      </div>
    )
  }
}