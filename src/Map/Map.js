import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import mapboxgl from 'mapbox-gl'
import  { MB_TOKEN } from '../.key' 
  
export default class Map extends Component {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  }

    
  componentDidMount() {
    mapboxgl.accessToken = MB_TOKEN
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%'
    }
      
    return (
      <div style={style} ref={el => this.mapContainer = el} ></div>
    )
  }
}
