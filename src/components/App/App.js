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
      district: []
    };
  }

  componentDidMount = () => {
    this.fetchBuildings()
  }

  fetchBuildings = async () => {
    try {
      const district = await getDistrictBuildings(30)
      this.setState({ district });
    } catch (error) {
      console.log(error);
    };
  }

  render() {
    const { district } = this.state;

    return (
      <div>
        <Header />
        <section className="main-wrap">
          <Sidebar />
          { district.length && <Map geoJSON={ district } /> }
        </section>
    </div>
    );
  }
}

export default App;
