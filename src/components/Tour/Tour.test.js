/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Tour } from './Tour';
jest.mock('../../../node_modules/mapbox-gl/dist/mapbox-gl', () => () => ({ Map: () => ({}) }));
jest.mock('../../../node_modules/threebox/', () => () => ({ threebox: jest.fn() }));

describe('Tour', () => {

  it('matches snapshot', () => {
    const renderedComponent = shallow(<Tour />)
    expect(renderedComponent).toMatchSnapshot()
  })
})
