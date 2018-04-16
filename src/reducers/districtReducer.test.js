/* eslint-disable */
import { districtReducer } from './districtReducer'
import * as actions from '../actions/index'
import { mockDistrict } from '../__mocks__/mockData'

describe('districtReducer', () => {

  it('should return the default state', () => {
    expect(districtReducer(undefined, {})).toEqual([])
  })

  it('ADD_DISTRICT should return the building object', () => {
    const action = actions.addDistrict(mockDistrict)
    const expected = mockDistrict

    expect(districtReducer(undefined, action)).toEqual(expected)
  })

  it('ADD_DISTRICT should return the building object', () => {
    const action = actions.clearDistrict()
    const expected = []

    expect(districtReducer(undefined, action)).toEqual(expected)
  })

})
