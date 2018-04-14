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

      // STATION RENDER -> USES COLLADA LOADER -> NOT WORKING
      //var loader = new ColladaLoader()
        //loader.load("union-station/union-station.dae", function(geometry) {
          //console.log(geometry.scene)

            //geometry.scene.rotateY((90/360)*2*Math.PI);
            //geometry.scene.rotateX((90/360)*2*Math.PI);
          
            //var material = new THREE.MeshPhongMaterial();
            //material.emissive = new THREE.Color(0xffffff);
            //material.color = new THREE.Color(0x0a0a0a);
            //material.shading = THREE.FlatShading;
            //material.side = THREE.DoubleSide;
          
            ////var material = new THREE.MeshPhongMaterial( {color: 0xaaaaff}); 
            //var geom = new THREE.Mesh( geometry.scene, material );
            //var position = [-105.0007, 39.7537, 100];

            //console.log(geom)
            //// Add the model to the threebox scenegraph at a specific geographic coordinate
          //threebox.addAtCoordinate(geom, position, {scaleToLatitude: true, preScale: 2});
        //});
      // Instantiate a loader
      
      // GLTF LOADER
      var loader = new GLTFLoader();

      loader.load("models/unionStation.gltf", gltf => {
        const building = gltf.scene
        console.log(building)
        //building.rotateY((90/360)*2*Math.PI);
        //building.rotateX((90/360)*2*Math.PI);
        // var material = new THREE.MeshPhongMaterial( {color: 0xaaaaff, side: THREE.DoubleSide}); 
        var position = [-105.0007, 39.7537, 100];

        //const building = new THREE.Mesh( geometry, material )
        threebox.addAtCoordinate(building, position, {scaleToLatitude: true, preScale: 2});
      })

      // PLANE RENDER -> USES JSON LOADER
      // var loader = new THREE.JSONLoader();
      //  loader.load("models/boeing747-400-jw.json", function(geometry) {
          //console.log(geometry)
            //geometry.rotateY((90/360)*2*Math.PI);
            //geometry.rotateX((90/360)*2*Math.PI);
            //var material = new THREE.MeshPhongMaterial( {color: 0xaaaaff, side: THREE.DoubleSide}); 
            //var aircraft = new THREE.Mesh( geometry, material );
            //var planePosition = [-105.0007, 39.7537, 100];
          //console.log(aircraft)
            // Add the model to the threebox scenegraph at a specific geographic coordinate
          //threebox.addAtCoordinate(aircraft, planePosition, {scaleToLatitude: true, preScale: 2});
      // });
      
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
