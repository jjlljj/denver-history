/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Map } from './Map';
jest.mock('../../../node_modules/mapbox-gl/dist/mapbox-gl', () => () => ({ Map: () => ({}) }));
jest.mock('../../../node_modules/threebox/', () => () => ({ threebox: jest.fn() }));
jest.mock('./../../.key', () => () => ({  MAPBOX_TOKEN: 'faketoken' }));
import { mockBuilding } from '../../__mocks__/mockData';

describe('Map', () => {
  let addBuilding
  let showSidebar
  let renderedComponent

  beforeEach(() => {
    addBuilding = jest.fn()
    showSidebar = jest.fn()
    renderedComponent = shallow(<Map showSidebar={ showSidebar } addBuilding={ addBuilding }/>, { disableLifecycleMethods: true })

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockBuilding)
    }))
  })

  it('Should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  });

  it('handleBuildingClick should call the fetch in getBuilding', () => {
    const expected = "https://denver-history.herokuapp.com/api/v1/buildings/30"
    expect(window.fetch).not.toHaveBeenCalled

    renderedComponent.instance().handleBuildingClick(30)

    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('handleBuildingClick should call the action addBuilding', async () => {
    expect(addBuilding).not.toHaveBeenCalled

    const called = await renderedComponent.instance().handleBuildingClick(30)

    expect(addBuilding).toHaveBeenCalled()
  })

  it('handleBuildingClick should call the action addBuilding', async () => {
    expect(addBuilding).not.toHaveBeenCalled

    const called = await renderedComponent.instance().handleBuildingClick(30)

    expect(addBuilding).toHaveBeenCalled()
  })

  it('handleBuildingClick should call the action showSidebar', async () => {
    expect(showSidebar).not.toHaveBeenCalled

    const called = await renderedComponent.instance().handleBuildingClick(30)

    expect(showSidebar).toHaveBeenCalled()
  })
})
