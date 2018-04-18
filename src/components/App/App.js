import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Splash from '../Splash/Splash';
import Tour from '../Tour/Tour';

export class App extends Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={ Splash } />
        <Route exact path='/tour' component={ Tour } />
      </div>
    );
  }
}

export default App;
