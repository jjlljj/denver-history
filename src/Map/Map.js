import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import  { MB_TOKEN } from '../.key' 
import { Threebox } from 'threebox'
import * as THREE from 'three';
  
export default class Map extends Component {
    
  componentDidMount() {
    mapboxgl.accessToken = MB_TOKEN
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-104.9987887, 39.7508047],
      zoom: 16,
      bearing: -17.6,
      pitch: 45
    })
    
    this.map.addControl(new mapboxgl.ScaleControl({
     maxWidth: 80,
     unit: 'imperial'
    }));

    this.map.addControl(new mapboxgl.NavigationControl())

    const map = this.map;
    const MapComponent = this;
    map.on('load', function() {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addLayer({
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
          'fill-extrusion-color': '#aaa',

          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          'fill-extrusion-height': [
              "interpolate", ["linear"], ["zoom"],
              15, 0,
              15.05, ["get", "height"]
          ],
          'fill-extrusion-base': [
              "interpolate", ["linear"], ["zoom"],
              15, 0,
              15.05, ["get", "min_height"]
          ],
          'fill-extrusion-opacity': .6
      }
    }, labelLayerId);

    const geoJSON = {
      "id": "points",
      "type": "symbol",
      "source": {
          "type": "geojson",
          "data": {
              "type": "FeatureCollection",
              "features": MapComponent.formatPoints()
          }
      },
      "layout": {
          "icon-image": "{icon}-15",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
      }
    }

    map.addLayer(geoJSON);
        
      // RENDER GEOJSON POINTS
      // render points in 'features' array based on coordinates: []
      // can add data to properties: {} 
      //    --> this is what we can add our data or a query id elsewhere to dispatch actions
      //    --> have access to points properties based on event
      //    --> can use ID or some datapoint stored here to dispatch display actions elsewhere

      //MAP EVENT LISTENER
      //event listener for dispatching actions based interaction with map geoJSON points
      //can dispatch external events, or render elements within mapbox frame
      //bubbles to clicked point based on specified common point 'id' (i.e. 'points' on ln 99)
      //has access to the features/properties of the point 

    map.on('click', 'points', event => {
      const title = event.features[0].properties.title
      console.log(title)
    })

    })
  }

  formatPoints = () => {
    const { geoJSON } = this.props; 

    return geoJSON.map(({ lat, lon, id, ldmk_name, aka_name, year_built, ldmk_num }) => {
      return { 
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [ lon, lat ] 
        }, 
         "properties": {
            "title": aka_name || ldmk_name,
            "icon": "monument"
        }
      }
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
