/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Splash from './Splash';

describe('Splash', () => {

  it('matches snapshot', () => {
    const renderedComponent = shallow(<Splash />)
    expect(renderedComponent).toMatchSnapshot()
  })
})
