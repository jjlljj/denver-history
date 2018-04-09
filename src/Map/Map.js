import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import mapboxgl from 'mapbox-gl'
import  { MB_TOKEN } from '../.key' 
import Vrscene from '../Vrscene/Vrscene'
  
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
    const map = this.map
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

        map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function(error, image) {
        if (error) throw error;
        map.addImage('cat', image);
        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-105.0007, 39.7537]
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "cat",
                "icon-size": 0.25
            }
        });
    });
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
