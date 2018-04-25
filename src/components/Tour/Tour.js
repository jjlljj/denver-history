import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool, arrayOf, object, func } from 'prop-types';
import './Tour.css';
import Map from '../Map/Map';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Spinner from '../Spinner/Spinner';
import { addDistrict } from '../../actions';
import { getDistrictBuildings } from '../../helpers/apiHelper.js';
import { withRouter } from 'react-router-dom';

export class Tour extends Component {

  componentDidMount = () => {
    this.fetchBuildings();
  }

  fetchBuildings = async () => {
    try {
      const district = await getDistrictBuildings(57);
      this.props.addDistrict(district);
    } catch (error) {
      console.log(error); //eslint-disable-line
    }
  }

  renderSpinner = () => {
    const { showLoading } = this.props;

    if ( showLoading ) {
      return <Spinner />;
    }
  }

  renderMap = () => {
    const { district } = this.props;

    if (district.length) {
      return <Map geoJSON={ district } />;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <section className="main-wrap">
          <Sidebar />
          { this.renderSpinner() }
          { this.renderMap() }
        </section>
      </div>
    );
  }
}

Tour.propTypes = {
  addDistrict: func,
  showLoading: bool,
  district: arrayOf(object)
};

const mapStateToProps = ({ showLoading, district }) => ({
  showLoading,
  district
});

const mapDispatchToProps = dispatch => ({
  addDistrict: district => dispatch(addDistrict(district))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tour));
