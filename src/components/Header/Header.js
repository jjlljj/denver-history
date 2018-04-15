import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

export class Header extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        i am Header
      </div>
    )
  }
}

export default connect(null, null)(Header)
