import React, { Component } from 'react';
import './App.css';
import Map from '../Map/Map'

class App extends Component {

  handleEvent = event => {
   console.log(event) 
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
