/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {

  it('Should match snapshot', () => {
    const renderedComponent = shallow(<Header />)
    expect(renderedComponent).toMatchSnapshot()
  });
})
