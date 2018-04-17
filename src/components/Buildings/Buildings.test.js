/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Buildings from './Buildings';

describe('Buildings', () => {

  it('matches snapshot', () => {
    const renderedComponent = shallow(<Buildings />)
    expect(renderedComponent).toMatchSnapshot()
  })
})
