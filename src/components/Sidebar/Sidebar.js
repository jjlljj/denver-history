import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Sidebar.css';

export class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        i am sidebar
      </div>
    )
  }
}

export default connect(null, null)(Sidebar)
