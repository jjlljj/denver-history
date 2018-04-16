/* eslint-disable */
import { apiGet, getDistrictBuildings, getBuilding } from './apiHelper';
import { mockBuilding, mockDistrict } from '../__mocks__/mockData';

describe('apiHelper', () => {

  describe('apiGet', () => {
    const mockUrl = 'fake-building-url-here'

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockBuilding)
      }))
    })

    it('should call fetch with the expected params', () => {
      const expected = mockUrl
      expect(window.fetch).not.toHaveBeenCalled()

      apiGet(mockUrl)
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return the expected response object', () => {
      const expected = mockBuilding

      expect(apiGet(mockUrl)).resolves.toEqual(expected)
    })

    it('should throw an error if the response is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }))

      const response = apiGet(mockUrl)
      const expected = Error('failed to get requested data')

      expect(response).rejects.toEqual(expected)
    })
  })

  describe('getDistrictBuildings', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockDistrict)
      }))
    })

    it('should call fetch with the expected params', () => {
      const expected = 'https://denver-history.herokuapp.com/api/v1/districts/3/buildings/map'
      expect(window.fetch).not.toHaveBeenCalled()

      getDistrictBuildings(3)
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return the expected response object', () => {
      const expected = mockDistrict

      expect(getDistrictBuildings(3)).resolves.toEqual(expected)
    })

    it('should throw an error if the response is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }))

      const response = getDistrictBuildings(3) 
      const expected = Error('failed to get requested data')

      expect(response).rejects.toEqual(expected)
    })

  })

  describe('getBuilding', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockBuilding)
      }))
    })

    it('should call fetch with the expected params', () => {
      const expected = 'https://denver-history.herokuapp.com/api/v1/buildings/603'
      expect(window.fetch).not.toHaveBeenCalled()

      getBuilding(603)
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return the expected response object', () => {
      const expected = mockBuilding

      expect(getBuilding(603)).resolves.toEqual(expected)
    })

    it('should throw an error if the response is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }))

      const response = getBuilding(603) 
      const expected = Error('failed to get requested data')

      expect(response).rejects.toEqual(expected)
    })
  })
})
