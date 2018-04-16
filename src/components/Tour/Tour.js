import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Tour.css';
import Map from '../Map/Map';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { addDistrict } from '../../actions';
import { getDistrictBuildings } from '../../helpers/apiHelper.js';
import { Route,  withRouter } from 'react-router-dom';

export class Tour extends Component {

  componentDidMount = () => {
    this.fetchBuildings()
  }

  fetchBuildings = async () => {
    try {
      const district = await getDistrictBuildings(3)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tour));