/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';
import './Sidebar.css';
import { hideSidebar } from '../../actions';

export class Sidebar extends Component {

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
    const displayStatus = showSidebar ? 'sidebar-show' : 'sidebar-hidden';

    return (
      <section className={`sidebar ${displayStatus}`} >
        <div className="banner-img-wrap">
          <div 
            className="hide-sidebar-btn" 
            onClick={this.handleHideSidebar} >&#x276E;&#x276E;</div>
          <img 
            src={`http://denver-history.herokuapp.com/images/${photo_link}`} />
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
  showSidebar: func,
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
