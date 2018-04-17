/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from './Sidebar';
import { mockBuilding } from '../../__mocks__/mockData';

describe('Sidebar', () => {
  let renderedComponent
  let building
  let hideSidebar

  beforeEach(() => {
    building = mockBuilding
    hideSidebar = jest.fn()
    renderedComponent = shallow(<Sidebar building={ building } showSidebar={true} hideSidebar={ hideSidebar }/>)
  })

  it('Should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  });

  it('Should match snapshot when hidden', () => {
    renderedComponent = shallow(<Sidebar building={ building } showSidebar={false} hideSidebar={ hideSidebar }/>)

    expect(renderedComponent).toMatchSnapshot()
  })

  it('handleHideSidebar should call hideSidebar', () => {
    expect(hideSidebar).not.toHaveBeenCalled()

    renderedComponent.instance().handleHideSidebar()

    expect(hideSidebar).toHaveBeenCalled()
  })
})
