import React, { Component } from 'react';
import './App.css';
import Map from '../Map/Map'

class App extends Component {
  constructor() {
    super()
    this.state = {
      geoJSON: []
    }
  }

  handleEvent = event => {
   console.log(event) 
  }

  componentDidMount() {
    // call the db, build array of geoJSON objects for map render
    // store array in state, pass that state to Map
  }

  render() {
    return (
      <div>
        <Map />
      </div>
    );
  }
}

export default App;
