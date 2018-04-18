import React, { Component } from 'react';
import './Spinner.css';

export default class Spinner extends Component {

  render() {
    return (
      <div className="spinner-animation">
        <figure className="icon-cards">
          <div className="icon-cards__content">
            <div className="icon-cards__item"></div>
            <div className="icon-cards__item"></div>
            <div className="icon-cards__item"></div>
          </div>
        </figure>
      </div>
    );
  }
}
