/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {

  it('Should match snapshot', () => {
    const renderedComponent = shallow(<Sidebar />)
    //expect(renderedComponent).toMatchSnapshot()
  });

  it('Should not pass', () => {
    expect(false).toEqual(true)
  })
})
