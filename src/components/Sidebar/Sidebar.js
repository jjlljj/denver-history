/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, func, bool } from 'prop-types';
import './Sidebar.css';
import { hideSidebar } from '../../actions';

export class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photo: ''
    }
  }

  handlePhotoSlider = event => {
    const { name } = event.target;

    console.log(name)
  }

  handleHideSidebar = () => {
    this.props.hideSidebar();
  }

  render() {
    const { 
      ldmk_name, 
      year_built, 
      address_line1, 
      photo_link, 
      description 
    } = this.props.building;
    const { showSidebar } = this.props;
    const { photo } = this.state
    const displayStatus = showSidebar ? 'sidebar-show' : 'sidebar-hidden';

    return (
      <section className={`sidebar ${displayStatus}`} >
        <div className="banner-img-wrap">
          <div 
            className="hide-sidebar-btn" 
            onClick={this.handleHideSidebar} >&#x276E;&#x276E;</div>
          <div
            name="left"
            className="slider-btn slider-btn-left"
            onClick={this.handlePhotoSlider}>&#x276E;</div>
          <div
            name="right"
            className="slider-btn slider-btn-right"
            onClick={this.handlePhotoSlider}>&#x276F;</div>
          <div 
            className="banner-img"
            style={ 
              {backgroundImage: `url(http://denver-history.herokuapp.com/images/${photo || photo_link})`} 
            }></div>
        </div>
        <div className="content-wrap">
          <h2>{ ldmk_name }</h2>
          <ul>
            <li>Built: { year_built }</li>
            <li>Address: { address_line1 }</li>
          </ul>
          <p>{ description }</p>
        </div>
      </section>
    );
  }
}

Sidebar.propTypes = {
  hideSidebar: func,
  showSidebar: bool,
  building: object
};

const mapStateToProps = ({ building, showSidebar }) => ({
  building,
  showSidebar
});

const mapDispatchToProps = (dispatch) => ({
  hideSidebar: () => dispatch(hideSidebar())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
