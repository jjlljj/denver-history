import React, { Component } from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react';

export default class Vrscene extends Component {
  constructor (props, context) {
    super(props, context)

  }

  handleBox = () => {
    console.log('Booo')
  }

  render () {
    return (
      <div className="vr-wrap" id="a-target">
        <Scene>
          <Entity 
            cursor={{fuse: true, fuseTimeout: 500}}
            position={{x: 0, y: 0, z:-4}}
            geometry={{primitive: 'ring', radiusInner: 0.02, radiusOuter: 0.03}}
            material={{color: 'black', shader: 'flat'}}/>
          <Entity geometry={{primitive: 'box'}} material={{color: 'blue'}} position={{x: 0, y: 0, z: -5}} events={{ click: this.handleBox }}/>
          <Entity light={{type: 'point'}}/>
          <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
          <Entity text={{value: 'Hello, WebVR!'}}/>

          <Entity geometry={{primitive: 'sphere'}} material={{color: 'teal'}} position={{x: -2, y: 2, z: -4}}/>
        </Scene>
    </div>
    );
  }
}
