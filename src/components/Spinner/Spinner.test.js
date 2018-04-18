/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner', () => {

  it('matches snapshot', () => {
    const renderedComponent = shallow(<Spinner />)
    expect(renderedComponent).toMatchSnapshot()
  })
})
