import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Map } from './Map';

describe('Map', () => {

  it('renders without crashing', () => {
    const renderedComponent = shallow(<Map />, {disableLifecycleMethods: true})
    expect(renderedComponent).toBeDefined()
  });
})
