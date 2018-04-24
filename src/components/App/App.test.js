/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
jest.mock('../../../node_modules/mapbox-gl/dist/mapbox-gl', () => () => ({ Map: () => ({}) }));
jest.mock('../../../node_modules/threebox/', () => () => ({ threebox: jest.fn() }));
jest.mock('../../.key.js', () => () => ({MB_TOKEN: 'fakekey'}));

describe('App', () => {

  it('matches snapshot', () => {
    const renderedComponent = shallow(<App />)
    expect(renderedComponent).toMatchSnapshot()
  })
})
