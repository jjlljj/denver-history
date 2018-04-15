import React, { Component } from 'react';
import './App.css';
import Map from '../Map/Map';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      geoJSON: []
    };
  }

  handleEvent = event => {
   console.log(event);
  }

  componentDidMount = async () => {
    try {
      const response = await fetch('https://denver-history.herokuapp.com/api/v1/districts/30/buildings/map');

      const geoJSON = await response.json();
      this.setState({ geoJSON });

    } catch (error) {
      console.log(error);
    };
  }

  render() {
    const { geoJSON } = this.state;

    return (
      <div>
        <Header />
        <section className="sidebar-map-wrap">
          <Sidebar />
          { geoJSON.length && <Map geoJSON={ geoJSON } /> }

        </section>
    </div>
    );
  }
}

export default App;
