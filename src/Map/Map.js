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

        //map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function(error, image) {
        //if (error) throw error;
        //map.addImage('cat', image);
        //map.addLayer({
            //"id": "points",
            //"type": "symbol",
            //"source": {
                //"type": "geojson",
                //"data": {
                    //"type": "FeatureCollection",
                    //"features": [{
                        //"type": "Feature",
                        //"geometry": {
                            //"type": "Point",
                            //"coordinates": [-105.0007, 39.7537]
                        //}
                    //}]
                //}
            //},
            //"layout": {
                //"icon-image": "cat",
                //"icon-size": 0.25
            //}
        //});
      //});
        

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
                        "coordinates": [-106.0007, 39.7537]
                    },
                    "properties": {
                        "title": "Mapbox DC",
                        "icon": "monument"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-105.0014, 39.7537]
                    },
                    "properties": {
                        "title": "Mapbox SF",
                        "icon": "harbor"
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });

          map.on('click', 'points', event => {
            const title = event.features[0].properties.title
            console.log(title)
          })


        //window.Threebox = new Threebox(map);
        //window.Threebox.setupDefaultLights();

        //var loader = new THREE.JSONLoader();
        //loader.load("models/boeing747-400-jw.json", function(geometry) {
            //geometry.rotateY((90/360)*2*Math.PI);
            //geometry.rotateX((90/360)*2*Math.PI);
            //var material = new THREE.MeshPhongMaterial( {color: 0xaaaaff, side: THREE.DoubleSide}); 
            //var aircraft = new THREE.Mesh( geometry, material );
            //var planePosition = [-105.0007, 39.7537, 100];
            //// Add the model to the threebox scenegraph at a specific geographic coordinate
            //Threebox.addAtCoordinate(aircraft, planePosition, {scaleToLatitude: true, preScale: 2});
        //});

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
