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

  componentDidMount = async () => {
    try {
      const response = fetch('https://denver-history.herokuapp.com/api/v1/districts/30/buildings/map');
      const geoJSON = response.json();
      this.setState({ geoJSON })

    } catch (error) {
      console.log(error)
    }
    // call the db, build array of geoJSON objects for map render
    // store array in state, pass that state to Map
  }

  render() {
    const { geoJSON } = this.state;

    return (
      <div>
        { geoJSON && <Map geoJSON={ geoJSON } /> }
      </div>
    );
  }
}

export default App;
