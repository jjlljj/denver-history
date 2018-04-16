/* eslint-disable */
import { sidebarReducer } from './sidebarReducer';
import * as actions from '../actions/index';
import { mockBuilding } from '../__mocks__/mockData';

describe('sidebarReducer', () => {

  it('should return the default state', () => {
    expect(sidebarReducer(undefined, {})).toEqual(false)
  })

  it('SHOW_SIDEBAR should return the new sidebar state', () => {
    const action = actions.showSidebar();
    const expected = true;

    expect(sidebarReducer(undefined, action)).toEqual(expected)
  })

  it('HIDE_SIDEBAR should return the new sidebar state', () => {
    const action = actions.hideSidebar();
    const expected = false;

    expect(sidebarReducer(undefined, action)).toEqual(expected)
  })

})
