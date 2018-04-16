import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Map from '../Map/Map';
import Splash from '../Splash/Splash';
import Tour from '../Tour/Tour';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { addDistrict } from '../../actions';
import { getDistrictBuildings } from '../../helpers/apiHelper.js';
import { Route,  withRouter } from 'react-router-dom';

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
