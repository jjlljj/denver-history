import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Map.css';

import mapboxgl from 'mapbox-gl';
import { Threebox } from 'threebox';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import  { MB_TOKEN } from '../../.key' ;

import { mapParams, threedParams, formatGeoJSON } from '../../helpers/mapHelper';
import { getBuilding } from '../../helpers/apiHelper'; 
import { addBuilding } from '../../actions';

export class Map extends Component {
    
  componentDidMount() {
    const { geoJSON } = this.props; 
    const { handleBuildingClick } = this

    mapboxgl.accessToken = MB_TOKEN;
    this.map = new mapboxgl.Map(mapParams(this.mapContainer));
    
    this.map.addControl(new mapboxgl.ScaleControl({ maxWidth: 80, unit: 'imperial' }));
    this.map.addControl(new mapboxgl.NavigationControl());

    const map = this.map;
    const MapComponent = this;

    map.on('load', function() {
      const layers = map.getStyle().layers;
      let labelLayerId;

      for (let i = 0; i < layers.length; i++) {
          if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
              break;
          };
      }

      map.addLayer(threedParams, labelLayerId);
      map.addLayer(formatGeoJSON(geoJSON));
        
      map.on('click', 'points', event => {
        const { id } = event.features[0].properties;
        console.log(id)
        handleBuildingClick(id);
      });

        const threebox = new Threebox(map);
        threebox.setupDefaultLights();

    
      // GLTF LOADER
      const loader = new GLTFLoader();

      loader.load("models/unionStation.gltf", gltf => {
        const bufferGeometry = gltf.scene.children[0].children[1].children[0].geometry;
        
        const geometry = new THREE.Geometry().fromBufferGeometry( bufferGeometry );

        geometry.rotateY((90/360)*4*Math.PI);
        geometry.rotateX((90/360)*2*Math.PI);
        console.log(geometry);

        const material = new THREE.MeshPhongMaterial( {color: 0xaaaaff, side: THREE.DoubleSide}); 
        const position = [-105.00006, 39.75317, 0];

        const build = new THREE.Mesh( geometry, material );
        threebox.addAtCoordinate(build, position, {scaleToLatitude: true, preScale: 1});
      });

    });
  }

  handleBuildingClick = buildingId => {
    console.log(buildingId)

    //try {
      //const response = await getBuilding(buildingId)
    //const { id } = this.props.building
    // if (id !== buildingId) 
    //this.props.addBuilding(buildingId)
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
  addBuilding: building => dispatch(addBuilding(building))
})

export default connect(null, mapDispatchToProps)(Map)
