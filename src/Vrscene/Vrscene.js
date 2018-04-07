import React, { Component } from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react';
import Map from '../Map/Map'

export default class Vrscene extends Component {
  render () {
    return (
      <div className="vr-wrap">
        <Scene embedded>
          <Entity geometry={{primitive: 'box'}} material={{color: 'blue', src:''}} position={{x: 0, y: 0, z: -5}} />
          <Entity light={{type: 'point'}}/>
          <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
          <Entity text={{value: 'Hello, WebVR!'}}/>

          <Entity geometry={{primitive: 'sphere'}} material={{src:''}} position={{x: -2, y: 2, z: -4}}/>
        </Scene>
    </div>
    );
  }
}
