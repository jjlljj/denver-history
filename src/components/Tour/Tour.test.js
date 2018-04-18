/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Tour } from './Tour';
jest.mock('./../../.key.js', () => () => ({ MAPBOX_TOKEN: 'faketoken' }));
jest.mock('../../../node_modules/mapbox-gl/dist/mapbox-gl', () => () => ({ Map: () => ({}) }));
jest.mock('../../../node_modules/threebox/', () => () => ({ threebox: jest.fn() }));
jest.mock('../../actions/index', () => () => ({ addDistrict: jest.fn() }));

const mockDistrict = [
  {
    "id": 5,
    "ldmk_num": 103,
    "ldmk_name": "Equitable Building",
    "aka_name": null,
    "ord_num": 453,
    "ord_year": 1977,
    "address_line1": "730 17th Street",
    "address_line2": null,
    "situs_num": 730,
    "situs_st": "17th",
    "situs_type": "ST",
    "historic_dist": 3,
    "state_hist_num": "5DV.121",
    "year_built": "c. 1892-93",
    "arch_bldr": null,
    "document": null,
    "photo_link": "Equitable_Building0.jpg",
    "notes": null,
    "gis_notes": null,
    "description": "Completed in 1892, the Equitable Building is significant for its role in the commercial and political history of Colorado. At the time of its completion, it was attributed with the development of 17th Street as a center of finance and business and has since served as the location for many distinguished businesses and law offices.The nine-story E-shaped bldg. cost $1.5 million prior to the silver crash in 1893. Example of Italian Renaissance Revival style of architecture and was originally owned by Equitable Life Insurance Co.",
    "address_id": null,
    "created_at": "2018-04-16T02:01:00.237Z",
    "updated_at": "2018-04-16T02:01:00.237Z",
    "situs_dir": null,
    "lon": "-104.991938634648",
    "lat": "39.7462977886473"
  },
  {
    "id": 6,
    "ldmk_num": 263,
    "ldmk_name": "Hover/Bromley Building",
    "aka_name": null,
    "ord_num": 271,
    "ord_year": 1996,
    "address_line1": "1348 Lawrence Street",
    "address_line2": "1390 Lawrence Street",
    "situs_num": 1348,
    "situs_st": "Lawrence",
    "situs_type": "ST",
    "historic_dist": 3,
    "state_hist_num": "5DV.1719",
    "year_built": "1901",
    "arch_bldr": null,
    "document": null,
    "photo_link": "W_A_Hover__Company0.jpg",
    "notes": null,
    "gis_notes": null,
    "description": "W. A. Hover & Company building located in Denver, Colorado. The 1901 W.A. Hover & Company Building is associated with the development of the wholesale drug industry form 1901 to 1949. The Hover Co. grew into one of the largest regional drug supply companies serving both Colorado and the surrounding states. The building is also architecturally significant as a good example the early 20th century Commercial Style and for its being one of only two intact examples of a commercial building designed by master architect Robert S. Roeschlaub.",
    "address_id": null,
    "created_at": "2018-04-16T02:01:00.237Z",
    "updated_at": "2018-04-16T02:01:00.237Z",
    "situs_dir": null,
    "lon": "-104.998887978911",
    "lat": "39.7463202027288"
  }
]
import { mockBuilding } from '../../__mocks__/mockdata';

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
