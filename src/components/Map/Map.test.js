/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Map } from './Map';
jest.mock('../../../node_modules/mapbox-gl/dist/mapbox-gl', () => () => ({ Map: () => ({}) }));
jest.mock('../../../node_modules/threebox/', () => () => ({ threebox: jest.fn() }));

describe('Map', () => {
  window.URL = { createObjectURL: jest.fn() }

  it('renders without crashing', () => {
    const renderedComponent = shallow(<Map />, {disableLifecycleMethods: true})
    expect(renderedComponent).toBeDefined()
  });

  it('should not pass', () => {
    expect(false).toEqual(true)
  })
})
