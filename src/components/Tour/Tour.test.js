/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Tour } from './Tour';
jest.mock('../../../node_modules/mapbox-gl/dist/mapbox-gl', () => () => ({ Map: () => ({}) }));
jest.mock('../../../node_modules/threebox/', () => () => ({ threebox: jest.fn() }));
jest.mock('../../actions/index', () => () => ({ addDistrict: jest.fn() }));
jest.mock('../../.key.js', () => () => ({ MAPBOX_TOKEN: 'faketoken' }));
import { mockDistrict } from '../../__mocks__/mockdata'

describe('Tour', () => {
  let renderedComponent
  let district
  let addDistrict
  let showLoading

  beforeEach(() => {
    district = []
    addDistrict = jest.fn()
    showLoading = true
    renderedComponent = shallow(<Tour district={district} showLoading={ showLoading } addDistrict={addDistrict}/>, { disableLifecycleMethods: true })

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockDistrict)
    }))
  })

  it('matches snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('fetchBuildings should call the fetch in getDistrictBuildings', () => {
    expect(window.fetch).not.toHaveBeenCalled()

    renderedComponent.instance().fetchBuildings()

    expect(window.fetch).toHaveBeenCalled()
  })

  it('fetchBuildings should call the action addDistrict', async () => {
    expect(addDistrict).not.toHaveBeenCalled()

    const called = await renderedComponent.instance().fetchBuildings()

    called && expect(addDistrict).toHaveBeenCalled()
  })

})
