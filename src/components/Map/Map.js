import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Map.css';

import mapboxgl from 'mapbox-gl';
import  { MB_TOKEN } from '../../.key' ;

import { mapParams, renderMapElements } from '../../helpers/mapHelper';
import { getBuilding } from '../../helpers/apiHelper'; 
import { addBuilding, showSidebar } from '../../actions';

export class Map extends Component {
    
  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    const { geoJSON } = this.props; 
    const { handleBuildingClick } = this

    mapboxgl.accessToken = MB_TOKEN;
    this.map = new mapboxgl.Map(mapParams(this.mapContainer));
    this.map.addControl(new mapboxgl.ScaleControl({ maxWidth: 80, unit: 'imperial' }));
    this.map.addControl(new mapboxgl.NavigationControl());

    renderMapElements(this.map, geoJSON, handleBuildingClick)
  }

  handleBuildingClick = async (buildingId) => {
    try {
      const response = await getBuilding(buildingId)

      this.props.addBuilding(response[0])
      this.props.showSidebar()
    } catch (error) {
      console.log(error)
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.map) {
      return false;
    };
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
      
    return (
      <div className="map-wrap">
        <div id="map" ref={el => this.mapContainer = el} ></div>
      </div>
    )
  };
}

const mapDispatchToProps = dispatch => ({
  addBuilding: building => dispatch(addBuilding(building)),
  showSidebar: () => dispatch(showSidebar())
})

export default connect(null, mapDispatchToProps)(Map)
