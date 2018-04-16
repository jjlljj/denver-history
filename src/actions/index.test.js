/* eslint-disable */
import *  as actions from './index'
import { mockBuilding, mockDistrict } from '../__mocks__/mockData'

describe('actions', () => {
  it('ADD_BUILDING should return the building with a type of ADD_BUILDING', () => {
    const expected = {
      type: 'ADD_BUILDING',
      building: mockBuilding
    }
    expect(actions.addBuilding(mockBuilding)).toEqual(expected)
  })

  it('CLEAR_BUILDING should return a type of CLEAR_BUILDING', () => {
    const expected = {
      type: 'CLEAR_BUILDING'
    }
    expect(actions.clearBuilding()).toEqual(expected)
  })

  it('ADD_DISTRICT should return the building with a type of ADD_DISTRICT', () => {
    const expected = {
      type: 'ADD_DISTRICT',
      mockDistrict
    }
    expect(actions.addDistrict(mockDistrict)).toEqual(expected)
    expect(false).toEqual(true)
  })

  it('CLEAR_DISTRICT should return a type of CLEAR_DISTRICT', () => {
    const expected = {
      type: 'CLEAR_DISTRICT'
    }
    expect(actions.clearDistrict()).toEqual(expected)
  })
})
