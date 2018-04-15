import React, { Component } from 'react';
import './App.css';
import Map from '../Map/Map';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { getDistrictBuildings } from '../../helpers/apiHelper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      geoJSON: []
    };
  }

  componentDidMount = () => {
    this.fetchBuildings()
  }

  fetchBuildings = async () => {
    try {
      const geoJSON = await getDistrictBuildings(30)
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
        <section className="main-wrap">
          <Sidebar />
          { geoJSON.length && <Map geoJSON={ geoJSON } /> }
        </section>
    </div>
    );
  }
}

export default App;
