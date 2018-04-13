import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import  { MB_TOKEN } from '../.key' 
import { Threebox } from 'threebox'
//import * as THREE from 'three';
import { mapParams, threedParams, formatGeoJSON } from '../mapHelper/mapHelper'
  
export default class Map extends Component {
    
  componentDidMount() {
    const { geoJSON } = this.props; 

    mapboxgl.accessToken = MB_TOKEN
    this.map = new mapboxgl.Map(mapParams(this.mapContainer))
    
    this.map.addControl(new mapboxgl.ScaleControl({ maxWidth: 80, unit: 'imperial' }));
    this.map.addControl(new mapboxgl.NavigationControl())

    const map = this.map;
    const MapComponent = this;

    map.on('load', function() {
      const layers = map.getStyle().layers;
      let labelLayerId;

      for (let i = 0; i < layers.length; i++) {
          if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
              break;
          }
      }

      map.addLayer(threedParams, labelLayerId);
      map.addLayer(formatGeoJSON(geoJSON));
        
      map.on('click', 'points', event => {
        const title = event.features[0].properties.title
        console.log(title)
      })
    })
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
      <div style={style} ref={el => this.mapContainer = el} >
      </div>
    )
  }
}
