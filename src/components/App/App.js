import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Map from '../Map/Map';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { addDistrict } from '../../actions'
import { getDistrictBuildings } from '../../helpers/apiHelper.js';

export class App extends Component {

  componentDidMount = () => {
    this.fetchBuildings()
  }

  fetchBuildings = async () => {
    try {
      const district = await getDistrictBuildings(30)
      this.props.addDistrict(district);
    } catch (error) {
      console.log(error);
    };
  }

  render() {
    const { district } = this.props;

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

const mapStateToProps = ({ district }) => ({
  district
})

const mapDispatchToProps = dispatch => ({
  addDistrict: district => dispatch(addDistrict(district))
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
