import React, { Component } from 'react';
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
        <h1>Historic Denver</h1>
      </header>
    );
  }
}
