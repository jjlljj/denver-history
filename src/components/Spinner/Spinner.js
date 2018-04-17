import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

export default class Spinner extends Component {

  render() {
    return (
      <div>
        <figure class="icon-cards">
          <div class="icon-cards__content">
            <div class="icon-cards__item"></div>
            <div class="icon-cards__item"></div>
            <div class="icon-cards__item"></div>
          </div>
        </figure>
      </div>
    )
  }
}
