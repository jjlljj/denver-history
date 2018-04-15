import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import  { MB_TOKEN } from '../.key' ;
import { Threebox } from 'threebox';
import ColladaLoader from 'three-collada-loader';
import * as THREE from 'three';
import { mapParams, threedParams, formatGeoJSON } from '../mapHelper/mapHelper'
import GLTFLoader from 'three-gltf-loader' 

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

        const threebox = new Threebox(map);
        threebox.setupDefaultLights();

      // GLTF LOADER
      var loader = new GLTFLoader();

      loader.load("models/unionStation.gltf", gltf => {
        const bufferGeometry = gltf.scene.children[0].children[1].children[0].geometry
        
        const geometry = new THREE.Geometry().fromBufferGeometry( bufferGeometry )

        geometry.rotateY((90/360)*4*Math.PI);
        geometry.rotateX((90/360)*2*Math.PI);
        console.log(geometry)

        var material = new THREE.MeshPhongMaterial( {color: 0xaaaaff, side: THREE.DoubleSide}); 
        var position = [-105.00006, 39.75317, 0];

        const build = new THREE.Mesh( geometry, material )
        threebox.addAtCoordinate(build, position, {scaleToLatitude: true, preScale: 1});
      })

    })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.map) {
      return false
    }
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
