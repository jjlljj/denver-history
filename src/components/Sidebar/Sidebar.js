import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Sidebar.css';

export class Sidebar extends Component {

  render() {
    const { ldmk_name, year_built, address_line1, photo_link, description } = this.props.building
    const { showSidebar } = this.props
    const displayStatus = showSidebar ? '' : 'sidebar-hidden'

    return (
      <section className={`sidebar ${displayStatus}`} >
        <div className="banner-img-wrap">
          <img src={`http://denver-history.herokuapp.com/images/${photo_link}`} />
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
    )
  }
}

const mapStateToProps = ({ building, showSidebar }) => ({
  building,
  showSidebar
})

export default connect(mapStateToProps, null)(Sidebar)
