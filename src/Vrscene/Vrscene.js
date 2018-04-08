import React, { Component } from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react';

export default class Vrscene extends Component {
  render () {
    return (
      <div className="vr-wrap" id="a-target">
        <Scene>
          <Entity geometry={{primitive: 'box'}} material={{color: 'blue'}} position={{x: 0, y: 0, z: -5}} />
          <Entity light={{type: 'point'}}/>
          <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
          <Entity text={{value: 'Hello, WebVR!'}}/>

          <Entity geometry={{primitive: 'sphere'}} material={{color: 'teal'}} position={{x: -2, y: 2, z: -4}}/>
        </Scene>
    </div>
    );
  }
}
