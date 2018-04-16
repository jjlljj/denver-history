/* eslint-disable */
import { buildingReducer } from './buildingReducer';
import * as actions from '../actions/index';
import { mockBuilding } from '../__mocks__/mockData';

describe('buildingReducer', () => {

  it('should return the default state', () => {
    expect(buildingReducer(undefined, {})).toEqual({})
  })

  it('ADD_BUILDING should return the building object', () => {
    const action = actions.addBuilding(mockBuilding)
    const expected = mockBuilding

    expect(buildingReducer(undefined, action)).toEqual(expected)
  })

  it('ADD_BUILDING should return the building object', () => {
    const action = actions.clearBuilding()
    const expected = {}

    expect(buildingReducer(undefined, action)).toEqual(expected)
  })

})
