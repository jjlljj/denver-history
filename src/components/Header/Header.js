import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <header className="site-header">
        <h1>Denver History</h1>
      </header>
    )
  }
}
