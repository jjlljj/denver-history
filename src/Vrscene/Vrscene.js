import React, { Component } from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react';

export default class VRScene extends Component {
  render () {
    return (
      <div className="vr-wrap">
      <Scene>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity text={{value: 'Hello, WebVR!'}}/>

        <Entity geometry={{primitive: 'sphere'}} material={{color: 'blue'}} position={{x: 5, y: 2, z: -5}}/>
      </Scene>
    </div>
    );
  }
}
